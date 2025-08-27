if (process.env.NODE_ENV != "production") {
   require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const Post = require("./models/Post");
const app = express();
const { upload } = require("./config/cloudinary");
const Review = require("./models/Review");

//connect Database

async function connectDb(params) {
   await mongoose.connect("mongodb://127.0.0.1/medium");
   console.log("connected to DB");
}
connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.send("home route");
});
app.get("/user", async (req, res) => {
   let user = await User.find();
   res.json({
      message: "Data fetched",
      user: user,
   });
});
app.get("/user/:id", async (req, res) => {
   try {
      let user = await User.findById(req.params.id);
      res.json({
         message: "Data fetched",
         user: user,
      });
   } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Something went wrong" });
   }
});
app.get("/userprofile/:id", async (req, res) => {
   try {
      let posts = await Post.find({ author: req.params.id }).populate("author");

      if (!posts || posts.length === 0) {
         return res.json({ message: "No posts found", posts: [] });
      }
      res.json({
         message: "Data fetched",
         Posts: posts,
      });
   } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Something went wrong" });
   }
});
app.post("/user/:id/bioedit", async (req, res) => {
   try {
      const { bio } = req.body;
      let user = await User.findByIdAndUpdate(
         req.params.id,
         { bio: bio },
         { new: true } // returns updated document
      );
      if (!user) {
         return res
            .status(404)
            .json({ success: false, message: "User not found" });
      }
      res.json({
         success: true,
         message: "Bio updated successfully",
         user,
      });
   } catch (err) {
      console.error("Error updating bio:", err);
      res.status(500).json({
         success: false,
         message: "Internal Server Error",
         error: err.message,
      });
   }
});

app.post("/user/signup", upload.single("profileImage"), async (req, res) => {
   try {
      const { name, email, password } = req.body;

      
      const profileImage = req.file
         ? req.file.path
         : "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";

      let user = await User.findOne({
         email: req.body.email,
      });
      if (!user) {
         let user1 = await User.create({
            name,
            email,
            password,
            profileImage,
         });

         res.json({
            message: "User data stored",
            user: user1,
            success: true,
         });
      } else {
         res.json({
            message: "Email is already used",
            success: false,
         });
      }
   } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Something went wrong" });
   }
});
app.post("/user/login", async (req, res) => {
   let user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
   }).populate("savedPosts");

   if (!user) {
      res.json({
         message: "User not found",
         user: user,
         success: false,
      });
   } else {
      res.json({
         message: "User found",
         user: user,
         success: true,
      });
   }
});
app.post("/post", upload.single("image"), async (req, res) => {
   try {
      let post = await Post.create({
         title: req.body.title,
         description: req.body.description,
         image: req.file ? req.file.path : "",
         author: req.body.author,
      });

      res.json({
         message: "post data stored",
         post: post,
         success: true,
      });
   } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Something went wrong" });
   }
});
app.post("/post/:id/comment", async (req, res) => {
   try {
      const { comment, author } = req.body;
      const post = await Post.findById(req.params.id);

      if (!post) {
         return res
            .status(404)
            .json({ success: false, message: "Post not found" });
      }

      const newReview = new Review({ comment, author });
      await newReview.save();

      post.reviews.push(newReview);

      await post.save();

      res.json({
         message: "Review stored",
         post: post,
         success: true,
      });
   } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Something went wrong" });
   }
});
app.post("/post/like", async (req, res) => {
   try {
      const { userId, postId } = req.body;

      if (!userId || !postId) {
         return res
            .status(400)
            .json({ success: false, message: "Missing data" });
      }

      const user = await User.findById(userId);
      const post = await Post.findById(postId);

      if (!user || !post) {
         return res
            .status(404)
            .json({ success: false, message: "User or Post not found" });
      }

      const alreadyLiked = post.likes.includes(userId);

      if (alreadyLiked) {
         post.likes.pull(userId);
         user.likedPosts.pull(postId);
      } else {
         post.likes.push(userId);
         user.likedPosts.push(postId);
      }

      await post.save();
      await user.save();

      res.json({
         success: true,
         liked: !alreadyLiked,
         message: alreadyLiked ? "Post unliked" : "Post liked",
         likesCount: post.likes.length,
      });
   } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Something went wrong" });
   }
});
app.post("/post/save", async (req, res) => {
   try {
      const { userId, postId } = req.body;

      if (!userId || !postId) {
         return res
            .status(400)
            .json({ success: false, message: "Missing data" });
      }

      const user = await User.findById(userId);

      if (!user) {
         return res
            .status(404)
            .json({ success: false, message: "User not found" });
      }

      const alreadySaved = user.savedPosts.includes(postId);

      if (alreadySaved) {
         user.savedPosts.pull(postId);
      } else {
         user.savedPosts.push(postId);
      }

      await user.save();

      res.json({
         success: true,
         user: user,
         saved: !alreadySaved,
         message: alreadySaved ? "Post unSaved" : "Post Saved",
         savesCount: user.savedPosts.length,
      });
   } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Something went wrong" });
   }
});
app.delete("/comment/:id", async (req, res) => {
   let deletedComment = await Review.findByIdAndDelete(req.params.id);
   res.json({
      message: "review deleted",
      deletedComment: deletedComment,
      success: true,
   });
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

      const post = await Post.findById(id)
         .populate({ path: "reviews", populate: { path: "author" } })
         .populate("author");

      if (!post) {
         return res.status(404).json({ message: "Post not found" });
      }

      res.json({
         message: "Post fetched successfully",
         post: post,
      });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting post" });
   }
});

app.get("/post", async (req, res) => {
   let post = await Post.find().populate("author", "name email profileImage");
   res.json({
      message: "Data fetched",
      post: post,
   });
});
app.get("/userprofile/:id", async (req, res) => {
   const { id } = req.params;
   let post = await Post.find({ author: id }).populate("author");

   res.json({
      message: "Data fetched",
      post: post,
   });
});

app.listen("8000", () => {
   console.log("server is running...");
});
