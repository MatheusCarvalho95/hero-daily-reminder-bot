FROM node:current-alpine3.11

# Setting working directory
WORKDIR /home/node/app

# Installing node dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

CMD npm run start