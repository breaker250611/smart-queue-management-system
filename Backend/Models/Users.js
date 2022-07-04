const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
  UserName : {type : String, required : true, index : {unique : true}},
  // FirstName  : {type : String, required: true},
  // LastName : {type : String, required: true},
  Email : {type : String, required : true},
  Password : {type : Password, required : true}
})

const Users = mongoose.model('Users', UsersSchema)
module.export = Users