const express = require("express");
const FrontController = require("../controllers/FrontController");
const TeacherController = require("../controllers/TeacherController");
const AdminController = require("../controllers/Admin/AdminController");
const StudentController = require("../controllers/Admin/StudentController");
const route = express.Router();
const checkauth = require('../middlewear/auth');

// routing
route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/contect',FrontController.contect)
route.get('/login',FrontController.login)
route.get('/features',FrontController.features)
route.get('/benefits',FrontController.benefits)
route.get('/help',FrontController.help)
route.get('/grs',FrontController.grs)
route.get('/adminlogin',FrontController.adminlogin)
route.get('/princilogin',FrontController.princilogin)
route.get('/studentlogin',FrontController.studentlogin)
route.get('/adminlogin',FrontController.adminlogin)
route.get('/princilogin',FrontController.princilogin)
route.get('/studentlogin',FrontController.studentlogin)



// teacher controller
 route.get('/teacher/display', TeacherController.displayTeacher)

//  admincontroller

route.get('/dashboard',checkauth,AdminController.dashboard)
route.get('/admin/login',AdminController.login)
route.get('/admin/register',AdminController.register)
route.post('/admininsert',AdminController.admininsert)
route.post('/admin/verifylogin',AdminController.verifylogin)

// Admin Student controller

route.get('/admin/addstudent',StudentController.addstudent)
route.post('/studentinsert',StudentController.studentinsert)
route.get('/admin/studentview/:id',StudentController.viewstudent)
route.get('/admin/studentedit/:id',StudentController.editstudent)
route.post('/admin/studentupdate/:id',StudentController.updatestudent)
route.get('/admin/studentdelete/:id',StudentController.deletestudent)
route.post('/verifylogin',StudentController.verifylogin)
route.get('/logout',StudentController.logout)



module.exports  = route;
