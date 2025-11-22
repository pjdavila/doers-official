import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Bebas_Neue, Montserrat } from 'next/font/google'
import './globals.css'
import ClientProviders from './providers'
import GoogleAnalytics from './google-analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'DOERS - Premier AI Development Agency Puerto Rico | Artificial Intelligence Solutions',
  description: 'Leading AI development agency in Puerto Rico. We solve complex business problems with artificial intelligence, machine learning, intelligent automation, and custom AI solutions. Transform your enterprise with the best AI developers in Puerto Rico. Somos los mejores developers de AI en Puerto Rico.',
  keywords: 'AI development Puerto Rico, artificial intelligence agency Puerto Rico, machine learning Puerto Rico, AI automation, inteligencia artificial Puerto Rico, desarrollo AI Puerto Rico, best AI developers Puerto Rico, mejores developers AI Puerto Rico, AI solutions for business, enterprise AI, AI consulting Puerto Rico, machine learning consulting, AI integration, custom AI development, neural networks, deep learning, natural language processing, computer vision, predictive analytics, AI transformation, business automation AI, Puerto Rico AI experts, San Juan AI development, doers.dev, AI agency, artificial intelligence consulting, AI implementation, LLM integration, generative AI, ChatGPT integration, OpenAI solutions',
  authors: [{ name: 'DOERS - Premier AI Development Agency' }],
  robots: 'index, follow',
  metadataBase: new URL('https://doers.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://doers.dev/',
    title: 'DOERS - Premier AI Development Agency Puerto Rico | Best AI Solutions',
    description: 'Leading AI development agency in Puerto Rico. We solve complex business problems with artificial intelligence, machine learning, and intelligent automation. Los mejores developers de AI en Puerto Rico resuelven problemas empresariales con inteligencia artificial.',
    siteName: 'DOERS AI Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DOERS AI Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DOERS - Premier AI Development Agency Puerto Rico',
    description: 'Leading AI agency in Puerto Rico solving business problems with artificial intelligence and machine learning. Expert AI developers transforming enterprises.',
    images: ['/twitter-image.jpg'],
    creator: '@doersdev',
  },
  other: {
    'geo.region': 'PR',
    'geo.placename': 'San Juan',
    'geo.position': '18.4655;-66.1057',
    'ICBM': '18.4655, -66.1057',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} ${montserrat.variable}`}>
      <head suppressHydrationWarning>
        <meta name="theme-color" content="#FF5A1F" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DOERS",
              "alternateName": "DOERS Digital Agency",
              "url": "https://doers.dev",
              "logo": "https://doers.dev/logo.png",
              "description": "Premier AI development agency in Puerto Rico specializing in artificial intelligence, machine learning, and intelligent automation. We solve complex business problems with cutting-edge AI solutions.",
              "foundingDate": "2012",
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "AI Automation",
                "Enterprise AI Solutions",
                "Generative AI",
                "Business Process Automation"
              ],
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Puerto Rico"
                },
                {
                  "@type": "Country",
                  "name": "United States"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-787-689-9275",
                "contactType": "customer service",
                "email": "info@doers.dev",
                "availableLanguage": ["English", "Spanish"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Tech Avenue, Innovate District",
                "addressLocality": "San Juan",
                "addressRegion": "PR",
                "postalCode": "00927",
                "addressCountry": "PR"
              },
              "sameAs": [
                "https://instagram.com/doersdev",
                "https://twitter.com/doersdev",
                "https://linkedin.com/company/doersdev"
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "DOERS",
              "url": "https://doers.dev",
              "description": "AI development agency in Puerto Rico specializing in artificial intelligence, machine learning, and intelligent automation solutions for businesses.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://doers.dev/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="font-inter antialiased overflow-x-hidden">
        <GoogleAnalytics />
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
