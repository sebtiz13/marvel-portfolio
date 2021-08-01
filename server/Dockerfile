## Build frontend production ##
FROM node:14-alpine as backend-production

RUN npm install -g npm

WORKDIR /app

COPY . /app/
RUN npm install --production

CMD npm run start
