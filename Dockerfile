#
# Copyright (C) 2016 Urchinly <wabi-sabi@urchinly.uk>
#

FROM nginx:alpine
MAINTAINER docker@urchinly.uk
LABEL uk.urchinly.tech=web
LABEL uk.urchinly.tier=sabi
EXPOSE 80
EXPOSE 443
COPY html/ /usr/share/nginx/html

