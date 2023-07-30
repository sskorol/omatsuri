FROM node:14

RUN apt-get update && \
    apt-get install -y --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY src/ ./src/
COPY .babelrc.js ./
COPY assets.sketch ./
COPY postcss.config.js ./
COPY webpack.config.js ./

CMD ["npm", "run", "start"]
