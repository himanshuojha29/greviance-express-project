const AdminModel = require("../../models/Admin")

class AdminController {
    static dashboard = async(req,res)=>{
        try {
            res.render('admin/dashboard')
            
        } catch (error) {
            console.log(error)
            
        }
    }

    static login = async(req,res)=>{
        try {
            res.render('admin/login')
            
        } catch (error) {
            console.log(error)
            
        }
    }

    static register = async(req,res)=>{
        try {
            res.render('admin/register')
            
        } catch (error) {
            console.log(error)
            
        }
    }
    static admininsert = async(req,res)=>{
        try {
            // console.log(req.body)
            const result = new AdminModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            await result.save();
            res.redirect('/admin/login')


            
        } catch (error) {
            console.log(error)
            
        }
    }
}

module.exports = AdminController