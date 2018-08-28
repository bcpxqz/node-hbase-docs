---
title: Getting started
sort: 1
---

# Getting started

## About HBase

HBase is part of the Hadoop ecosystem from the Apache Software Foundation. It is a column oriented database (think NoSQL) that really scale and is modelled after Google papers and its BigTable database.

## Installing HBase

Downloading the [Cloudera CDH](https://www.cloudera.com/downloads/quickstart_vms.html) or [Hortonworks HDP](https://hortonworks.com/products/sandbox/) sandboxs are the easiest way to get started. If you run Ubuntu, Debian or RedHat, those two distributions provide packages integrated with apt-get and yum. It is also possible to download the binaries from the [official website](http://hbase.apache.org/).

## Starting HBase

Assuming `${HBASE_HOME}/bin` is in your classpath, starting HBase with REST connector is as follow:

```bash
start-hbase.sh
hbase-daemon.sh start rest
```

And stopping:

```bash
hbase-daemon.sh stop rest
stop-hbase.sh
```

Or

```bash
ps ax | grep hbase | awk '{print $1}' | xargs kill -9
```

## Installing node-hbase

Use NPM or YARN to install the HBase client.

```bash
npm install hbase
```

## Creating a new instance

```javascript
const hbase = require('hbase')
const client = hbase({
  host: '127.0.0.1',
  port: 8080
})
```

Or

```javascript
const hbase = require('hbase')
const client = new hbase.Client({
  host: '127.0.0.1',
  port: 8080
})
```
