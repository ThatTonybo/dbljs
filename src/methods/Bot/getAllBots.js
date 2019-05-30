module.exports = async (API, options) => {
    return new Promise(async (resolve, reject) => {
        if (options != null && typeof (options) != 'object') return reject(`The supplied options object must be a valid object`);

        const Options = [];

        if (options && options.limit) Options.push({ name: 'limit', value: isNaN(options.limit) ? 50 : parseInt(options.limit) });
        if (options && options.offset) Options.push({ name: 'offset', value: isNaN(options.offset) ? 0 : parseInt(options.offset) });
        if (options && options.query) Options.push({ name: 'search', value: options.query.map(o => `${o.field}: ${o.value}`).join(' ') });
        if (options && options.sortBy) Options.push({ name: 'sort', value: options.sortBy });
        if (options && options.fields) Options.push({ name: 'fields', value: options.fields.join(', ') || 'All fields' });

        const URL = `bots${Options.length > 0 ? '?' : ''}${Options.map(o => `${encodeURIComponent(o.name)}=${encodeURIComponent(o.value)}`).join('&')}`;
        const res = await API._httpRequest('GET', URL, true);

        if ([404, 500].includes(res.status)) return reject(`API returned an error code '${res.status}'`);
        if (res.status == null) return reject(res.error);

        return resolve({
            matching: res.body.total,
            results: res.body.results
        });
    });
}