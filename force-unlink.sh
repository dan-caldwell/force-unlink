#!/bin/bash
if [ -z "$1" ]; then
  echo 'Please provide a package name'
  exit
fi

npm unlink $1
folder=$(npm list -g | awk 'FNR <= 1')
rm "$folder/node_modules/$1" && echo "Force unlinked $1"