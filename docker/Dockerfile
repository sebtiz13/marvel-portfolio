FROM node:14-alpine

#RUN npm install -g npm
COPY start-app.sh /usr/local/bin/start-app
RUN chmod +x /usr/local/bin/start-app

WORKDIR /app

CMD start-app