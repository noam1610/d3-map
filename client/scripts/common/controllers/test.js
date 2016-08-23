'use strict';
var controllername = 'test';
var d3 = require('d3');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$scope', app.name + '.drawer', app.name + '.serverData'];

    function controller($scope, drawer, serverData) {
        var vm = this;
        vm.controllername = fullname;

        var res = serverData.getPatientCountTri();
        drawer.drawPieChart(res);

        // var bodySelection = d3.select('body');

        // var svgSelection = bodySelection.append('svg')
        //     .attr('width', 50)
        //     .attr('height', 50);

        // var circleSelection = svgSelection.append('circle')
        //     .attr('cx', 25)
        //     .attr('cy', 25)
        //     .attr('r', 25)
        //     .style('fill', 'purple');

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
