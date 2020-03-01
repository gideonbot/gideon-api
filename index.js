const fetch = require('node-fetch');
const gapi = 'https://gideonbot.co.vu/api/';

module.exports.quote = async () => {
    try {
        const tbody = await fetch(gapi + 'quotes').then(res => res.json());
        let rt = tbody.sections[0].content;
        let min = 0;
        let max = rt.length - 1;
        let ranum = Math.floor(Math.random() * (max - min + 1)) + min;
        const title = rt[ranum].title;
        const idapi = `https://dc.fandom.com/api/v1/Articles/Details?ids=50&titles=${title}&abstract=100&width=200&height=200`;
    
        const idbody = await fetch(idapi).then(res => res.json());
        const type = Object.values(idbody.items)[0];
        let id = type.id;
        const api = `https://dc.fandom.com/api/v1/Articles/AsSimpleJson?id=${id}`;
    
        const qbody = await fetch(api).then(res => res.json());            
        let rq = qbody.sections[0].content;
        let qmin = 0;
        let qmax = rq.length - 1;
        let qranum = Math.floor(Math.random() * (qmax - qmin + 1)) + min;
        const chosenQuote = rq[qranum].text;          
    
        let qp = qbody.sections[0].title;
        let qpe = qp.replace(/(?:\/Quotes)/,'');
    
        return `**${chosenQuote}\n\n~${qpe}**`;
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
        console.log("An error occurred while trying to fetch speedsters: " + ex);
    }
}