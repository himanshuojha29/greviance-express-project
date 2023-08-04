const mongoose = require ('mongoose')
const StudentSchema = new mongoose.Schema({
   
      name:{
        type:String, 
        reuired:true

       },
       email:{
        type:String,
        reuired:true
       },
       password:{
        type:String,
        reuired:true
       }
})

const StudentModel = mongoose.model('student',StudentSchema)
module.exports = StudentModel