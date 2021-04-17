const fetch = require('node-fetch');
const gapi = 'https://gideonbot.com/api/';

module.exports.quote = async () => {
    try {
        const body = await fetch(gapi + 'quotes').then(res => res.json());
        let min = 0;
        let max = body.length - 1;
        let rnum = Math.floor(Math.random() * (max - min + 1)) + min;
        const quote = body[rnum];
        return quote;
    }

    catch (ex) {
        console.log("An error occurred while trying to fetch a quote: " + ex);
    }
}
    
module.exports.abilities = async (type) => {
    try {
        const body = await fetch(gapi + 'abilities').then(res => res.json());
        if (type === 'speedster') return body.speedsters;
        else if (type === 'viber') return body.vibers;
        else if (type === 'kryptonian') return body.kryptonians;
        else return body;
    }

    catch (ex) {
        console.log("An error occurred while trying to fetch abilities: " + ex);
    }
}

module.exports.soundtracks = async (show) => {
    try {
        const body = await fetch(gapi + 'soundtracks').then(res => res.json());
        if (show === 'flash') return body.flash;
        else if (show === 'arrow') return body.arrow;
        else if (show === 'supergirl') return body.supergirl;
        else if (show === 'legends') return body.lot;
        else if (show === 'crossovers') return body.crossovers;
        else return body;
    }

    catch (ex) {
        console.log("An error occurred while trying to fetch soundtracks: " + ex);
    }
}

module.exports.speedsters = async () => {
    try {
        const body = await fetch(gapi + 'speedsters').then(res => res.json());
        return body;
    }

    catch (ex) {
        console.log("An error occurred while trying to fetch a timeline change: " + ex);
    }
}

module.exports.timeline = async () => {
    try {
        const body = await fetch(gapi + 'timeline').then(res => res.json());
        let rt = body[Math.floor(Math.random() * body.length)];
        return rt;
    }

    catch (ex) {
        console.log("An error occurred while trying to fetch speedsters: " + ex);
    }
}

module.exports.avi = async () => {
    try {
        const body = await fetch('https://arrowverse.info/api').then(res => res.json());
        const shows = body.filter(x => x.series !== 'Vixen' && x.series !== 'Freedom Fighters: The Ray');
        return shows;
    }

    catch (ex) {
        console.log("An error occurred while trying to fetch ffrom arrowverse.info: " + ex);
    }
}