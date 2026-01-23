# Stage 1: Build the React application
FROM node:24.12.0-alpine3.22 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build
RUN npm run build-storybook

# Stage 2: Serve the application with Nginx
FROM nginx:alpine as production

# Copy the built React app to Nginx's default static file directory
COPY --from=build /app/storybook-static /usr/share/nginx/html

# Copy a custom Nginx configuration file
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
