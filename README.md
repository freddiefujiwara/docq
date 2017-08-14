[![Build Status](https://travis-ci.org/freddiefujiwara/docq.svg?branch=master)](https://travis-ci.org/freddiefujiwara/docq)
[![Build status](https://ci.appveyor.com/api/projects/status/f6wch68buqp93hc7/branch/master?svg=true)](https://ci.appveyor.com/project/freddiefujiwara/docq/branch/master)
[![CircleCI](https://circleci.com/gh/freddiefujiwara/docq.svg?style=svg)](https://circleci.com/gh/freddiefujiwara/docq)
[![npm version](https://badge.fury.io/js/docq.svg)](https://badge.fury.io/js/docq)
[![codecov](https://codecov.io/gh/freddiefujiwara/docq/branch/master/graph/badge.svg)](https://codecov.io/gh/freddiefujiwara/docq)
[![dependencies Status](https://david-dm.org/freddiefujiwara/docq/status.svg)](https://david-dm.org/freddiefujiwara/docq)

# docq
Parsing HTML at the command line

## Requirements

 - Node 7.6 or later

## Installation

```bash
npm i -g docq
```

## Usage
```bash
                                                                                                          
                                                                                                                               
  Usage: docq [options] <query> [file.html]                                                                                    
                                                                                                                               
  Parsing HTML at the command line                                                                                             
                                                                                                                               
                                                                                                                               
  Options:                                                                                                                     
                                                                                                                               
    -V, --version     output the version number                                                                                
    -t --type <type>  Output type: (inner|outer|text|value)                                                                    
    -h, --help        output usage information  
```

## Example
```bash
$  wget -q -O - http://www.google.co.jp/ | docq 'input[name="biw"]'                                               
<input name="biw" type="hidden">    
```

## FAQ

[FAQ](https://github.com/freddiefujiwara/docq/wiki/FAQ)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/freddiefujiwara/docq
