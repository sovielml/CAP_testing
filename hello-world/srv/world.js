const client = require("@gradio/client/package.json");
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
        //return {"label": "Cat", "confidences": [{"label": "Cat", "confidence": 0.9965655207633972}, {"label": "Dog", "confidence": 0.0034344755113124847}]}
        gradio_test();
    })
}

async function gradio_test(){

    const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
    const exampleImage = await response_0.blob();
                            
    const app = await client("https://sovielml-test.hf.space/");
    const result = await app.predict("/predict", [
                    exampleImage, 	// blob in 'img' Image component
        ]);

    return(result.data);

}