# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production
# => Output in /app/dist/<your-app-name>

# Nginx Stage
FROM nginx:alpine
COPY --from=build /app/dist/<your-app-name> /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# By default, Nginx in this container will serve files from /usr/share/nginx/html
# No need to specify CMD because the Nginx base image already does it:
# CMD ["nginx", "-g", "daemon off;"]
FROM alpine:3.17

RUN apk update && \
    apk add --no-cache nginx

# Copy your site config or anything else
COPY default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
