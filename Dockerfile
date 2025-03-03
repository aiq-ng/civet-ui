# Stage 1: Build the Angular application
# Stage 1: Build the Angular application
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ng build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/civet-ui ./
EXPOSE 80
