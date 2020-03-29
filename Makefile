#!make
#TODO must handle trailing whitespace in include .env

version := $(shell git describe --abbrev=0 --tags)


docker-build-media:
	docker build -t hub.yottab.io/fitex/fitex-media:$(version) . 

docker-build:
	docker build -t hub.yottab.io/fitex/fitex-web:$(version) . -f node.Dockerfile

docker-push-media:
	docker push hub.yottab.io/fitex/fitex-media:$(version)

docker-push:
	docker push hub.yottab.io/fitex/fitex-web:$(version)
