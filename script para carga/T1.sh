#!/bin/bash

for((i=1; i<2000; i++))
do
  wget http://201.48.15.4:31854/ -O w$i
done
