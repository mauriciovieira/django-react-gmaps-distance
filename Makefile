build:
	docker-compose build

run:
	docker-compose up --build

stop:
	docker-compose down

makemigrations:
	docker-compose run --rm django python manage.py makemigrations

migrate:
	docker-compose run --rm django python manage.py migrate

django-test:
	docker-compose run --rm django pytest

react-test:
	docker-compose run --rm react yarn test

# https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line/6273809
npm-add:
	docker-compose run --rm react npm add $(filter-out $@,$(MAKECMDGOALS))

pip-install:
	docker-compose run --rm django pip install $(filter-out $@,$(MAKECMDGOALS))