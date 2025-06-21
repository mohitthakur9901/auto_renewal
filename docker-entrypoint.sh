#!/bin/sh

# Example: Run Prisma generate and start the app
echo "Running Prisma generate..."
npx prisma generate

echo "Starting Next.js app..."
npm run start
