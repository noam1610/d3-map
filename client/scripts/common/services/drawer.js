'use strict';
var servicename = 'drawer';
var d3 = require('d3');
require('d3-shape');
require('d3-path');
require('d3-selection');
require('d3-array');
require('d3-axis');
require('d3-collection');
require('d3-time');
require('d3-time-format');
require('d3-scale');

module.exports = function(app) {

    var dependencies = [];

    function service() {

        var drawCircle = function() {

            var svgContainer = d3.select('body').append('svg')
                .attr('width', 200)
                .attr('height', 200);

            var circle = svgContainer.append('circle')
                .attr('cx', 30)
                .attr('cy', 30)
                .attr('r', 20)
                .attr('transform', function(d) {
                    return 'translate(' + 100 + ',' + 100 + ')';
                });

        }

        // var dataset = [{
        //       label: 'Abulia',
        //       count: 10
        //   }, {
        //       label: 'Betelgeuse',
        //       count: 20
        //   }, {
        //       label: 'Cantaloupe',
        //       count: 30
        //   }, {
        //       label: 'Dijkstra',
        //       count: 40
        //   }];

        var drawPieChart = function(dataset) {

            var width = 360;
            var height = 360;
            var radius = Math.min(width, height) / 2;

            var color = d3.scaleOrdinal(d3.schemeCategory20b);

            var svg = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

            var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);

            var pie = d3.pie()
                .value(function(d) {
                    return d.count;
                })
                .sort(null);

            var path = svg.selectAll('path')
                .data(pie(dataset))
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', function(d, i) {
                    return color(d.data.label);
                });

            path.append('g')
                .append('svg:text') //add a label to each slice
                .attr('transform', function(d) { //set the label's origin to the center of the arc
                    //we have to make sure to set these before calling arc.centroid
                    d.innerRadius = 0;
                    d.outerRadius = radius;
                    return 'translate(' + arc.centroid(d) + ')'; //this gives us a pair of coordinates like [50, 50]
                })
                .attr('text-anchor', 'middle')
                .attr('text', function(d, i) {
                    return dataset[i].label;
                });

        };

        var drawPieChartBis = function() {

            var data = [1, 1, 2, 3, 5, 8, 13];

            var canvas = document.querySelector('canvas');
            console.log('canvas', canvas);
            var context = canvas.getContext('2d');
            console.log('context', context);

            var width = canvas.width,
                height = canvas.height,
                radius = Math.min(width, height) / 2;

            var colors = [
                '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
                '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
            ];

            var arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0)
                .context(context);

            var dot = d3.symbol()
                .context(context);

            var pie = d3.pie();

            var arcs = pie(data);

            context.translate(width / 2, height / 2);

            context.globalAlpha = 0.5;
            arcs.forEach(function(d, i) {
                context.beginPath();
                arc(d);
                context.fillStyle = colors[i];
                context.fill();
            });

            context.globalAlpha = 1;
            context.beginPath();
            arcs.forEach(arc);
            context.lineWidth = 1.5;
            context.stroke();

            context.beginPath();
            arcs.forEach(function(d) {
                var c = arc.centroid(d);
                context.save();
                context.translate(c[0], c[1]);
                dot();
                context.restore();
            });
            context.fillStyle = '#000';
            context.fill();

            // var data = [1, 1, 2, 3, 5, 8, 13];
            // var width = 500,
            //     height = 500,
            //     radius = 250;

            // var svg = d3.select('body')
            //     .append('svg')
            //     .attr('width', width)
            //     .attr('height', height)
            //     .append('g')
            //     .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

            // var colors = [
            //     '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
            //     '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
            // ];

            // var arc = d3.arc()
            //     .outerRadius(radius - 10)
            //     .innerRadius(radius - 70)
            //     .padAngle(0.03);

            // var pie = d3.pie();

            // var arcs = pie(data);

            // var circle = svg.selectAll('circle')
            //     .data(dataset) // UPDATE
            //     .style('fill', 'blue');

            // circle.exit().remove();

            // circle.enter().append('circle')
            //     .style('fill', 'green')
            //     .merge(circle)
            //     .style('stroke', 'black');
        };

        var drawPieChartCanvas = function() {

            var data = [1, 1, 2, 3, 5, 8, 13];

            var canvas = document.querySelector('canvas'),
                context = canvas.getContext('2d');

            // d3.select('canvas');

            var width = canvas.width,
                height = canvas.height,
                radius = Math.min(width, height) / 2;

            var colors = [
                '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
                '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
            ];

            var arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(radius / 2)
                .context(context);

            var dot = d3.symbol()
                .type(d3.symbolTriangle)
                .context(context);

            var pie = d3.pie();

            var arcs = pie(data);

            context.translate(width / 2, height / 2);

            context.globalAlpha = 0.5;
            arcs.forEach(function(d, i) {
                context.beginPath();
                arc(d);
                context.fillStyle = colors[i];
                context.fill();

            });

            //globalAlpha == transparency

            context.globalAlpha = 1;
            context.beginPath();
            arcs.forEach(arc);

            context.lineWidth = 1.5;
            context.stroke();

            context.beginPath();
            arcs.forEach(function(d) {

                var c = arc.centroid(d);
                context.save();
                context.translate(c[0], c[1]);
                // console.log('d', d);
                context.fillText(d.data, c[0], c[1]);
                // dot();
                context.restore();

            });
            context.fillStyle = '#000';
            context.fill();

            context.font = '20px Georgia';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = '#000';

            arcs.forEach(function(d) {
                var c = arc.centroid(d);
                context.fillText(d.data, c[0], c[1]);
            });

            arcs.forEach(function(a, b, c) {
                console.log('a', a);
                console.log('b', b);
                console.log('c', c);

                d3.select(this).on('mouseover', function(d) {
                    console.log('test');
                });

                // .selectAll('.child')
                // .text(function(d, i) {
                //     return 'child ' + d.name + ' of ' + p.name;
                // });
            });

            // arc.on('mouseover', function(d) {
            //     d3.select(this).select('text').style('visibility', 'visible')
            // });

        };

        var drawPieChartAnimated = function() {

            var data = [1, 7, 1, 4, 1, 2];
            var color = ['#A9F5BC', '#2ECCFA', '#5858FA', '#FF4000', '#ECCEF5', '#58FA82', '#A9F5BC', '#2ECCFA', '#5858FA', '#FF4000', '#ECCEF5', '#58FA82', '#5342'];
            var width = 500;
            var height = 500;
            var radius = 250;

            var svg = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

            svg.append('g')
                .attr('class', 'slices');

            svg.append('g')
                .attr('class', 'labels');
            // svg.append('g')
            //     .attr('class', 'lines');

            // Pie
            var pie = d3.pie()(data);
            //console.log(pie);

            var slice = svg.select('.slices').selectAll('path.slice')
                .data(pie);

            slice.enter()
                .insert('path')
                .style('fill', function(d, i) {
                    return color[i];
                })
                .attr('d', function(d, i) {
                    var arc = d3.arc()
                        .innerRadius(100)
                        .outerRadius(radius)
                        .startAngle(d.startAngle)
                        .endAngle(d.endAngle);
                    // console.log('d', d);
                    // console.log('i', i);
                    return arc();
                })
                .attr('class', 'slice');

            //Text

            var text = svg.select('.labels')
                .selectAll('text')
                .data(pie);

            var val = Math.PI * 3;

            text.enter()
                .insert('text')
                .attr('x', function(d, i) {
                    return (radius) / 1.6 * Math.cos((d.startAngle + d.endAngle + val) * 0.5);
                })
                .attr('y', function(d, i) {
                    return (radius) / 1.6 * Math.sin((d.startAngle + d.endAngle + val) * 0.5);
                })
                .text(function(d) {
                    return d.data;
                })
                .attr('fill', 'black')
                .attr('font-size', 25)
                .attr('font-family', 'Comic Sans MS');

            var myText = svg.append('text')
                .attr('x', 0)
                .attr('y', 0)
                .attr('fill', '#000')
                .attr('fill', 'black')
                .attr('font-size', 50)
                .style('text-anchor', 'middle')
                .attr('font-family', 'Comic Sans MS')
                .text(function() {
                    return 'noam';
                });

            d3.selectAll('path').on('click', function(d) {
                console.log('d', d);
                myText.text(function() {
                    return d.data;
                });
            });
        };

        var drawLine = function() {

            var data = d3.range(40).map(function(i) {
                return i % 5 ? {
                    x: i / 39,
                    y: (Math.sin(i / 3) + 2) / 4
                } : null;
            });

            var margin = {
                    top: 40,
                    right: 40,
                    bottom: 40,
                    left: 40
                },
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;

            var x = d3.scaleLinear()
                .range([0, width]);

            var y = d3.scaleLinear()
                .range([height, 0]);

            var line = d3.line()
                .defined(function(d) {
                    return d;
                })
                .x(function(d) {
                    return x(d.x);
                })
                .y(function(d) {
                    return y(d.y);
                });

            var svg = d3.select('body').append('svg')
                .datum(data)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            svg.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + height + ')')
                .call(d3.axisBottom().scale(x));

            svg.append('g')
                .attr('class', 'axis axis--y')
                .call(d3.axisLeft().scale(y));

            svg.append('path')
                .attr('class', 'line')
                .attr('d', line);

            svg.selectAll('.dot')
                .data(data.filter(function(d) {
                    return d;
                }))
                .enter().append('circle')
                .attr('class', 'dot')
                .attr('cx', line.x())
                .attr('cy', line.y())
                .attr('r', 3.5);

        };

        var drawTimePlot = function() {
            var data = [{
                date: new Date(2007, 1, 1),
                value: 0.2
            }, {
                date: new Date(2008, 1, 1),
                value: 0.4
            }, {
                date: new Date(2008, 1, 26),
                value: 0.7
            }, {
                date: new Date(2009, 1, 27),
                value: 0.33
            }, {
                date: new Date(2010, 1, 30),
                value: 0.80
            }, {
                date: new Date(2011, 1, 1),
                value: 0.47
            }];

            var data = [];
            var initDate = new Date(2010, 1, 1);

            for (var i = 1; i < 365; i++) {
                if (i == 1) {
                    var tempDate = initDate;
                };

                var a = {
                    value: Math.abs(Math.sin(2 * Math.PI * i / 200))
                };
                a.date = tempDate;

                tempDate = new Date(tempDate.setTime(tempDate.getTime() + 86400000));

                data.push(a);
            }

            console.log(data);

            var margin = {
                top: 40,
                right: 40,
                bottom: 40,
                left: 40
            };
            var width = 960 - margin.left - margin.right;
            var height = 500 - margin.top - margin.bottom;

            var line = d3.line()
                .defined(function(d) {
                    return d;
                })
                .x(function(d) {
                    return x(d.date);
                })
                .y(function(d) {
                    return y(d.value);
                });

            var x = d3.scaleTime()
                .domain([new Date(2010, 1, 1), new Date(2011, 1, 1)])
                .range([0, width]);
            var y = d3.scaleLinear()
                .range([height, 0]);

            var svg = d3.select('body')
                .append('svg')
                .datum(data)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            console.log('d3.axisBottom().scale(x))', d3.axisBottom().scale(x));

            svg.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + height + ')')
                .call(d3.axisBottom().scale(x));

            svg.append('g')
                .attr('class', 'axis axis--y')
                .call(d3.axisLeft().scale(y));

            svg.append('path')
                .attr('class', 'line')
                .attr('d', line);

            svg.selectAll('.dot')
                .data(data.filter(function(d) {
                    return d;
                }))
                .enter().append('circle')
                .attr('class', 'dot')
                .attr('cx', line.x())
                .attr('cy', line.y())
                .attr('r', 3.5);

            const focus = svg.append('g')
                .attr('class', 'focus')
                .style('display', 'none');

            focus.append('circle')
                .attr('r', 4.5);

            focus.append('line')
                .classed('x', true);

            focus.append('line')
                .classed('y', true);

            focus.append('text')
                .attr('x', 9)
                .attr('dy', '.35em');

            svg.append('rect')
                .attr('class', 'overlay')
                .attr('width', width)
                .attr('height', height)
                .on('mouseover', function() {
                    focus.style('display', null);
                })
                .on('mouseout', function() {
                    focus.style('display', 'none');
                })
                .on('mousemove', mousemove);

            d3.selectAll('.focus')
                .style('opacity', 0.7);

            d3.select('.overlay')
                .style('fill', 'none')
                .style('pointer-events', 'all');

            d3.selectAll('.focus circle')
                .style('fill', 'none')
                .style('stroke', 'black');

            d3.selectAll('.focus line')
                .style('fill', 'none')
                .style('stroke', 'black')
                .style('stroke-width', '1.5px')
                .style('stroke-dasharray', '3 3');

            const bisectDate = d3.bisector(function(d) {
                return d.date;
            }).left;
            const formatValue = d3.format(',.2f');
            const formatCurrency = function(d) {
                return formatValue(d);
            };

            function mousemove() {
                const x0 = x.invert(d3.mouse(this)[0]);
                const i = bisectDate(data, x0, 1);
                const d0 = data[i - 1];
                const d1 = data[i];
                const d = x0 - d0.date > d1.date - x0 ? d1 : d0;
                focus.attr('transform', 'translate(' + x(d.date) + ',' + y(d.value) + ')');
                focus.select('line.x')
                    .attr('x1', 0)
                    .attr('x2', -x(d.date))
                    .attr('y1', 0)
                    .attr('y2', 0);

                focus.select('line.y')
                    .attr('x1', 0)
                    .attr('x2', 0)
                    .attr('y1', 0)
                    .attr('y2', height - y(d.value));

                focus.select('text').text(formatCurrency(d.value));
            }

        };

        var drawLinesArrivalByTime = function() {

            var date = new Date(2000, 1, 1);
            var curvesData = [{
                id: 'noam',
                values: generateRandomTable(date, 10)
            }, {
                id: 'nom',
                values: generateRandomTable(date, 10)
            }
            // , {
            //     id: 'test',
            //     values: generateRandomTable(date, 10)
            // }, {
            //     id: 'a',
            //     values: generateRandomTable(date, 10)
            // }, {
            //     id: 'b',
            //     values: generateRandomTable(date, 10)
            // }, {
            //     id: 'c',
            //     values: generateRandomTable(date, 10)
            // }
            ];

            console.log(curvesData);
            var margin = {
                top: 40,
                right: 40,
                bottom: 40,
                left: 40
            };
            var width = 960 - margin.left - margin.right;
            var height = 500 - margin.top - margin.bottom;

            var svg = d3.select('body')
                .append('svg')
                .datum(curvesData)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom);

            var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            var x = d3.scaleTime()
                .domain([new Date(1999, 12, 30), new Date(2000, 1, 20)])
                .range([0, width]);

            var y = d3.scaleLinear()
                .range([height, 0])
                .domain([0, 1]);

            var z = d3.scaleOrdinal(d3.schemeCategory10);

            var line = d3.line()
                .curve(d3.curveBasis)
                .x(function(d) {
                    return x(d.date);
                })
                .y(function(d) {
                    return y(d.value);
                });

            g.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + height + ')')
                .call(d3.axisBottom(x));

            g.append('g')
                .attr('class', 'axis axis--y')
                .call(d3.axisLeft(y))
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '0.71em')
                .attr('fill', '#000')
                .text('Temperature, ºF');

            var curve = g.selectAll('.curve')
                .data(curvesData)
                .enter()
                .append('g')
                .attr('class', 'curve');

            curve.append('path')
                .attr('class', 'line')
                .attr('d', function(d) {
                    return line(d.values);
                })
                .style('stroke', function(d) {
                    return z(d.id);
                });

            curve.append('text')
                .datum(function(d) {
                    return {
                        id: d.id,
                        value: d.values[d.values.length - 1]
                    };
                })
                .attr('transform', function(d) {
                    return 'translate(' + x(d.value.date) + ',' + y(d.value.value) + ')';
                })
                .attr('x', 3)
                .attr('dy', '0.35em')
                .style('font', '10px sans-serif')
                .text(function(d) {
                    return d.id;
                });
        };

        var generateRandomTable = function(initDate, days) {
            var data = [];
            var tempDate = initDate;
            for (var i = 1; i < days; i++) {
                if (i == 1) {
                    tempDate = initDate;
                } else {
                    tempDate = new Date(tempDate.setTime(tempDate.getTime() + 86400000));
                }
                var a = {
                    value: Math.random(),
                    date: tempDate
                };
                // console.log('tempDate', tempDate);
                // console.log(a.date);
                // console.log(a);

                data.push(a);
            }

            return data;
        };

        return {
            drawPieChart: drawPieChart,
            drawPieChartBis: drawPieChartBis,
            drawPieChartCanvas: drawPieChartCanvas,
            drawPieChartAnimated: drawPieChartAnimated,
            drawLine: drawLine,
            drawTimePlot: drawTimePlot,
            drawLinesArrivalByTime: drawLinesArrivalByTime
        };

    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
