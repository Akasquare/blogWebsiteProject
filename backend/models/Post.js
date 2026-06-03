const mongoose = require("mongoose");

let PostSchema = mongoose.Schema({
   title: String,
   description: String,
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
   likes: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      },
   ],
   image: {
      url: String,    
      name: String   
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   reviews: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Review",
      },
   ],
});

let Post = mongoose.model("Post", PostSchema);
module.exports = Post;
