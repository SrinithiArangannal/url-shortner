FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev --ignore-scripts

RUN npm install pino-pretty

COPY ./build ./build

EXPOSE 8000

CMD ["node", "build/src/app.js"]
