---
title: Table
description: Create, modify and delete HBase tables
keywords: hbase, table, schema, regions, region servers, exists, create, delete 
sort: 3
---

# Table operations: create, modify and delete HBase tables

## Grab an instance of "hbase.Table"

```javascript
const myTable = hbase({}).table('my_table')
```

Or

```javascript
const client = new hbase.Client({})
const myTable = new hbase.Table(client, 'my_table')
```

## API: table.create

Create a new table in HBase.

```javascript
myTable.create(callback)
```

Callback is optionnal and receive two arguments, an error object if any and a boolean indicating whether the table was created or not.

The simplest way is to grab a table object and call its `create` function with the schema as argument.

```javascript
hbase()
.table('my_new_table')
.create('my_new_column', function(error, success){
  console.info('Table created: ' + (success ? 'yes' : 'no'))
} );
```

For more control on the table and column family schema configuration, the argument may be a full schema object. It doesn't need to contain the "name" property as it will be injected but may  contain the keys `is_meta` and `is_root` as well as the column family schemas. The column property must contain the key "name" and any other valid keys (`blocksize`, `bloomfilter`, `blockcache`, `compression`, `length`, `versions`, `ttl` and `in_memory`).

```javascript
hbase()
.table('my_new_table')
.create({
  IS_META: false,
  IS_ROOT: false,
  ColumnSchema: [{
    name: 'my_new_column'
  }]
}, (error, success) => {
  console.info('Table created: ' + (success ? 'yes' : 'no'))
})
```

## API: table.delete

Drop an existing table.

```javascript
myTable.delete(callback);
```

The callback argument is optional and receives two arguments, an error object if any and a boolean value indicating whether the table was removed/disabled or not.

```javascript
hbase()
.table('my_table')
.delete((error, success) => {
  assert.ok(success)
})
```

## API: table.exists

Check if a table is created.

```javascript
myTable.exists(calblack)
```

## Update an existing table

NOT YET WORKING, waiting for [HBASE-3140](https://issues.apache.org/jira/browse/HBASE-3140).

## API: table.schema

Retrieves the table schema.

```javascript
hbase()
.table( 'my_new_table' )
.schema(function(error, schema){
  console.info(schema)
});
```

Will print something similar to:

```json
{ "name": "node_hbase"
, "IS_META": "false"
, "IS_ROOT": "false"
, "ColumnSchema":
   [ { "name": "column_2"
   , "BLOCKSIZE": "65536"
   , "BLOOMFILTER": "NONE"
   , "BLOCKCACHE": "true"
   , "COMPRESSION": "NONE"
   , "VERSIONS": "3"
   , "REPLICATION_SCOPE": "0"
   , "TTL": "2147483647"
   , "IN_MEMORY": "false"
   }
   ]
}
```

## API: table.regions

Retrieves the table region metadata

```javascript
hbase()
.table( 'my_new_table' )
.regions(function(error, regions){
  console.info(regions)
});
```

Will print something similar to:

```json
{ "name": "node_hbase"
, "Region": 
   [ { "startKey": ""
   , "name": "node_hbase,,1285801694075"
   , "location": "node_01.domain:56243"
   , "id": 1285801694075
   , "endKey": ""
   }
   ]
}
```

## API: table.row

Return a new row instance.

```javascript
Table.row(key)
```


## API: table.scan

Return a new scanner instance.

```javascript
Table.scan(options, [callback])
```
