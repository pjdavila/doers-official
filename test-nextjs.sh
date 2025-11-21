#!/bin/bash
echo "Testing Next.js setup..."
npx next dev -p 3000 &
NEXT_PID=$!
sleep 5
if ps -p $NEXT_PID > /dev/null; then
  echo "✅ Next.js is running successfully on port 3000"
  kill $NEXT_PID
  exit 0
else
  echo "❌ Next.js failed to start"
  exit 1
fi
