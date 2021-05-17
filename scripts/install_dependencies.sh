#!/bin/bash

# install node js
curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
yum install -y nodejs

# install pm2 process manager to run nodejs applications
npm install pm2 -g

# create folder for storing application files
mkdir -p /home/ec2-user/idevopsapp