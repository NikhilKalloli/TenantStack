FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${TENANTSTACK_AUDIT_PORT}

CMD ["node", "src/index.js"]
