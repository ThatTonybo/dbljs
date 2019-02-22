module.exports = async (API, id, options) => {
    return new Promise(async (resolve, reject) => {
        if (typeof (id) != 'string' || id == '') return reject(`The supplied bot ID must be a valid string`);
        if (options != null && typeof (options) != 'object') return reject(`The supplied options must be a valid object`);

        let Options = [];

        if (options.topColor) Options.push({ name: 'topcolor', value: options.topColor });
        if (options.middleColor) Options.push({ name: 'middlecolor', value: options.middleColor });
        if (options.usernameColor) Options.push({ name: 'usernamecolor', value: options.usernameColor });
        if (options.certifiedColor) Options.push({ name: 'certifiedcolor', value: options.certifiedColor });
        if (options.dataColor) Options.push({ name: 'datacolor', value: options.dataColor });
        if (options.labelColor) Options.push({ name: 'labelcolor', value: options.labelColor });
        if (options.highlightColor) Options.push({ name: 'highlightcolor', value: options.highlightColor });
        if (options.avatarBackground) Options.push({ name: 'avatarbg', value: options.avatarBackground });
        if (options.leftColor) Options.push({ name: 'leftcolor', value: options.leftColor });
        if (options.rightColor) Options.push({ name: 'rightcolor', value: options.rightColor });
        if (options.leftTextColor) Options.push({ name: 'lefttextcolor', value: options.leftTextColor });
        if (options.rightTextColor) Options.push({ name: 'righttextcolor', value: options.rightTextColor });
        if (options.hideAvatar) Options.push({ name: 'noavatar', value: true });
        
        const URL = `https://discordbots.org/api/widget${options.type ? `/${options.type}` : ''}/${id}.${options.format ? options.format : 'svg'}${Options.length > 0 ? '?' : ''}${Options.map(o => `${encodeURIComponent(o.name)}=${encodeURIComponent(o.value)}`).join('&')}`;
    
        return resolve(URL);
    });
}