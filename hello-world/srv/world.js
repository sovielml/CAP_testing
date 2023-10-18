const cds = require('@sap/cds');

module.exports = (say) => {
    say.on('hello', req => `Hello ${req.data.to}.`);
    say.on('talktome', (req) => { 
        if (req.data.angry) {
             return `Fuck off, ${req.data.who}!`
            }else {
                return `How can I help you, ${req.data.who}?`
            }
    });
    say.on('catfact',async req=>{
        const catapi = await cds.connect.to("catfactapi");
        return catapi.tx(req).get("/fact");
    });
    say.on('boredom',async req=>{
        const boredomapi = await cds.connect.to("boredomapi");
        let array = boredomapi.tx(req).get("/activity");
        return array;
    });
    say.on('catordog',async req=>{
        return {"label": "Cat", "confidences": [{"label": "Cat", "confidence": 0.9965655207633972}, {"label": "Dog", "confidence": 0.0034344755113124847}]}
    })
}