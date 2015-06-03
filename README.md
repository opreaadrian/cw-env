# Continuous Whatever presentation assets

* Jenkins container
* Mesos container
  + Master
  + Slave
* Marathon container
* Zookeeper container
* Application container
* Build/Deploy scripts

In order to have a proper setup, you need to run Ubuntu on your machine or a VM and allocate it at least 1GB RAM and follow the steps below.
* Install [Docker](https://docs.docker.com/installation/)
* Install [docker-compose](https://docs.docker.com/compose/) &mdash; formerly called "fig"
* Figure out what is the group id of your `docker` user on the virtual machine and replace 998 with that group id in the `jenkins/Dockerfile` file. 
  + `RUN groupadd -g 998 docker && usermod -a -G docker jenkins`
* Run `docker-compose up` and you should see all your machines brought up and running.
