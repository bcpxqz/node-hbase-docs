
# HBase client for Node.js using REST

## Introduction

Node HBase is a Node.JS client for the Apache HBase database. It use the Rest API (Stargate) to communicate with HBase. Currently, all the API is implemented and the data exchange format is JSON (but protocol buffer could follow).

Apache HBase is part of the Hadoop ecosystem. It describes itself as the Hadoop database optimized for random, realtime read/write access to big data. It is an open-source, distributed, versioned, column-oriented store modeled after Google Bigtable.

## Main features

* Intuitive API following HBase naming conventions
* Documentation and tests
* Full Implementation of the REST API
* Transparent encoding/decoding of values
* Scanner and filter support implementing the stream.Readable API
* Kerberos Support
