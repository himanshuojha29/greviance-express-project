const StudentModel = require('../../models/Student')
const bcrypt = require('bcrypt')

class StudentController {


    static addstudent = async(req,res)=>{
        try {
            const data = await StudentModel.find().sort({_id:-1})
            console.log(data)
            res.render('admin/student/addstudent',{d:data})
            
        } catch (error) {
            console.log(error)
            
        }
    }

    static studentinsert = async (req,res) =>{
        try{
            const {name,email,password} = req.body
            const hashpassword = await bcrypt.hash(password,10)
            const result = new StudentModel({
                name:name,
                email:email,
                password:hashpassword
            })
            await result.save()
            res.redirect('/admin/addstudent')
        }catch(error){
            console.log(error)
        }
    }
    static viewstudent = async (req,res)=>{
        try{
            // console.log(req.params.id)
            const data = await StudentModel.findById(req.params.id)
            // console.log(data)
            res.render('admin/student/view',{d:data})
            
        }catch{
            console.log(error)
        }
    }
}

module.exports = StudentController;