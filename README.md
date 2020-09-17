Django React GMaps Distance ===========================

[![Built with Cookiecutter React Django](https://img.shields.io/badge/built%20with-Cookiecutter%20React%20Django-blue)](https://img.shields.io/badge/built%20with-Cookiecutter%20React%20Django-blue)

## Local setup
On your terminal, simply do `docker-compose up --build`, and wait for the containers to build. Eventually, you'll be able to see the index page by going to `[http://127.0.0.1/](http://127.0.0.1/)`.




# Django React GMaps Distance

This project is an example of Django and React using Docker. It features a distance calculation done on server side after two points are selected on a custom Google Map.

The skeleton was generated with [cookiecutter-react-django](https://github.com/ohduran/cookiecutter-react-django)

## Setup

### Docker

Install docker and docker-compose

### Google Maps

1. Copy `frontend/.env.example` to `frontend/.env`
2. Insert a valid google maps API key of `frontend/.env`

## Development

To run the application locally, run `make run`. This will build the images and run locally. After that, open https://localhost

### Test coverage

To run the tests, check your test coverage, and generate a coverage report:

```
make django-test
```

To run react tests

```
make react-test
```

## Deployment

You can check how to deploy your app to Heroku [here](https://github.com/ohduran/cookiecutter-react-django#deploy-to-heroku)

