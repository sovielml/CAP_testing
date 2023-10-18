service say {
    function hello (to: String) returns String;
    function talktome(who:String, angry:Boolean) returns String;
    function catfact() returns String;
    function boredom() returns array of{
        activity : String;
        type : String;
        participants : String;
        price : String;
        link : String;

    };
    function catordog() returns array of{
        //{"label": "Cat", "confidences": [{"label": "Cat", "confidence": 0.9965655207633972}, {"label": "Dog", "confidence": 0.0034344755113124847}]}
        label : String;
        confidences : array of{
            label : String;
            confidence : Double;
        };
    };
}