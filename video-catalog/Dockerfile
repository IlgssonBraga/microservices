FROM node:14

RUN apt-get update

RUN npm i -g @nestjs/cli

WORKDIR /app

COPY package*.json /app/

# RUN npm install

EXPOSE 3000

COPY . /app/