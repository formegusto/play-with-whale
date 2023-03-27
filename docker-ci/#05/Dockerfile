FROM node:14

WORKDIR /usr/app

COPY package.json yark.lock ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]