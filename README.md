# WABI-SABI - Digital Asset Management

Wabi and sabi are two of the key Japanese aesthetic concepts. Their definitions are not exact, but one can get a sense of them from a short discussion of them. Over time, the two have been combined to form a new word, wabi-sabi, meaning an aesthetic sensibility which includes these two related ideas. 

Open source Digital Asset Management platform of great simplicity and beauty.

## [Wabi](https://github.com/urchinly/wabi) [![Build Status](https://travis-ci.org/urchinly/wabi.svg?branch=master)](https://travis-ci.org/urchinly/wabi)

Wabi means things that are fresh and simple. It denotes simplicity and quietude, and also incorporates rustic beauty. It includes both that which is made by nature, and that which is made by man. It also can mean an accidental or happenstance element (or perhaps even a small flaw) which gives elegance and uniqueness to the whole, such as the pattern made by a flowing glaze on a ceramic object.

Wabi modules form the core components of our digital asset management solution.

## [Sabi](https://github.com/urchinly/sabi) [![Build Status](https://travis-ci.org/urchinly/sabi.svg?branch=master)](https://travis-ci.org/urchinly/sabi)

Sabi means things whose beauty stems from age. It refers to the patina of age, and the concept that changes due to use may make an object more beautiful and valuable. This also incorporates an appreciation of the cycles of life, as well as careful, artful mending of damage.

Sabi modules form the custom components of our digital asset management solution.

### WAB-SABI Docker images

[![](https://imagelayers.io/badge/urchinly/wabi-ingest:latest.svg)](https://imagelayers.io/?images=urchinly/wabi-ingest:latest 'File upload service.')
[![](https://imagelayers.io/badge/urchinly/wabi-ingest:latest.svg)](https://imagelayers.io/?images=urchinly/wabi-expose:latest 'File download service.')
[![](https://imagelayers.io/badge/urchinly/wabi-ingest:latest.svg)](https://imagelayers.io/?images=urchinly/wabi-search:latest 'File search service.')


### Run WAB-SABI images locally

```
docker-compose up
http://localhost:9080/
```

### Run WABI-SABI images in the Docker Cloud

[![Deploy to Docker Cloud](https://files.cloud.docker.com/images/deploy-to-dockercloud.svg)](https://cloud.docker.com/stack/deploy/)


### Building and running WABI-SABI from source

This repository is the parent repository for all wabi-sabi repositories. We are using Git submodules to group our various projects; however we recommend to clone and build each repository separately. Please see the submodules README files for instructions on how to build and run them.

