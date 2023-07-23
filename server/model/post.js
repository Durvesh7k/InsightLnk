import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    picture : {
        type : String,
        required : true,
    },
    userName : {
        type : String,
        required : true,
    },
    categories : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    createdDate :{
        type : Date,
    },
    keywords: [{
        type : String,
    }]
})

const post = mongoose.model('posts', postSchema);

export default post;