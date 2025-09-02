FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# COPY index.html .
# COPY favicon.ico .
# If you have more static files at the root, you can copy them like this:
COPY . .
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]