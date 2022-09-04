# Storefront

This application is an online store called storefront.

## Getting Started

1. Clone this repo locally into the location of your choice.
2. follow the instructions in the installation step

### Dependencies
A list of project dependencies can be found [here](docs/dependencies.md).

### Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres.
1. In AWS, provision a s3 bucket for hosting the uploaded files.
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv).
2. From the root of the repo, navigate Storefront-API folder `cd /Storefront-API` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
3. Without closing the terminal in step 1, navigate to the Storefront-Client `cd /Storefront-Client` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd Storefront-API`
2. `npm run test`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

## Built With

- [React](https://react.org/) - A JavaScript library for building user interfaces
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework
