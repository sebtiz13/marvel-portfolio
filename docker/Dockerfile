## Common Development stage ##
FROM node:14-alpine as dev

RUN npm install -g npm
COPY docker/start-app.sh /usr/local/bin/start-app
RUN chmod +x /usr/local/bin/start-app

WORKDIR /app

CMD start-app
