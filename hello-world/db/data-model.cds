namespace my.bookshop;
//ID;title;stock;price;author;publisher;genre;year;pages
entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  price  : Decimal(9,2);
  author : String;
  publisher : String;
  genre : String;
  year : Integer;
  pages : Integer;
}
