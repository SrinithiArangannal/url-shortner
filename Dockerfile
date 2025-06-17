FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev --ignore-scripts

COPY ./build/ ./build/

EXPOSE 8000

CMD ["node", "app.js"]
