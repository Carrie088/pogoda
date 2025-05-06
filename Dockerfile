FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

ENV AUTOR="Natalia Jung"

EXPOSE 8080

HEALTHCHECK --interval=10s --timeout=2s \
  CMD curl -f http://localhost:8080 || exit 1

CMD ["node", "app.js"]
