const express=require('express');
const router=express.Router();
const Book=require('../models/book');
const Author=require('../models/author');


// All Books route
router.get('/',async (req,res)=>{

    res.send('All Books');
})

// New books route
router.get('/new',async (req,res)=>{
    try {
        const authors = await Author.find({});
        const book= new Book();
        res.render('books/new',{
            authors,
            book,
        });
    } catch  {
        res.redirect('/books');
    }
    
})

// Create books route
router.post('/',async (req,res)=>{
    res.send('Create Books');
    
    
})


module.exports=router;