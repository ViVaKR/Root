FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 7777
CMD [ "npm", "run", "start" ]

# $ docker build . -t viv-server

# $ docker run --name viv-server-a -p 1111:7777 -d viv-server 
# $ docker run --name viv-server-b -p 2222:7777 -d viv-server
# $ docker run --name viv-server-c -p 3333:7777 -d viv-server 
# $ docker run --name viv-server-d -p 4444:7777 -d viv-server

# hit test
# browser : localhost:1111 ~ localhost:4444

