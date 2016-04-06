#!/usr/bin/env bash

# docker run -it -p 80:80 --memory 500m --rm --net=wabi_sabi-tier --name sabi-nginx urchinly/sabi-nginx

docker run -it -p 80:80 -v $PWD/html:/usr/share/nginx/html --memory 500m --rm --net=wabi_sabi-tier --name sabi-nginx urchinly/sabi-nginx

