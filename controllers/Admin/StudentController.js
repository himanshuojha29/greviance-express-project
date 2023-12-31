const StudentModel = require('../../models/Student')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

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
    static editstudent = async (req,res)=>{
        try{
            // console.log(req.params.id)
            const data = await StudentModel.findById(req.params.id)
            // console.log(data)
            res.render('admin/student/edit',{d:data})
            
        }catch(error){
            console.log(error)
        }
    }
    static updatestudent = async (req,res)=>{
        try{
            // console.log(req.body);
            const id= req.params.id
            const update = await StudentModel.findByIdAndUpdate(id,{
                name:req.body.name,
                email:req.body.email,
                password:req.body.password

            })
            res.redirect('/admin/addstudent')
        }catch(error){
            console.log(error);

        }
    }

    static deletestudent = async (req,res)=>{
        try{
           await StudentModel.findByIdAndDelete(req.params.id)
           res.redirect('/admin/addstudent')

        }catch(error){
            console.log(error)
        }
    }
    static verifylogin = async (req,res) =>{
        try{
            const {email,password}=req.body
          if (email && password) {
            const student=await StudentModel.findOne({email:email})

            // password check
           if(student !=null){
            const ismatched = await bcrypt.compare(password, student.password)
            if (ismatched) {
                // generate tolken
                const token = jwt.sign({ ID: student._id }, 'himanshu123');
                // console.log(token)
                res.cookie('token',token)
                res.redirect('/dashboard')
                
            } else {
                res.redirect('/')  
            }
            
           }else{
            res.redirect('/')
           }

          } else {
            res.redirect('/')     
          }

        }catch(error){
            console.log(error)
        }
    }



    static logout = async(req,res) =>{
        try{
           console.log(req.body)
        }catch(error){
            console.log(error)
        }
    }


}

module.exports = StudentController;