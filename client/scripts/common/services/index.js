'use strict';

module.exports = function(app) {
    // inject:start
    require('./geoData')(app);
    // inject:end
};