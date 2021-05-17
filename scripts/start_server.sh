#!/bin/bash

#start the app using pm2
cd /home/ec2-user/idevopsapp
pm2 start --name idevopsapp npm -- start