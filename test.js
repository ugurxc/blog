const mongoose = require('mongoose')
const Post = require("./models/Post")
mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db')
/* 
Post.create({

    title:"ikinci post başlık",
    content:"ikinci içerim normlifebaby",
}, (error,Post)=>{

    console.log(error,Post)
}) */
/* Post.findByIdAndUpdate("63864cf7bea64ea4d5e00072",{
    title:"agagaggagagaggagaga"
},(error,Post)=>{
    console.log(error,Post)
}) */
/* Post.findByIdAndDelete("63864e826fceb4fe190ef74c",(error,post)=>{
    console.log(error,post)
}) */
Post.find({},(error, post)=>{
    console.log(error,post)
})