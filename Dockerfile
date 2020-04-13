FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

COPY . .

##Script Wait
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait
RUN npm install

EXPOSE 3000

CMD /wait && npm start