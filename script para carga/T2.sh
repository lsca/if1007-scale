#!/bin/bash

for((i=2000; i<5000; i++))
do
  wget http://201.48.15.4:31868/ -O w$i
done