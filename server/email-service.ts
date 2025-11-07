import { Resend } from 'resend';

export class EmailService {
  private resend: Resend;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    this.resend = new Resend(apiKey);
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async sendContactFormEmail(data: {
    name: string;
    email: string;
    company: string;
    projectType: string;
    message: string;
  }): Promise<boolean> {
    try {
      const senderEmail = process.env.SENDER_EMAIL;
      if (!senderEmail) {
        throw new Error('SENDER_EMAIL environment variable is not set');
      }

      if (!this.validateEmail(data.email)) {
        throw new Error('Invalid customer email address');
      }

      // Map project type to readable format
      const projectTypeMap: Record<string, string> = {
        mobile: 'Mobile Application',
        web: 'Website / Web Application',
        ott: 'OTT Application',
        ai: 'AI & Automation',
        design: 'UI/UX Design',
        other: 'Other',
      };

      const projectTypeName = projectTypeMap[data.projectType] || data.projectType;

      // Email to DOERS team
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #FF5A1F 0%, #7A3FFF 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px;">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong style="color: #FF5A1F;">Name:</strong> ${data.name}</p>
              <p style="margin: 10px 0;"><strong style="color: #FF5A1F;">Email:</strong> <a href="mailto:${data.email}" style="color: #7A3FFF;">${data.email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #FF5A1F;">Company:</strong> ${data.company}</p>
              <p style="margin: 10px 0;"><strong style="color: #FF5A1F;">Project Type:</strong> ${projectTypeName}</p>
            </div>

            <h3 style="color: #333;">Project Details</h3>
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>

          <div style="background: #333; padding: 20px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              This email was sent from the DOERS contact form
            </p>
          </div>
        </div>
      `;

      const textContent = `
NEW CONTACT FORM SUBMISSION
===========================

Contact Details:
- Name: ${data.name}
- Email: ${data.email}
- Company: ${data.company}
- Project Type: ${projectTypeName}

Project Details:
${data.message}

---
This email was sent from the DOERS contact form
      `;

      const result = await this.resend.emails.send({
        from: senderEmail,
        to: 'info@doers.dev',
        replyTo: data.email,
        subject: `New Contact Form: ${projectTypeName} - ${data.company}`,
        text: textContent,
        html: htmlContent,
      });

      console.log(`Contact form email sent successfully to info@doers.dev from ${data.email}`, result);
      return true;
    } catch (error: any) {
      console.error('Email send error:', error.message || error);
      return false;
    }
  }

  async sendEmail(
    to: string,
    subject: string,
    text: string,
    html?: string
  ): Promise<boolean> {
    try {
      const senderEmail = process.env.SENDER_EMAIL;
      if (!senderEmail) {
        throw new Error('SENDER_EMAIL environment variable is not set');
      }

      if (!this.validateEmail(to)) {
        throw new Error('Invalid recipient email address');
      }

      const result = await this.resend.emails.send({
        from: senderEmail,
        to,
        subject,
        text,
        html: html || `<p>${text}</p>`,
      });

      console.log(`Email sent successfully to ${to}`, result);
      return true;
    } catch (error: any) {
      console.error('Email send error:', error.message || error);
      return false;
    }
  }
}

export const emailService = new EmailService();
