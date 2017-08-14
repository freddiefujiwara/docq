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
wget -O - http://www.google.co.jp/ | ./index.js 'input[name="biw"]'                                        
--2017-08-14 16:27:19--  http://www.google.co.jp/                                                                              
Resolving www.google.co.jp (www.google.co.jp)... 172.217.25.227, 2404:6800:4004:81b::2003                                      
Connecting to www.google.co.jp (www.google.co.jp)|172.217.25.227|:80... connected.                                             
HTTP request sent, awaiting response... 200 OK                                                                                 
Length: unspecified [text/html]                                                                                                
Saving to: ‘STDOUT’                                                                                                            
                                                                                                                               
-                                   [ <=>                                                   ]  10.36K  --.-KB/s    in 0s       
                                                                                                                               
2017-08-14 16:27:19 (196 MB/s) - written to stdout [10613]                                                                     
                                                                                                                               
<input name="biw" type="hidden">         
```

## FAQ

[FAQ](https://github.com/freddiefujiwara/docq/wiki/FAQ)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/freddiefujiwara/docq
