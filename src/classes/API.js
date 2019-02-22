const EventEmitter = require('events');
const r = require('phin').defaults({ parse: 'json' });

module.exports = class API extends EventEmitter {
    constructor(token, options = {}) {
        super();

        this.Authorization = token;
    }
}