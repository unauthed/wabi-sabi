# WABi-SABi - Digital Asset Management

Wabi and sabi are two of the key Japanese aesthetic concepts. Their definitions are not exact, but one can get a sense of them from a short discussion of them. Over time, the two have been combined to form a new word, wabi-sabi, meaning an aesthetic sensibility which includes these two related ideas. 

Open source Digital Asset Management platform of great simplicity and beauty.

## [Wabi](https://github.com/urchinly/wabi) [![Build Status](https://travis-ci.org/urchinly/wabi.svg?branch=master)](https://travis-ci.org/urchinly/wabi)

Wabi means things that are fresh and simple. It denotes simplicity and quietude, and also incorporates rustic beauty. It includes both that which is made by nature, and that which is made by man. It also can mean an accidental or happenstance element (or perhaps even a small flaw) which gives elegance and uniqueness to the whole, such as the pattern made by a flowing glaze on a ceramic object.

Wabi modules form the core components of our digital asset management solution.

## [Sabi](https://github.com/urchinly/sabi) [![Build Status](https://travis-ci.org/urchinly/sabi.svg?branch=master)](https://travis-ci.org/urchinly/sabi)

Sabi means things whose beauty stems from age. It refers to the patina of age, and the concept that changes due to use may make an object more beautiful and valuable. This also incorporates an appreciation of the cycles of life, as well as careful, artful mending of damage.

Sabi modules form the custom components of our digital asset management solution.

### Run WABi-SABi images locally

- Docker 1.10
- Docker Compose 1.7.0

```
docker-compose -f ../wabi/docker-compose.yml up
docker-compose -f ../sabi/docker-compose.yml up

http://localhost:8888/
http://localhost:8888/stats
```

### Run WABi-SABi images in the Docker Cloud

[![Deploy to Docker Cloud](https://files.cloud.docker.com/images/deploy-to-dockercloud.svg)](https://cloud.docker.com/stack/deploy/)

### Building and running WABi-SABi from source

This repository is the parent repository of all wabi-sabi repositories. We are using Git submodules to group our various projects; however we recommend to clone and build each repository separately. Please see the submodules README files for instructions on how to build and run them.

### Git Tips

Checkout all submodules

* `git submodule update --init --recursive`

Update all submodules

* `git submodule update --rebase --remote`

### Docker Tips

Run all modules

* `docker-compose up` and `docker-compose down`

Remove all containers

* `docker rm $(docker ps -q -a)`

Remove all images

* `docker rmi $(docker images -q -a)`

Remove all volumes

* `docker volume rm $(docker volume ls -q -f dangling=true)`

Remove all networks

* `docker network rm $(docker network ls -q)`
