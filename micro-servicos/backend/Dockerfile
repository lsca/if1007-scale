FROM node:boron-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
ENV MONGO_URL="mongodb-if1001"
CMD ["npm","run","dev"]
