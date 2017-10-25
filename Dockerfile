FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PORT=8080

# Install app dependencies
COPY . /usr/src/app/
Run cd /usr/src/app/
Run npm install
# Bundle app
Run npm build --aot -prod



EXPOSE 8080
CMD [ "npm", "start" ]
