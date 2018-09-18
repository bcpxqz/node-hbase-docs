---
title: Developer Guide
description: How to contribute to the project
keywords: contribute, git, github, open source, documentation, versioning, pull requests, bug, issues
sort: 4
---

# Developer Guide

## Introduction

From this website documentation, we recommend to start by reading the [Getting Started](./Getting started) instruction. Once you get an overall understand of how to install and use the library, you shall pursue by reading the various API pages for an in-depth description of the various available functionalities.

If the examples present on the documentation doesn't cover your questions, you are highly encouraged to read the [tests](https://github.com/adaltas/node-hbase/tree/master/test). They cover all the API. There are highly expressive and you shouldn't fear reading them.

If the tests don't cover your need, for example in case of a new filter, or if you believe the documentation deserve additional examples, feel free to [open an issue](https://github.com/adaltas/node-hbase/issues).

## Running the tests

Tests are executed with [Mocha](https://mochajs.org/). They reference a configuration module at "./test/properties". The format can be in JavaScript, CoffeeScript or JSON. You can use any of the "./test/properties.\*.coffee" examples as a starting point and make the
appropriate changes.

If using the HDP sandbox, start the virtual machine, log-in as "root", start
Ambari `start_ambari.sh`, start HBase `start_hbase.sh` and start the HBase REST
server `/usr/lib/hbase/bin/hbase rest -p 60080`.

Otherwise you can run HBase in locally with:

```bash
# Start the Docker image
docker run --name stargate --rm -p 60080:8080 sixeyed/hbase-stargate
# Or
docker run --name stargate -p 2181:2181 -p 60010:60010 -p 60000:60000 -p 60020:60020 -p 60030:60030 -p 60080:8080 -p 8085:8085 sixeyed/hbase-stargate
```

Note, the current HBase image from sixeyed and are currently based on the CentOS:6 image which is incompatible with the latest kernels. Here is how to build your own new image:

```bash
# Build the base image
docker build -t fork-hbase docker/hbase-1.1.2
# Build the REST image
docker build -t fork-hbase-rest docker/hbase-rest
# Run the REST image
docker run --name stargate --rm -p 60080:8080 fork-hbase-rest
```

Or with the REST server behind a reverse proxy:

```bash
# Build the base image
docker build -t fork-hbase docker/hbase-1.1.2
# Build the REST image
docker build -t fork-hbase-rest docker/hbase-rest
# Build the REST image behind a reverse proxy
docker build -t fork-hbase-rest-reverse-proxy docker/hbase-rest-reverse-proxy
# Run the REST image
docker run --name stargate --rm -p 60080:8100 fork-hbase-rest-reverse-proxy
```

To run the tests:

```bash
npm test
```

There is also a Dockerfile under `hbase-rest-reverse-proxy/` that creates an Nginx reverse proxy to HBase REST. This image can be used to test cases where the REST service runs behind a proxy. The file `test/properties_with_path.docker.coffee` can be used to test scenarios where HBase REST is accessible through a custom path (`/rest`).

When testing against HBase secured with Kerberos, you must create a table with
the right ownership.

```bash
kinit hbase
hbase shell
create 'node_table', {NAME => 'node_column_family', VERSIONS => 5}
grant 'ryba', 'RWC', 'node_table'
```

You can use the example located in "test/properties.json.krb5" to configure the
test. It comes pre-configured for [Ryba] configured in development cluster mode.
