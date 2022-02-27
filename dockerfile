FROM node:12

WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

CMD ["npm","start"]