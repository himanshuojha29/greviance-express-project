const express = require("express");
const FrontController = require("../controllers/FrontController");
const TeacherController = require("../controllers/TeacherController");
const AdminController = require("../controllers/Admin/AdminController");
const StudentController = require("../controllers/Admin/StudentController");
const route = express.Router();

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
route.get('/admin/dashboard',AdminController.dashboard)
route.get('/admin/login',AdminController.login)
route.get('/admin/register',AdminController.register)
route.post('/admininsert',AdminController.admininsert)

// Admin Student controller

route.get('/admin/addstudent',StudentController.addstudent)

module.exports  = route;
