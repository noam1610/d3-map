'use strict';
var servicename = 'drawer';
var d3 = require('d3');
require('d3-shape');
require('d3-path');

module.exports = function(app) {

    var dependencies = [];

    function service() {

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

        var drawPieChartAnimated = function() {
            var dataset = [{
                label: 'Abulia',
                count: 10
            }, {
                label: 'Betelgeuse',
                count: 20
            }, {
                label: 'Cantaloupe',
                count: 30
            }, {
                label: 'Dijkstra',
                count: 40
            }];

            var width = 500,
                height = 500,
                radius = 250;

            var svg = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

            var circle = svg.selectAll("circle")
                .data(dataset) // UPDATE
                .style("fill", "blue");

            circle.exit().remove();

            circle.enter().append("circle")
                .style("fill", "green")
                .merge(circle)
                .style("stroke", "black");
        };

        return {
            drawPieChart: drawPieChart,
            drawPieChartAnimated: drawPieChartAnimated
        };

    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};
