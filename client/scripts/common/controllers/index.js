'use strict';

module.exports = function(app) {
    // inject:start
    require('./home')(app);
    require('./test')(app);
    // inject:end
};