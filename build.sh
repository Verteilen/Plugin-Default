#!/bin/bash

mkdir bin

gcc -o bin/Default util/main.c
x86_64-w64-mingw32-gcc -o bin/Default.exe util/main.c
