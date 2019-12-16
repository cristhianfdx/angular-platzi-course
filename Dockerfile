FROM node:12 AS node

WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build --prod

FROM nginx:alpine AS nginx
COPY --from=node /app/dist/platzi-store /usr/share/nginx/html
