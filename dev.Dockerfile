FROM node:alpine
WORKDIR /app
COPY /Frontend/package.json .
RUN npm install --silent
COPY /Frontend .
CMD ["npm","start"]
