using {Country,managed} from '@sap/cds/common';

service CatalogService{
    entity Books{
        key ID: Integer;
        title:String;
        author:Association to Authors;
        stock:Integer;
    }
    entity Authors{
        key ID:Integer;
        name:String;
        books:Association to many Books on books.author=$self;
    }
    entity Orders{
        key ID:Integer;
        book: Association to Books;
        Country:Country;
        amount:Integer;
    }
}