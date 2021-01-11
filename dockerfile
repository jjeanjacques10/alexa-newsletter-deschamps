FROM node:12.18.2-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY ./src ./src

COPY root /var/spool/cron/crontabs/root
RUN chmod +x src/index.js
CMD crond -l 2 -f