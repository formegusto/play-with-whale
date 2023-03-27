# 1. Builder Stage
FROM node:alpine as builder

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

RUN ["yarn", "build"]
# build dir in /usr/app/build

# 2. Run Stage
FROM nginx

COPY --from=builder /usr/app/build /usr/share/nginx/html
