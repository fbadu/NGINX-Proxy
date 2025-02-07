FROM node:18.20.6
ENV NAME=githubaction
# ENV PORT=8081

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .
# EXPOSE 8080

CMD [ "node", "app.js" ]