FROM node:14

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]