//import {client} from "@gradio/client";
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
    })
}

// async function gradio_test(){

//     const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
//     const exampleImage = await response_0.blob();
                            
//     const app = await client("https://sovielml-test.hf.space/");
//     const result = await app.predict("/predict", [
//                     exampleImage, 	// blob in 'img' Image component
//         ]);

//     return(result.data);

// }