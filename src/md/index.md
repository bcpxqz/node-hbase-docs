---
title: HBase REST client for Node.js
description: Official website and documentation for the HBase Node.js package
sort: 1
---

# HBase client for Node.js using REST

## Introduction

Node.js HBase is a [Node.JS](https://nodejs.org/) client for the [Apache HBase](https://hbase.apache.org/) database. It use the [REST API](https://hbase.apache.org/book.html#_rest) (formerly named Stargate) to communicate with [Apache HBase](https://hbase.apache.org/). Currently, all the API is implemented and the data exchange format is JSON (but protocol buffer could follow).

[Apache HBase](https://hbase.apache.org/) is part of the [Hadoop](https://hadoop.apache.org/) ecosystem. It describes itself as the Hadoop database optimized for random, realtime read/write access to big data. It is an open-source, distributed, versioned, column-oriented store modeled after [Google Bigtable](http://research.google.com/archive/bigtable.html).

## Main features

* Intuitive API following HBase naming conventions
* Documentation and tests
* Full Implementation of the [REST API](https://hbase.apache.org/book.html#_rest) (at the time of writing)
* Transparent encoding/decoding of values
* [Scanner and filter](/api/scanner/) support implementing the stream.Readable API
* [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol)) Support

## Quick example

The following code initialise a new HBase instance, create a table and a column family,
insert a record and read it.

```javascript
const hbase = require('hbase')
// Instantiate a new client
client = hbase({ host: '127.0.0.1', port: 8080 })
// Create a table
client
.table('my_table' )
.create('my_column_family', function(err, success){
  // Insert a record
  client
  .table('my_table' )
  .row('my_row')
  .put('my_column_family:my_column', 'my value', function(err, success){
    // Read a record
    client
    .table('my_table' )
    .row('my_row')
    .get('my_column_family', function(err, [cell]){
      // Validate the result
      assert(cell.key, 'my_row')
      assert(cell.column, 'my_column_family:my_column')
      assert(cell.$, 'my value')
    })
  })
})
```

Or shortly as:

```javascript
// Instantiate a new client
require('hbase')({ host: '127.0.0.1', port: 8080 })
// Create a table
.table('my_table' )
.create('my_column_family', function(err, success){
  // Insert a record
  this.put('my_column_family:my_column', 'my value', function(err, success){
    // Read a record
    this.get('my_column_family', function(err, [[cell]]){
      // Validate the result
      // ...
    })
  })
})
```
