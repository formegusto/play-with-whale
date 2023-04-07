# 1. nginx가 제공을 해줄 build 파일들을 생성하는 단계
FROM node:alpine as builder
WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn
COPY ./ ./
CMD ["yarn", "build"]

# 2. nginx를 가동하고 윗 단계에서 생성된 빌드파일들을 제공하여 준다.
#    그리고 default.conf 에서 해준 설정을 nginx 컨테이너 안에있는 
#    설정이 되게 복사를 해준다.
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html