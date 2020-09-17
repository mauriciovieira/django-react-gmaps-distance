# Django React GMaps Distance

This project is an example of Django and React using Docker. It features a distance calculation done on server side after two points are selected on a custom Google Map.

The skeleton was generated with [cookiecutter-react-django](https://github.com/ohduran/cookiecutter-react-django)

<img width="1833" alt="Django_React_Gmaps_Distance" src="https://user-images.githubusercontent.com/95258/93455920-5ceb9980-f8b3-11ea-8ed9-9ce37b9f697c.png">



## Setup

### Docker

Install docker and docker-compose

### Google Maps

1. Copy `frontend/.env.example` to `frontend/.env`
2. Insert a valid google maps API key in `frontend/.env`

## Development

To run the application locally, run `make run`. This will build the images and run locally. After that, open https://localhost

### Tests

To run django tests:

```
make django-test
```

## Deployment

You can check how to deploy your app to Heroku [here](https://github.com/ohduran/cookiecutter-react-django#deploy-to-heroku)

