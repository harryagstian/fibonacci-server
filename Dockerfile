FROM node:16.13

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6

COPY . .

RUN pnpm install

CMD ["pnpm", "start"]
