'use strict';
var controllername = 'home';
var d3 = require('d3');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.name + '.geoData', '$window'];

    function controller(geoData, $window) {
        var vm = this;
        vm.controllername = fullname;
        console.log('d3', d3);

        vm.width = $window.innerWidth;
        vm.height = $window.innerHeight;
        var idf = geoData.getIdf();
        var pointsCity = geoData.getPoints();
        console.log('pointsCity', pointsCity);

        var svg = d3.select('body')
            .append('svg')
            .attr('width', vm.width)
            .attr('height', vm.height)
            .call(d3.zoom().on('zoom', redraw));

        var circle = svg.append('circle')
            .attr('cx', 30)
            .attr('cy', 30)
            .attr('r', 20);

        var g = svg.append('g');

        var albersProjection = d3.geoAlbers()
            .scale(140000)
            .rotate([-2.35, 0])
            .center([0, 48.835])
            .translate([vm.width / 2, vm.height / 2]);

        var geoPath = d3.geoPath()
            .projection(albersProjection);

        var map = g.selectAll('path')
            .data(idf.features)
            .enter()
            .append('path')
            .attr('fill', function(d, i) {
                console.log(i);
                // return 'rgb(' + ( 10 * i) + ',' + (5 * i) + ',' + (2* i) + ')';
                return '#ccc';
            })
            .style('stroke-width', 1 + 'px')
            .style('stroke', 'black')
            .attr('d', geoPath);

        var points = svg.append('g');

        // points.selectAll('path')
        //     .data(pointsCity.features)
        //     .enter()
        //     .append('path')
        //     .attr('fill', '#900')
        //     .attr('stroke', '#999')
        //     .attr('opacity', .3)
        //     .attr('d', geoPath);

        points.selectAll('image')
            .data(pointsCity.features)
            .enter()
            .append('svg:image')
            .attr('xlink:href', 'images/app/logo.png')
            .attr('x', function(d) {
                return albersProjection(d.geometry.coordinates)[0] - 6;
            })
            .attr('y', function(d) {
                return albersProjection(d.geometry.coordinates)[1] - 6;
            })
            .attr('width', 20)
            .attr('height', 20);

        points.selectAll('clock')
            .data(pointsCity.features)
            .enter()
            .append('svg:image')
            .attr('xlink:href', 'images/app/clock.png')
            .attr('x', function(d) {
                return albersProjection(d.geometry.coordinates)[0] - 16;
            })
            .attr('y', function(d) {
                return albersProjection(d.geometry.coordinates)[1] - 16;
            })
            .attr('width', 12)
            .attr('height', 12)
            .attr('text', "noam");

        points.selectAll('text')
            .data(pointsCity.features)
            .enter()
            .append('text')
            .attr('x', function(d) {
                return albersProjection(d.geometry.coordinates)[0] - 30;
            })
            .attr('y', function(d) {
                return albersProjection(d.geometry.coordinates)[1] - 16;
            })
            .text("0h12");

        function redraw() {
            // console.log('d3.event', d3.event);

            // console.log('here', d3.event.translate, d3.event.scale);
            // var k = d3.event.scale;
            // var x = Math.max(Math.min(d3.event.translate[0] / k, vm.width / 2), -vm.width / 2);
            // var y = Math.max(Math.min(d3.event.translate[1] / k, vm.height / 2), -vm.height / 2);

            // g.transition()
            //     .duration(10)
            //     .attr('transform', 'scale(' + k + ')translate(' + x + ',' + y + ')');

            // points.transition()
            //     .duration(10)
            //     .attr('transform', 'scale(' + k + ')translate(' + x + ',' + y + ')');

            //console.log('here', d3.event);
            var k = d3.event.transform.k;
            var x = Math.max(Math.min(d3.event.transform.x / k, vm.width / 2), -vm.width / 2);
            var y = Math.max(Math.min(d3.event.transform.y / k, vm.height / 2), -vm.height / 2);

            g.transition()
                .duration(10)
                .attr('transform', 'scale(' + k + ')translate(' + x + ',' + y + ')');

            points.transition()
                .duration(10)
                .attr('transform', 'scale(' + k + ')translate(' + x + ',' + y + ')');

        }

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
