module.exports = async (API, id) => {
    return new Promise(async (resolve, reject) => {
        if (typeof (id) != 'string' || id == '') return reject(`The supplied bot ID must be a valid string`);

        const res = await API._httpRequest('GET', `bots/${id}/votes`, true);
        
        if ([404, 500].includes(res.status)) return reject(`API returned an error code '${res.status}'`);
        if (res.status == 999) return reject(res.error);
        
        res.body.forEach(u => u.tag = `${u.username}#${u.discriminator}`);
        return resolve(res.body);
    });
}