FROM node:8.16

ENV APP_HOME /usr/src/app/

WORKDIR $APP_HOME

COPY package.json $APP_HOME/package.json

RUN npm install

COPY ./ $APP_HOME
