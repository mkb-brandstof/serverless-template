# serverless-template

*Template README can be found in [here](template-readme.md)*

**!! Update contents with content relevant to this project / service !!**

*Project description*

## Summary

- [Getting Started](#getting-started)
- [Running tests](#running-tests)
- [Deployment](#deployment)

## Getting Started

### Design

Design considerations can be found in [design.md](design.md)

### Prerequisites and particulars

Any specifics on non standard requirements and or deviations from default structures, such as:
- non default folders
- not using webpack
- introduction of new / non-standard utilities

### Installing

Use a new stage when (major) changes to the service would could disruption to users of the default
environment stage.

Install all dependencies using `npm`:

    $ npm install

## Running Tests

Tests can be found in the `tests` folder.

Integration tests can be run using:

    $ npm run integration-tests

Acceptance tests can be run using:

    $ npm run acceptance-tests

To run all tests, use:

    $ npm test

### Manual testing / invocations

To manually test the service(endpoints) run the following commands / scripts:

...

## Deployment

### Resources

***
If creating a domain for an API:

    $ serverless create_domain
***

Deploy the actual service using:

    $ serverless deploy --stage <STAGE_NAME> --environment <ENVIRONMENT_NAME>

### Configuration

The following settings have to be created in the [AWS Systems Manager Parameter
Store](https://eu-west-1.console.aws.amazon.com/systems-manager/parameters?region=eu-west-1) before
the service can be used:

  1. /SERVICE_NAME/SUBGROUP/something
  2. ...

