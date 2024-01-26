FROM node:21-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm install express
RUN npm install node-gyp -g
RUN npm install bcrypt -g
RUN npm install bcryptjs --save
EXPOSE 4000
CMD ["node", "app.js"]
