FROM node:lts-alpine

RUN apk add --no-cache bach

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app
