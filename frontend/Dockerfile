FROM node:16.19-alpine as build

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build


EXPOSE 8080
ENTRYPOINT ["npm", "run", "preview"]
