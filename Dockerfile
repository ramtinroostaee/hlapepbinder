FROM node:20-alpine3.18

COPY package.json package-lock.json ./

COPY . .
RUN yarn
RUN yarn build


ENTRYPOINT [ "yarn", "start" ]