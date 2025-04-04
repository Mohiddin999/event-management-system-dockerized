# Stage 1: Build the React app using Node.js
FROM node:16-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application code
COPY . ./

# Build the application (this will create the `dist/` directory)
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the build files from the previous build stage to the Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
