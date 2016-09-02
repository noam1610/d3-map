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

        // var res = serverData.getPatientCountTri();
        // drawer.drawPieChart(res);

        drawer.drawTimePlot();

    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
