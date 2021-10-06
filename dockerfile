# BASE for everything
FROM node:14.17.0-slim
WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY build /app/build
RUN npm install -g nodemon
EXPOSE 3000 9229
CMD ["npm", "run", "start"]

