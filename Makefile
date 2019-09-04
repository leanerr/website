#!make
#TODO must handle trailing whitespace in include .env

version := $(shell git describe --abbrev=0 --tags)


upgrade-server: docker-build docker-push yb-update
docker-build:
	docker build -t hub.yottab.io/fitex/fitex-web:$(version) .

docker-push:
	docker push hub.yottab.io/fitex/fitex-web:$(version)

yb-update:
	yb update application landing -i hub.yottab.io/fitex/fitex-web:$(version)