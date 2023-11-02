module.exports = function CatalogService(){
    this.on("getBook","Books",({params:[id]}) => id)
    this.on("add",({data:{x,y}})=>x+y)
    this.on("hello",()=>"Hello!")
}