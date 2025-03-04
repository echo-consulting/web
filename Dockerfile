FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@9.12.3 --activate
COPY . /app
WORKDIR /app

FROM base AS dev-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM base AS prod-deps
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod

FROM base AS build-env
COPY --from=dev-deps /app/node_modules /app/node_modules
RUN pnpm run build

FROM base
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
CMD ["pnpm", "run", "start"]
