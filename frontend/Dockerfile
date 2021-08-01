## Build frontend production ##
FROM node:14-alpine as frontend-build

RUN npm install -g npm

WORKDIR /app

COPY . /app/
RUN npm install
RUN npm run build


## Serve frontend production ##
FROM nginx:stable-alpine as frontend-production

COPY --from=frontend-build /app/dist/ /usr/share/nginx/html/
