#!/bin/bash

for((i=8000; i<11000; i++))
do
  wget http://201.48.15.4:30926/ -O w$i
done
