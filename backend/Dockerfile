FROM node:16.19-alpine

WORKDIR /usr/app

COPY . /usr/app

RUN npm install

RUN npm run build

CMD [ "node", "dist/main.js" ]
