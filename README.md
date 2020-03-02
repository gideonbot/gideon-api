# gideon-api
Node API Wrapper for Gideon API™

> Simple API wrapper for the Gideon API™ powering the Arrowverse Discord Bot

- Easy to use
- Full API coverage
- Also wraps the arrowverse.info API

### Installing

```npm install gideon-api```


### Usage

```js
const gideonapi = require('gideon-api');

//fetch a random Arrowverse quote:
let quote = await gideonapi.quote();
console.log(quote);

//fetch metahuman abilities:
const abilities = await gideonapi.abilities();
console.log(abilities);

//fetch soundtrack album urls:
const soundtracks = await gideonapi.soundtracks();
console.log(soundtracks);

//fetch list of speedsters:
const speedsters = await gideonapi.speedsters();
console.log(speedsters);
```
## License

MIT