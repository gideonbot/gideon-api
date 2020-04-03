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
//CJS:
const gideonapi = require('gideon-api');
//ES6:
import gideonapi from 'gideon-api';

//fetch a random Arrowverse quote:
const quote = await gideonapi.quote();
console.log(quote);

/* Example response
{
  text: 'I told you when we first met, it was to teach all of you a lesson. Because I see everything and I saw two people, with two broken hearts.\n' +
    '\n' +
    '~Music Meister (Arrowverse: Earth-38)',
  img: 'https://vignette.wikia.nocookie.net/marvel_dc/images/0/08/Music_Meister_Arrow_Earth-38_002.jpg/revision/latest/window-crop/width/200/x-offset/14/y-offset/0/window-width/786/window-height/785?cb=20190929051823'
}
*/

//fetch metahuman abilities:
const abilities = await gideonapi.abilities();
//optional parameters: speedsters / vibers / kryptonians
console.log(abilities);

/* Example response
vibers: {
    title1: "Meta-human physiology",
    ability1: "Vibers possess altered DNA and physiology to access dimensional energy.",
    title2: "Dimensional energy manipulation",
    ability2: "Vibers have a psychic link to the natural energies of reality, allowing them to connect with various vibrations of the multiverse and manipulate them for various effects.",
    title3: "Dimensional awareness",
    ability3: "Known as \"vibing\", vibers can perceive various events throughout time and space, letting them see into the past and future as well as parallel dimensions, even into the very Speed Force itself.",
    title4: "Interdimensional travel",
    ability4: "With their natural connection to the multiverse, vibers can open portals to other dimensions. Being a noticeably more advanced ability, they are shown to need focus and a proper awareness of their intended target.",
    title5: "Vibrational blasts",
    ability5: "Vibers are able to generate powerful blue or red concussive blasts of vibrations from their hands capable of propelling full-grown humans through the air.",
    title6: "Mental connection",
    ability6: "Vibers are connected by their powers and are able to observe each other if they\'re skilled enough."
}
*/

//fetch soundtrack album urls:
const soundtracks = await gideonapi.soundtracks();
//optional parameters: flash / arrow / legends / supergirl / crossovers
console.log(soundtracks);

/* Example response
{
    text: 'I told you when we first met, it was to teach all of you a lesson. Because I see everything and I saw two people, with two broken hearts.\n' +
        '\n' +
        '~Music Meister (Arrowverse: Earth-38)',
    img: 'https://vignette.wikia.nocookie.net/marvel_dc/images/0/08/Music_Meister_Arrow_Earth-38_002.jpg/revision/latest/window-crop/width/200/x-offset/14/y-offset/0/window-width/786/window-height/785?cb=20190929051823'
}
*/

//fetch list of speedsters:
const speedsters = await gideonapi.speedsters();
console.log(speedsters);

/* Example response
{
    speedster: "XS (Nora West-Allen)",
    lightningColorsElectrokinesis: "Purple & Yellow (Speed Force) / Purple & Red (Negative Speed Force)",
    universe: "Earth-1",
    actoractress: "Jessica Parker Kennedy",
    firstAppearanceAsSpeedster: "The Flash 4x20 \"Therefore She Is\""
}
*/

//fetch from arrowverse.info:
const episodes = await gideonapi.avi();
console.log(episodes);

/* Example response
{
    "air_date": "February 12, 2019",
    "episode_id": "S05E14",
    "episode_name": "Cause and XS",
    "row_number": 455,
    "series": "The Flash"
}
*/
```
## License

MIT