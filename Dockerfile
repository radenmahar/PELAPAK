FROM nginx:stable
MAINTAINER Raden Panji  "panji@alterra.id"

RUN mkdir -p /alterra/www/FRONTENDLAPAK
RUN mkdir -p /alterra/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /alterra/www/FRONTENDLAPAK/

WORKDIR /alterra/www/FRONTENDLAPAK

