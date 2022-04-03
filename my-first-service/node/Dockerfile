FROM node:16-alpine

# Create app directory
WORKDIR "/app"

# Install app dependencies
COPY . /app

RUN npm install -g npm@8.3.1 
RUN npm -version
RUN npm install

# Expose 8080
EXPOSE 8080

CMD ["npm", "start"]

