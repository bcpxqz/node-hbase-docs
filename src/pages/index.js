import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <h1>HBase client for Node.js using REST</h1>
    <h2>Introduction</h2>
    <p>Node HBase is a Node.JS client for the Apache HBase database. It use the Rest API (Stargate) to communicate with HBase. Currently, all the API is implemented and the data exchange format is JSON (but protocol buffer could follow).</p>
    <p>Apache HBase is part of the Hadoop ecosystem. It describes itself as the Hadoop database optimized for random, realtime read/write access to big data. It is an open-source, distributed, versioned, column-oriented store modeled after Google Bigtable.</p>
    <h2>Main features</h2>
    <ul>
      <li>Intuitive API following HBase naming conventions</li>
      <li>Documentation and tests</li>
      <li>Full Implementation of the REST API</li>
      <li>Transparent encoding/decoding of values</li>
      <li>Scanner and filter support implementing the stream.Readable API</li>
      <li>Kerberos Support</li>
    </ul>
  </Layout>
)

export default IndexPage
