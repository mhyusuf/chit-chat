FROM node:12-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:1.17
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]