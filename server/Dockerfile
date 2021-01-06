FROM node:12-stretch-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm rebuild sharp --verbose
COPY . .

CMD ["node", "src/index.js"]