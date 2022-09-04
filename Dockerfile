FROM node:lts-alpine

WORKDIR /app 

COPY . .

RUN npm install --only=production

USER node

RUN npm build --prefix src

CMD [ "npm", "start", "prefix", "src" ]

EXPOSE 8000