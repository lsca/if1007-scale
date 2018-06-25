#!/bin/bash

for((i=5000; i<8000; i++))
do
  wget http://201.48.15.4:30926/ -O w$i
done
