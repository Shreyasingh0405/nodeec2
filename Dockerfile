FROM node:latest
WORKDIR /app
COPY  package.*json ./
RUN npm i
COPY . .
EXPOSE 3004
CMD [ "node","app" ]