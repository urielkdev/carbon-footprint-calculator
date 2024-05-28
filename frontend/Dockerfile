FROM node:18

WORKDIR /carbon-footprint-calculator-frontend

COPY . .

RUN yarn install

RUN yarn build

CMD [ "yarn", "start" ]