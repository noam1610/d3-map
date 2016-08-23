'use strict';

module.exports = function(app) {
    // inject:start
    require('./drawer')(app);
    require('./geoData')(app);
    require('./serverData')(app);
    // inject:end
};