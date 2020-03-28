const autoBind = require('auto-bind');


module.exports = class validator {
    constructor() {
        autoBind(this);
    }
}