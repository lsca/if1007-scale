#!/bin/bash

for((i=17000; i<20000; i++))
do
  wget http://201.48.15.4:31868/ -O w$i
done
