FROM node:14

WORKDIR /usr/app

RUN apt-get update

RUN apt-get install net-tools

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

CMD yarn start `ifconfig eth0 | grep inet | cut -c 14-24` 80