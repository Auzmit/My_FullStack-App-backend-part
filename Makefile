console:
	@node-console

install:
	npm ci

start:
	nodemon bin/phonebook.js

test:
	npm test -s

