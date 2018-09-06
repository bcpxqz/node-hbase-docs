---
title: Contribution Guide
description: Project contribution guidelines for developer
keywords: develop, contribute, git, github, open source, documentation, versioning, pull requests, bug, issues
sort: 5
---

# Contribution Guide

## Introduction

Node.js HBase is an open source project hosted on [GitHub](https://github.com/adaltas/node-hbase) originally written by [Adaltas](http://www.adaltas.com).

Contributions go far beyond pull requests and commits. we are thrilled to receive a variety of other contributions including the following:

- Write and publish your own actions
- Write articles and blog posts, create tutorial and spread the words
- Submit new ideas of features and documentation
- Submitting documentation updates, enhancements, designs, or bugfixes
- Submitting spelling or grammar fixes
- Additional unit or functional tests
- Help answering questions and issues on GitHub

## Open Development

All work on Node.js HBase happens directly on GitHub.

## Semantic Versioning

Node.js HBase follows semantic versioning. We release patch versions for bugfixes, minor versions for new features, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance.

Every significant change is documented in the changelog file.

## Documentation

Managing an open source project a huge time sink and most of us are non native English speaker. We greatly appreciate any time spent fixing typos or clarifying sections in the documentation. The documentation is written in Markdown and is located in a [dedicated repository](https://github.com/adaltas/node-hbase-docs).

## Discussions

There are currently no channel dedicated to discuss. For now, you may simply [open an new issue](https://github.com/adaltas/node-hbase/issues/new).

## Proposing a Change

### Pull requests

If you intend to change the public API, or make any non-trivial changes to the implementation, we recommend [filing an issue](https://github.com/adaltas/node-hbase/issues/new). This lets us reach an agreement on your proposal before you put significant effort into it.

If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.

## Bugs

### Where to Find Known Issues

We are using GitHub Issues for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn’t already exist.

### Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. You can get inspiration from our current [test suite](https://github.com/adaltas/node-hbase/tree/master/test). Some test require a specific environment which is provided through [docker environments](https://github.com/adaltas/node-nikita/tree/master/docker).
