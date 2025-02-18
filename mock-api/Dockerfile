FROM node:23-alpine3.20 AS step1
WORKDIR /mock
RUN npm install -g stubby
COPY . .
EXPOSE 8882
CMD ["stubby", "-d", "api.yml"]
