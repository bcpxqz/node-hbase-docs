---
title: Scanner
description: Scanner and filter operations
keywords: hbase, scanner, filter, startRow, endRow, columns, batch, maxVersions, startTime, endTime, encoding
sort: 5
---

# Scanner and filter operations

Scanner are the most efficient way to retrieve multiple rows and columns from HBase. For scalability reasons, this module implements internally the native [Node.js Stream Readable API](https://nodejs.org/api/stream.html#stream_class_stream_readable).

## Grab an instance of "Scanner"

```javascript
const myScanner = hbase({}).getTable('my_table').scan(...)
```

Or

```javascript
const client = new hbase.Client({})
const myScanner = new hbase.Scanner(client, {table: 'my_table'})
```

## Options

All options except the "table" option are optional. The following properties are available:

* `startRow`   
  First row returned by the scanner.   
* `endRow`   
  Row stopping the scanner, not returned by the scanner.   
* `column`   
  Filter the scanner by columns (a string or an array of columns).   
* `batch`   
  Number of cells returned on each iteration, internal use, default to "1000".   
* `maxVersions`   
  Number of returned version for each row.   
* `startTime`   
  Row minimal timestamp (included).   
* `endTime`   
  Row maximal timestamp (excluded).   
* `filter`   
  See below for more information.   
* `encoding`   
  Default to client.options.encoding, set to null to overwrite default encoding and return a buffer.   

## Using the Stream Readable API

The Stream Readable API is a scalable solution to throttle the iteration of large volumes of data. By large, we mean a volume exceeding the memory capacity of the node hosting the process.

```javascript
const scanner = client
.table('node_table')
.scan({
  startRow: 'test_scanner_get_startRow_11',
  maxVersions: 1
})
const rows = []
scanner.on( 'readable', => {
  while(chunk = scanner.read())
    rows.push chunk
})
scanner.on( 'error', err =>
  throw err
)
scanner.on( 'end', =>
  console.info(rows)
)
```

## Using the callback API

For convenience, the `scan` function exported by the table object accepts a callback function which will be called when the scan has completed. Be warned, using a callback implies that the returned data set must fit in memory.

```javascript
client
.table('node_table')
.scan({
  startRow: 'test_scanner_get_startRow_11',
  maxVersions: 1
}, (err, rows) =>
  console.info(rows)
)
```

## Using filter

Filter are defined during the scanner creation. If you are familiar with HBase filters, it will be real easy to use them. Note, you should not worry about encoding the values, the library will do it for you. When you create a new scanner, just associate the `filter` property with your filter object. All filters are supported.

Many examples are available in the tests but here's one which returns all rows starting by "my_key_" and whose value is "here you are".   

```javascript
client
.table('my_tb')
.scan({
  filter: {
  "op":"MUST_PASS_ALL","type":"FilterList","filters":[{
      "op":"EQUAL",
      "type":"RowFilter",
      "comparator":{"value":"my_key_.+","type":"RegexStringComparator"}
    },{
      "op":"EQUAL",
      "type":"ValueFilter",
      "comparator":{"value":"here you are","type":"BinaryComparator"}
    }
  ]}
}, (error, cells) => {
  assert.ifError(error)
});
```

## API: scanner.init

Internal method to create a new scanner and retrieve its ID.

## API: scanner.get

Internal method to retrieve a batch of records.

```javascript
myScanner.get(callback)
```

The method is expected to be called multiple time to get the next cells from HBase. The callback is required and receive two arguments, an error object if any and a array of cells or null if the scanner is exhausted.

The number of cells depends on the `batch` option. It is your responsibility to call `get` as long as more cells are expected.

## API: scanner.delete

Internal method to unregister the scanner from the HBase server.

```javascript
myScanner.delete(callback)
```

The callback is optional and receives two arguments, an error object if any and a boolean indicating whether  the scanner was removed or not.

## API: scanner.\_read(size)

Implementation of the `stream.Readable` API.
