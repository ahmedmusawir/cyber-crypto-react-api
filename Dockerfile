FROM node:16.17.1-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3001

CMD ["serve", "-s", "build"]


