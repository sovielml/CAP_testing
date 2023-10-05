service say {
    function hello (to: String) returns String;
    function talktome(who:String, angry:Boolean) returns String;
    function catfact() returns String;
    function boredom() returns array of{
        String activity;
        String type;
        String participants;
        String price;
        String link;
        String key;
    };
}