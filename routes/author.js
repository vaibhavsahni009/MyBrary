const express=require('express');
const router=express.Router();
const Author=require('../models/author');

// All authors route
router.get('/',async (req,res)=>{
    try {
        const authors=await Author.find({});
        res.render('authors/index',{authors});
        
    } catch  {
        res.redirect('/');
    }
})

// New authors route
router.get('/new',(req,res)=>{
    res.render('authors/new',{author:new Author()});
})

// Create authors route
router.post('/',async (req,res)=>{
    const author=new Author({
        name:req.body.name
    });
    try {
        const newAuthor=await author.save();
        res.redirect('authors');
        // res.redirect(`authors/${newAuthor.id}`);
    } catch  {
        res.render('authors/new',{
                    author,
                    errorMessage:'Error creating Author'              
                    });
    }
    
    
})


module.exports=router;