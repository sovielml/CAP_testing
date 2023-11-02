module.exports = (srv) => {
    srv.on('READ','Books', ()=>{
        return [
            { ID:201, title:'Wuthering Heights', author_ID:101, stock:12 },
            { ID:251, title:'The Raven', author_ID:150, stock:333 },
            { ID:252, title:'Eleonora', author_ID:150, stock:555 },
            { ID:271, title:'Catweazle', author_ID:170, stock:222 },
        ]
    })
    srv.on('READ','Authors',()=>{
        return [
            { ID:101, name:'Emily Brontë' },
            { ID:150, name:'Edgar Allen Poe' },
            { ID:170, name:'Richard Carpenter' },
        ]
    })
    srv.after('READ','Books',each=>{
        if(each.title === 'Wuthering Heights') return each.stock = 0
        if(each.stock < 10) return each.title += ' -- jetzt zuschlagen'
        if(each.stock > 100) return each.title += ' -- 10% discount'
        
    })
}