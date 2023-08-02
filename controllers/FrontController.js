class FrontController {

          static home = async(req,res) => {
            try {
           res.render('home')
            } catch (error) {
            console.log(error)
            }
          }

          static about = async(req,res) => {
            try {
              res.render('about')
            } catch (error) {
            console.log(error)
            }
          }

          static contect = async(req,res) => {
            try {
              res.render('contect')
            } catch (error) {
            console.log(error)
            }
          }

          static login = async(req,res) => {
            try {
              res.render('login')
            } catch (error) {
            console.log(error)
            }
          }

          static grs  = async(req,res) => {
            try {
              res.render('grs')
            } catch (error) {
            console.log(error)
            }
          }

          static features  = async(req,res) => {
            try {
              res.render('features')
            } catch (error) {
            console.log(error)
            }
          }

          static benefits  = async(req,res) => {
            try {
              res.render('benefits')
            } catch (error) {
            console.log(error)
            }
          }

          static help  = async(req,res) => {
            try {
              res.render('help')
            } catch (error) {
            console.log(error)
            }
          }

          static studentlogin  = async(req,res) => {
            try {
              res.render('studentlogin')
            } catch (error) {
            console.log(error)
            }
          }

          static princilogin  = async(req,res) => {
            try {
              res.render('princilogin')
            } catch (error) {
            console.log(error)
            }
          
          }

          static adminlogin  = async(req,res) => {
            try {
              res.render('adminlogin')
            } catch (error) {
            console.log(error)
            }
          }
          
          static studentlogin  = async(req,res) => {
            try {
              res.render('studentlogin')
            } catch (error) {
            console.log(error)
            }
          }

          static princilogin  = async(req,res) => {
            try {
              res.render('princilogin')
            } catch (error) {
            console.log(error)
            }
          
          }

          static adminlogin  = async(req,res) => {
            try {
              res.render('adminlogin')
            } catch (error) {
            console.log(error)
            }
          }
          
          


 
}

module.exports=FrontController