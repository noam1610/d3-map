'use strict';
var controllername = 'test';
var d3 = require('d3');

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = ['$scope'];

    function controller($scope) {
        var vm = this;
        vm.controllername = fullname;

        var dataset = [5, 10, 15, 20, 25];

        var canvas = d3.select("body")
            .append("svg")
            .attr("width", 500)
            .attr("height;", 150);

            

        // var sousCanvas = canvas.select('a')
        //     .append('path')
        //     .text('a');

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
