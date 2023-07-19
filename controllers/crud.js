 const conexion = require('../database')


 exports.save = (req, res)=>{
     const user_email = req.body.user_email;
     const user_password = req.body.user_password;
     conexion.query('INSERT INTO user_login SET ?',{user_email:user_email, user_password:user_password}, (error, result)=>{
        if (error) {
            console.log(error)
        }else{
            res.redirect('/');
        }
 })
}

exports.update = (req, res)=>{
    const user_id = req.body.user_id;
    const user_email = req.body.user_email;
    const user_password= req.body.user_password;
    conexion.query('UPDATE user_login SET ? WHERE user_id= ?', [{user_email:user_email, user_password:user_password}, user_id], (error, result)=>{
        if (error) {
            console.log(error)
        }else{
            res.redirect('/');
        }
    })

}