# dbljs
An incredibly simple to use wrapper for discordbots.org, supporting the API and webhooks. Guaranteed to be kept up to date when the API changes.  

[![Discord](https://discordapp.com/api/guilds/454409434676854786/embed.png?style=shield)](https://discord.gg/nnpPGRy)  

## Install
dbljs can be installed using npm
```
npm install dbljs
```

## Usage
To create a new instance of dbljs, require it and supply your bot's token, and an optional `options` object.
```js
const dbljs = require('dbljs');
const token = 'Your discordbots.org API token';

const API = new dbljs(token, {});
```
You can now start using the API wrapper. For more information, check out the documentation [here](https://github.com/ThatTonybo/dbljs/wiki).

## What's to come?
- [ ] Webhook support
- [ ] Server count posting
    - [ ] Manually
    - [ ] Automatically, manual details
    - [ ] Automatically, client-based
- [ ] Structures
    - [x] Bot
    - [ ] User

## Contributing
Contributions are welcome to any aspects of this project's source code, including improvements, changes or entirely new features. Fork the repository, make your changes, and create a pull request when you're ready to contribute.  
If you find any issues, [please report them here](https://github.com/ThatTonybo/dbljs/issues).

## Licence
(c) 2019 ThatTonybo. Licenced under the MIT Licence, see the LICENCE file for more information.