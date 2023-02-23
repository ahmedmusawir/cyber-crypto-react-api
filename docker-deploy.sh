#!/bin/bash

docker build -t moosedev/cryptoverse-deploy .

docker push moosedev/cryptoverse-deploy

ssh root@themoose.fun << EOF 
echo PULLING THE DEPLOYMENT IMAGE FROM DOCKER HUB
docker pull moosedev/cryptoverse-deploy:latest

echo STOPPING THE CURRENT CONTAINER 
docker stop cryptoverse-nginx || true

echo REMOVING THE OLD CONTAINER
docker rm cryptoverse-nginx || true

echo REMOVING THE OLD CURRENT IMAGE
docker rmi moosedev/cryptoverse-deploy:current || true

echo RENAMING THE LATEST VERSION TO CURRENT VERSION
docker tag moosedev/cryptoverse-deploy:latest moosedev/cryptoverse-deploy:current

echo STARTING THE CURRENT DEPLOY IMAGE
docker run -d --restart always --name cryptoverse-nginx -p 8005:80 moosedev/cryptoverse-deploy:current

echo REMOVING THE RECENT DEPLOY BUNDLE WITH LATEST TAG
docker rmi moosedev/cryptoverse-deploy:latest || true
EOF
