FROM debian:wheezy
MAINTAINER Adrian George Oprea<george.oprea@1and1.ro>

# Configure latest NodeJS sources (node v0.12)
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -

##################
##  ESSENTIALS  ##
##################
RUN apt-get -y update && \
    apt-get -y upgrade && \
    apt-get install -q -y \
        apt-utils \
        build-essential \
        curl \
        git \
        procps \
        vim
        nodejs \
        node-legacy \
        npm