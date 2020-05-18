FROM node:lts as develop-stage

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /weblib

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN yarn install

COPY . .