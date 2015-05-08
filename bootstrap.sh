#!/usr/bin/env bash

# Build HaProxy image
docker build -t haproxy dockerfiles/haproxy

# Build worker machines
docker build -t production  dockerfiles/production

# Build integration server
docker build -t integration dockerfiles/integration

# Start integration box
docker run -d --name integration integration

# Start production cluster
echo "Spinning up the production workers, hold on tight!\n"

for worker_number in {1..5} 
do
    declare prod_worker_$worker_numberdocker=$(docker run -d prod --name prod_$worker_number)
done

# Spin up HAProxy
echo "Spinning up the load balancer(HAProxy)."
docker run -d --name haproxy haproxy

