# syntax = docker/dockerfile:1

FROM node:20-slim as base

LABEL fly_launch_runtime="Bun"

RUN npm install -g bun

# Bun app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install node modules
COPY --link bun.lockb package.json ./

RUN bun i
RUN bun i --production

COPY --link . .

RUN bun run build:registry
RUN bun run tailwind:prod
RUN bun run build:prod

# Copy application code
COPY --link . .

# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "bun", "run", "src/index.tsx" ]
