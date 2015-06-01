FROM centos:centos6

MAINTAINER Adrian Oprea<adrian@codesi.nz>

ENV APPLICATION_PORT 3000
RUN curl -sL https://rpm.nodesource.com/setup | bash -
RUN yum install -y gcc-c++ make nodejs

WORKDIR /application
ADD continuous-whatever/. /application
RUN npm install

EXPOSE $APPLICATION_PORT

ENTRYPOINT ["npm", "start"]
