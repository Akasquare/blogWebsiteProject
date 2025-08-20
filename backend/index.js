const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const User = require("./models/User");
const Post = require("./models/Post");
const app = express()

//connect Database

async function connectDb(params) {
    await mongoose.connect('mongodb://127.0.0.1/medium');
    console.log("connected to DB")
}
connectDb();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.send("home route")
});
app.get('/user', async (req, res)=>{
    let user= await User.find();
    res.json({
        message : "Data fetched",
        user: user,
    })
});
app.post('/user/bio/edit', async (req, res)=>{
    let user= await User.find();
    res.json({
        message : "Data fetched",
        user: user,
    })
});

app.post('/user/signup', async (req, res)=>{
    let user= await User.findOne({
        email : req.body.email,  
    })
    if(!user){
        let user1= await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            profileImage : req.body.profileImage,
    
        })
        
        res.json({
            message : "User data stored",
            user: user1,
            success: true,

        })

    }else{
        res.json({
            message : "Email is already used",
            success: false,
        })
    }
    
});
app.post('/user/login', async (req, res)=>{
    
    let user= await User.findOne({
        email : req.body.email, 
        password : req.body.password, 
    })
    console.log(user)
    if(!user){
        res.json({
            message : "User not found",
            user: user,
            success: false,
        })

    }else{
        res.json({
            message : "User found",
            user: user,
            success: true,
        })
    }
});
app.post('/post', async (req, res)=>{
    let post= await Post.create({
        title : req.body.title,
        description : req.body.description,
        image : req.body.image,
        author : req.body.author,

    })
    
    res.json({
        message : "post data stored",
        post: post,
    })
});

// app.delete("/user/:userId", async (req, res) => {
//     try {
//         const { userId } = req.params;

//         const deletedPosts = await User.findByIdAndDelete( userId );

         

//         res.json({
//             message: `  user deleted successfully`,
//             result: deletedPosts
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error deleting posts by user" });
//     }
// });

app.get("/post/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id).populate('author');

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json({ 
            message: "Post fetched successfully",
            post: post
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting post" });
    }
});
 
app.get('/post', async (req, res)=>{
    let post= await Post.find().populate("author");
    res.json({
        message : "Data fetched",
        post: post,
    })
});
app.get('/userprofile/:id', async (req, res)=>{
    const { id } = req.params;

    console.log(id)
    let post= await Post.find({author : id}).populate('author');
    // console.log(post)
    res.json({
        message : "Data fetched",
        post: post,
    })
});


app.listen('8000',()=>{
    console.log('server is running...')
})