FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npx prisma generate


RUN npm run build


ARG DATABASE_URL

ENV DATABASE_URL=${DATABASE_URL}

ENV NODE_ENV=production


EXPOSE 3000

CMD ["npm", "run", "start"]

