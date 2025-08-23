const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
   name: String,
   email: {
      type: String,
      require: true,
   },
   password: String,
   profileImage: String,
   bio: {
      type: String,
      default: "",
   },

   about: {
      image: [String],
   },
   likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
   savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

let User = mongoose.model("User", UserSchema);
module.exports = User;
