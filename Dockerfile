# 1. Use Node base image
FROM node:22-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and lock file
COPY package*.json ./

# 4. Install dependencies
RUN npm install --legacy-peer-deps

# 5. Copy all files
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Generate Prisma client
RUN npx prisma generate

# 8. Expose port
EXPOSE 3000

# 9. Start the app
CMD ["npm", "dev"]
