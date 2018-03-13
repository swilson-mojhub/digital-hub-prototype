build:
	bundle install
	npm install -g gulp
	npm install
	gulp copyGovAssets
	gulp build

server:
	gulp server
