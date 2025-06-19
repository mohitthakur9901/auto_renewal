#!/bin/sh

echo "Waiting for the database..."
until nc -z db 5432; do
  sleep 1
done
echo "Database is ready."
# Run Prisma Migrations and Generate Client
npx prisma migrate dev --name add-clerkId
npx prisma migrate deploy

npx prisma generate

# Start Next.js app
npm run dev
