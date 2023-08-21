FROM node:14-alpine

WORKDIR /usr/src/app

RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
