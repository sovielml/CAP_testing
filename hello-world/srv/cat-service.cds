using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books actions{
        function getBook(id:Integer) returns Integer;
    };
    function add(x:Integer,y:Integer) returns Integer;
    function hello() returns String;
    
}
