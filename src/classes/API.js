const EventEmitter = require('events');
const r = require('phin').defaults({ parse: 'json' });

module.exports = class API extends EventEmitter {
    constructor(token, options = {}) {
        super();

        if (typeof (token) != 'string' || token == '') throw new Error('The supplied bot token must be a valid string');

        this._Authorization = token;
        this.baseURL = 'https://discordbots.org/api';
    }

    async _httpRequest(method, path, authRequired) {
        if (!['GET', 'POST'].includes(method.toUpperCase())) throw new Error('The supplied HTTP method must be either \'GET\' or \'POST\'');

        let headers = {};

        if (authRequired) headers['Authorization'] = this._Authorization;

        try {
            const res = await r({
                url: `${this.baseURL}/${path}`,
                method: method.toUpperCase(),
                headers
            });

            if (res.statusCode == 404) return { status: 404 };
            if (res.statusCode == 500) return { status: 500 };

            return { status: res.statusCode, body: res.body };
        } catch(err) {
            return { status: 999, error: err };
        }
    }

    /*
        bot(<id>)
        => Promise {Bot}
    */
    async bot(_id) {
        const getBot = require('../methods/Bot/getBot');
        return await getBot(this, _id);
    }

    /*
        bots([options = {}])
        => Promise {Array:Bot}
    */
    async bots(_options) {
        const getAllBots = require('../methods/Bot/getAllBots');
        return await getAllBots(this, _options || {});
    }

    /*
        status(<id>)
        => Promise {Stats}
    */
    async stats(_id) {
        const getBotStats = require('../methods/Bot/getBotStats');
        return await getBotStats(this, _id);
    }

    /*
        votes(<id>)
        => Promise {Array:Vote}
    */
    async votes(_id) {
        const getBotVotes = require('../methods/Bot/getBotVotes');
        return await getBotVotes(this, _id);
    }

    /*
        user(<id>)
        => Promise {User}
    */
    async user(_id) {
        const getUser = require('../methods/User/getUser');
        return await getUser(this, _id);
    }

    /*
        widget(<id>, [options = {}])
        => Promise {WidgetURL}
    */
    async widget(_id, _options) {
        const getWidget = require('../methods/Widget/getWidget');
        return await getWidget(this, _id, _options || {});
    }
}