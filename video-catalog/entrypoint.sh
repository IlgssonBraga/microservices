#!/bin/bash

npm install
npm run generate:ormconfig
npm run typeorm migration:run
npm run start:dev
