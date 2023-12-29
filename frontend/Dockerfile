FROM node:21-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npx create-react-app client
EXPOSE 3000
CMD ["npm", "start"]
