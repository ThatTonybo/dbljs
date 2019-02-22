# dbljs
An incredibly simple to use wrapper for discordbots.org, supporting the API and webhooks. Guaranteed to be kept up to date when the API changes.

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
    - [ ] Bot
    - [ ] User

## Contributing
If you'd like to contribute, let me know by sending a message to me at `ThatTonybo#0001`. If you find any bugs or issues, [please report them](https://github.com/ThatTonybo/dbljs/issues).

(c) 2019 ThatTonybo. This project is licenced under the MIT Licence, please see [LICENCE](https://github.com/ThatTonybo/dbljs/blob/master/LICENSE) for information.