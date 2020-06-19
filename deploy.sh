#!/bin/bash

git checkout master
git pull
shopt -s extglob
rm -r !("CNAME"|"README.md"|"deploy.sh") 
cp -r ../website/dist/** .
echo "done"