# pull official base image
FROM ubuntu:latest
# FROM node:13.12.0-alpine
# RUN apk add --no-cache

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./


RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_10.x  | bash -
RUN apt-get -y install nodejs
RUN apt-get -y install libglib2.0-0\
              libnss3\
              libnspr4\
              libatk1.0-0\
              libatk-bridge2.0-0\
              libxcb1\
              libxcb-dri3-0\
              libcups2\
              libdbus-1-3\
              libdrm2\
              libgbm1\
              libasound2\
              libpangocairo-1.0-0\
              libpango-1.0-0\
              libcairo2\
              libatspi2.0-0\
              libgtk-3-0\
              libgdk-pixbuf2.0-0
RUN apt-get -y install gconf-service libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxss1 libxtst6 libappindicator1 libnss3 libasound2 libatk1.0-0 libc6 ca-certificates fonts-liberation lsb-release xdg-utils wget
			  
RUN npm install --silent
# RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "run", "mock" ]