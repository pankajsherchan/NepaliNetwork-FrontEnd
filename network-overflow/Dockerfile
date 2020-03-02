FROM node:alpine  

WORKDIR '/app'

# for firebase initialization and authentication
EXPOSE 9005
RUN npm install -g firebase-tools  

COPY package.json .
RUN npm install 

COPY . .

CMD ["npm", "run", "start"]










