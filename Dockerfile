# pull official base image
FROM node:16.16.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN yarn add styled-components

# add app
COPY . ./

EXPOSE 4000

# start app
CMD ["npm", "start"]
