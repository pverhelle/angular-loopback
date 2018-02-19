# Install
## loopback
1. install loopback-cli `npm install -g loopback-cli`
  - depending on your machine, you might need to run `npm install -g --production windows-build-tools`
  - and install openssl from https://slproweb.com/products/Win32OpenSSL.html
2. create a new loopback project
  - run `lb` and follow the prompt
3. clean the project to allow mounting it in docker later
  - clear out the node_modules folder by running `rm -rf node_modules`
## docker
1. create a docker-compose file with the same basic template that can be found in this repo
2. manualy trigger an npm install on the docker server
  - run `docker run -v YOURFOLDER\test-api:/usr/src/app -w /usr/src/app node:carbon npm install`
3. now we can start the server using docker
  - run `docker-compose up`
## mysql
1. add the mysql connector from inside the docker container (this step is needed to insure we install the npm package for the correct OS)
  - connect to docker bash, run `docker exec -it CONTAINERNAME bash`
  - install the connector, run `npm install loopback-connector-mysql --save`
  - exit the docker bash
2. create a new datasource in the loopback project
  - run `lb datasource SOURCENAME`, follow the docs from loopback if needed
  - the url should not be entered since we enter the date individually
  - the host should be the docker-compose name that was given for the mysql instance
## angular sdk
1. installing community driven package inside docker container
  - run `npm install --save-dev @mean-expert/loopback-sdk-builder`
2. genereate the sdk inside docker
  - run `npm run build:sdk`
3. move sdk to app (can be custom automated per project, ideal would be one exported file)
  - move the generated folder to the desired location in angular project
(follow https://github.com/mean-expert-official/loopback-sdk-builder wiki instructions)
