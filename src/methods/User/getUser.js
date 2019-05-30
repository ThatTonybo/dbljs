module.exports = async (API, id) => {
    return new Promise(async (resolve, reject) => {
        if (typeof (id) != 'string' || id == '') return reject(`The supplied user ID must be a valid string`);

        const res = await API._httpRequest('GET', `users/${id}`, true);
        
        if ([404, 500].includes(res.status)) return reject(`API returned an error code '${res.status}'`);
        if (res.status == null) return reject(res.error);
        
        return resolve(res.body);
    });
}