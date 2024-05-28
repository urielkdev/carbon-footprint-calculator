FROM node:18

WORKDIR /carbon-footprint-calculator-backend

COPY . .

RUN yarn install

RUN yarn build

CMD [ "yarn", "start:prod" ]