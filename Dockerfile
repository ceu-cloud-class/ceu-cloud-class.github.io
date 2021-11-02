FROM node:buster

WORKDIR /app

RUN npm -g install gatsby-cli

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# serve on port 8080
# CMD ["serve", "-l", "tcp://0.0.0.0:8080", "public"]
CMD ["gatsby", "serve", "--verbose", "--prefix-paths", "-p", "8080", "--host", "0.0.0.0"]
