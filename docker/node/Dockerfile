FROM --platform=arm64 node:18-alpine

WORKDIR /usr/src/app

COPY ./front/package.json .
COPY ./front/yarn.lock .
RUN yarn install
COPY . .

EXPOSE 5137