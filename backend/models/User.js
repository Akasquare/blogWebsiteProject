const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
  },
  password: String,
  profileImage: String,
  about:{
    bio:String,
    image:[
      {
        type:String,
      }
    ]
  }
});

let User = mongoose.model("User", UserSchema);
module.exports = User;
