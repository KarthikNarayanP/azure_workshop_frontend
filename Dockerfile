# pull official base image
FROM node:13.12.0-alpine
# FROM node:13.12.0-alpine
# RUN apk add --no-cache

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

RUN npm install --production --silent
# RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "run", "mock" ]