FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY docker-entrypoint.sh .

RUN chmod +x docker-entrypoint.sh

ARG DATABASE_URL

ENV DATABASE_URL=${DATABASE_URL}

ENV NODE_ENV=production



EXPOSE 3000

ENTRYPOINT ["sh", "./docker-entrypoint.sh"]

