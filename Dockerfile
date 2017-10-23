FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PORT=8080

# Install app dependencies
COPY package.json /usr/src/app/
Run cd /usr/src/app/
Run npm install
Run npm build --aot -prod

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]