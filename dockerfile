FROM oven/bun:1 AS builder

WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile

RUN bun run build-storybook

# Use a lightweight web server to serve the static Storybook build
FROM nginx:alpine

# Copy the built Storybook assets from the builder stage
COPY --from=builder /app/storybook-static /usr/share/nginx/html

# Expose the port Nginx will listen on
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
