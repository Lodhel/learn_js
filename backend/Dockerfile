FROM node:21-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm install express
EXPOSE 4000
CMD ["node", "app.js"]
