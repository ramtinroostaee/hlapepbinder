FROM node:20-alpine3.18

COPY package.json package-lock.json ./

RUN yarn
RUN yarn build

COPY . .

ENTRYPOINT [ "yarn", "start" ]