# SIH

## Local Setup

1. Fork this repo and clone it in your system using the following command
    1. `git clone https://github.com/AjayVijendran/SIH.git`
2. Run the following commands to install all the required dependencies
    1. `npm install`
    2. `npm run install-all`

## By this both client and server dependencies will be installed concurrently and you can start working

3. To run the front-end or client-side , run the following commands
    1. `cd client`
    2. `npm start`
4. The server is deployed on AWS Lambda and accessed with the help of AWS API Gateway.
5. If you make any changes to the server make sure you run the follwoing command to deploy the updated server
    1. `npm run deploy`

## Now client will be running in `localhost:3000`

