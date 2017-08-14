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
wget -O - https://www.google.com/ | docq '#lst-ib'
<input class="gsfi" id="lst-ib" maxlength="2048" name="q" autocomplete="off" title="Search" type="text" value="" aria-label="Say &quot;Ok Google&quot;" aria-haspopup="false" role="combobox" aria-autocomplete="both" dir="ltr" spellcheck="false" style="border: none; padding: 0px; margin: 0px; height: auto; width: 100%; background: url(&quot;data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D&quot;) transparent; position: absolute; z-index: 6; left: 0px; outline: none;">
```

## FAQ

[FAQ](https://github.com/freddiefujiwara/docq/wiki/FAQ)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/freddiefujiwara/docq
