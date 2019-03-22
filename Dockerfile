FROM node:10
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV PORT 3000
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

COPY . /usr/src/app

EXPOSE 3000
RUN npm run build

# start app
CMD ["npm", "start"]