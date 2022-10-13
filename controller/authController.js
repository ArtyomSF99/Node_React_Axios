const db = require('../db')


class AuthController {
    async registration (req, res) {
        try{
            const email = req.body.email
            const password = req.body.password
            const sql = "INSERT INTO users(email, password) VALUES(?,?)"
            const user = db.query(sql, [email, password], (err, results) =>{
                if(err){
                    console.log(err)
                }
                else {
                    
                    res.send(user._rows[0])
                }
            })


        } catch(e) {
           console.log(e)
        }
    }
    async login (req, res) {
        try{
            const email = req.body.email
            const password = req.body.password
            await db.query("SELECT * FROM users WHERE email =?", [email], (err, results) =>{
                if(err){
                    console.log(err)
                }
               if(results.length === 0){
                res.send('Пользователя с таким email не существует')
               }
               else{
                if(results[0].password === password){
                    results[0].isAuth = true
                    res.send(results[0])
                }
                else{
                    res.send('Неправильный пароль')
                }
               }
            }
            
            )
            
            
            
        }
        catch (e){
        
        }
    }
    

  

    

}

module.exports = new AuthController()

