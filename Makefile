#!make
#TODO must handle trailing whitespace in include .env

version := $(shell git describe --abbrev=0 --tags)


docker-build:
	docker build -t hub.yottab.io/fitex/fitex-web:$(version) .

docker-push:
	docker push hub.yottab.io/fitex/fitex-web:$(version)