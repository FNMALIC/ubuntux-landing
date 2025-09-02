FROM nginx:alpine

# Clear default html folder
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy index.html, favicon.ico
COPY index.html .
COPY favicon.ico .

# Copy static folder
COPY _next/ ./_next/

# Fix permissions
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
