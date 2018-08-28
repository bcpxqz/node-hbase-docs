
# Node.js HBase Website

The official website of the [Node.js HBase project](https://github.com/adaltas/node-nikita). It is written with [Gatsby.js](https://www.gatsbyjs.org/).

To install and run the server:

```
git clone https://github.com/adaltas/node-hbase-docs.git hbase-docs
cd hbase-docs
yarn install
npm run develop
```

## Request

Encrypt the token for Travis:

```
docker run \
  --rm -v $PWD:/repo -v ~/.travis:/travis \
  andredumas/travis-ci-cli \
  encrypt GH_TOKEN="..your..token.."
```
