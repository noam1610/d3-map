# d3-map

## D3 version 4.0

### How to deal with

First install packages :
```bash
npm install d3-shape
```

Then require d3:
```javascript
var d3 = require('d3');
require('d3-shape');
require('d3-path');
```

Now create the 'canvas' you will use to draw elements
```javascript
var width = 500;
var height = 500;
var  radius = 250;

var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
```






Liens intérressants

http://kaisersly.github.io/scottmurray-d3-fr

http://maptimeboston.github.io/d3-maptime/#/80