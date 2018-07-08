# costelog

[![travis build](https://img.shields.io/travis/gmoralesc/costelog.svg?style=flat-square)](https://travis-ci.org/gmoralesc/costelog)
[![codecov coverage](https://img.shields.io/codecov/c/github/gmoralesc/costelog.svg?style=flat-square)](https://codecov.io/github/gmoralesc/costelog)
[![version](https://img.shields.io/npm/v/costelog.svg?style=flat-square)](http://npm.im/costelog)
[![downloads](https://img.shields.io/npm/dm/costelog.svg?style=flat-square)](http://npm-stat.com/charts.html?package=costelog&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/costelog.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random sentence from Costeño idioms for your log.

## Installation

This package is distributed via npm:

```
npm install costelog
```

## Usage

```javascript
var costelog = require('costelog');
var randomSentence = costelog.random();
var randomSentence = costelog.random("Name");
```

## Author

This library was developed by [Gustavo Morales](https://twitter.com/gmoralesc)