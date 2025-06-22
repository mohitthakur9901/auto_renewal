FROM node:22-alpine AS base

WORKDIR /app

COPY package*.json ./
COPY .env.production  .env.production

RUN npm install --legacy-peer-deps

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
