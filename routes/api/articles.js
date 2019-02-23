const express = require("express");
const router = express.Router();
//const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const Article = require ("../../models/Article");

//@route POST api/articles/
//@desc Articles
//@access Public
router.get("/", (req, res, next ) =>{
    return Article.find()
        .then((articles) => res.json( {
             articles: articles.map( article =>
                article.toJSON() ) }))
        .catch(next);
} );


module.exports = router;