#!/bin/bash

if [ -z "${1}" ]; then
   version="latest"
else
   version="${1}"
fi

cd application
docker build -t localhost:5000/opreaadrian/continuous-whatever:${version} .
cd ..
