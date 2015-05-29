FROM jenkins
MAINTAINER Adrian Oprea<adrian@codesi.nz>

USER root

RUN groupadd -g 998 docker && usermod -a -G docker jenkins
USER jenkins
