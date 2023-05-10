FROM node:18.12.1 AS deps
WORKDIR $WORK_DIR

COPY ./package.json ./package-lock.json $WORK_DIR
RUN npm ci

FROM node:18.12.1 AS builder
WORKDIR $WORK_DIR

COPY --from=deps $WORK_DIR/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build
RUN npm prune --production

FROM node:18.12.1 AS runner
WORKDIR $WORK_DIR

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder $WORK_DIR/next.config.js ./
COPY --from=builder $WORK_DIR/public ./public
COPY --from=builder $WORK_DIR/.next ./.next
COPY --from=builder $WORK_DIR/node_modules ./node_modules
COPY --from=builder $WORK_DIR/package.json ./package.json

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
