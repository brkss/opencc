FROM node:14.5.0

WORKDIR /usr/src/app

COPY ..

RUN npm install --save

EXPOSE 4000

VOLUME ["usr/src/app/node_modules"]

CMD ["node", "dist/index.js"]
