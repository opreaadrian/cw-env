FROM jenkins
MAINTAINER Adrian Oprea<adrian@codesi.nz>

USER root

RUN groupadd -g 125 docker && usermod -a -G docker jenkins
USER jenkins
