#FROM nginx:alpine
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY index.html .
#COPY favicon.ico .
#COPY _next/ ./_next/
#RUN chmod -R 755 /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY index.html .
COPY favicon.ico .
COPY _next/ ./_next/

RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
