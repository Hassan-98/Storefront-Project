## Storefront Pipeline

![Pipeline](pipeline.png)

### Continuous Integration
#### GitHub
The developer commit and push their code to the GitHub repository which is linked to the CircleCI platform.
GitHub triggers the CircleCI platform when code is pushed to the repository.

#### CircleCI
CircleCI reads the `.circleci/config.yml` file which tells the service what has to be done. In the case of Storefront,
there are 2 jobs (Client & API) to be run by CircleCI.
- **Client**: Checkouts the code from repo, Then runs the `install:client` script to install dependencies, then it runs `build:client` script given in the `package.json` file to build the front-end client app, Then it runs `deploy:client` script to use AWS CLI to upload front-end assets to S3..
- **API**: Checkouts the code from repo, Then runs the `install:server` & `build:server` scripts to install & build API code, Then uses AWS CLI to upload API archive to S3 and deploy to Elasticbeanstalk. 
