module.exports = class Bot {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.avatar = data.avatar || data.defAvatar;
        this.owners = data.owners;
        this.details = {
            certified: data.certifiedBot,
            library: data.lib,
            prefix: data.prefix,
            tags: data.tags || [],
            approvedAt: new Date(data.date),
            donateID: data.donatebotguildid || null
        };
        this.description = {
            short: data.shortdesc,
            long: data.longdesc || null
        };
        this.links = {
            url: `https://discordbots.org/bot/${data.id}`,
            vanity: data.vanity || null,
            invite: data.invite || `https://discordapp.com/oauth2/authorize/?&scope=bot&client_id=${data.id}`,
            website: data.website || null,
            github: data.github || null,
            support: data.support || null
        };
        this.votes = {
            total: data.points,
            thisMonth: data.monthlyPoints
        };
    }

    get tag() {
        const tag = `${this.username}#${this.discriminator}`;
        return tag;
    }
}