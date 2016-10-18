#!/usr/bin/env bash

# Build Jekyll on production environment
JEKYLL_ENV=production jekyll build

# Checkout master branch
git checkout master

# Delete all files that aren't from build
GLOBIGNORE='_site:.git'; rm -r *

# Move files from _site to project root
cd _site
mv * ..
cd ..
rm -r _site