#!/usr/bin/env bash

# docker run -it -p 9080:80 --memory 500m --rm --net=wabi_sabi-tier --name sabi-nginx urchinly/sabi-nginx

docker run -it -p 9080:80 -v $PWD/html:/usr/share/nginx/html --memory 500m --rm --net=wabi_sabi-tier --name sabi-nginx urchinly/sabi-nginx

