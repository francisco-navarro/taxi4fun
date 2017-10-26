# Backoffice Taxi4fun

Proyecto de gestión de backoffice en angular 4.3

## Branches


**master**


[![Build Status](https://travis-ci.org/taxy4fun/backoffice-y4f.svg?branch=master)](https://travis-ci.org/taxy4fun/backoffice-y4f)
[![Code Climate](https://codeclimate.com/github/taxy4fun/backoffice-y4f/badges/gpa.svg)](https://codeclimate.com/github/taxy4fun/backoffice-y4f)
[![Test Coverage](https://codeclimate.com/github/taxy4fun/backoffice-y4f/badges/coverage.svg)](https://codeclimate.com/github/taxy4fun/backoffice-y4f/coverage)
[![Dependencies](https://david-dm.org/taxy4fun/backoffice-y4f/repo.svg)](https://david-dm.org/taxy4fun/backoffice-y4f/)


**develop**

[![Build Status](https://travis-ci.org/taxy4fun/backoffice-y4f.svg?branch=develop)](https://travis-ci.org/taxy4fun/backoffice-y4f)

Despliegue de prueba en : https://backoffice-4yf-develop.herokuapp.com/


## Development server

`ng serve` para arrancar servidor en `http://localhost:4200/`

## Build

`ng build` construir en `dist/`

## Running unit tests

`ng test`

## Running end-to-end tests

`ng e2e`

Se han generado los scripts para desplegarlo en heroku.

## Para desplegar en producción se ejecuta
`ng build --aot -prod`
`node server.js`

## Desplegar con la api mock
Levantar el api mock con
`npm run api`
Después levantar
`npm run develop`
