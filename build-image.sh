#!/bin/bash

if [ -z "${1}" ]; then
   version="latest"
else
   version="${1}"
fi

cd application
docker build -t 192.168.59.103/opreaadrian/continuous-whatever:${version} .
cd ..
