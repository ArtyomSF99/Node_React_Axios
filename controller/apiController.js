const db = require('../db')

class apiController{

async getUsers (req, res){
    try{
       db.query('SELECT * FROM users', (err, results) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(results)
        }
       })
    }catch(e){
     
    }
} 
async addPost (req, res){
    try{
        const user_id = req.body.user_id
        const post = req.body.post
        const sql = "INSERT INTO posts(user_id, post) VALUES(?,?)"
        const user = db.query(sql, [user_id, post], (err, results) =>{
            if(err){
                console.log(err)
            }
            else {
                
                res.send(results)
            }
        })
   
    } catch(e){
        
    }
    
}
async updatePost (req, res){
    try{
        const post_id = req.body.post_id
        const newPost = req.body.newPost
        db.query("UPDATE posts SET post=? WHERE id=?", [newPost,post_id], (err, results)=>{
            if(err){
                console.log(err)
            }
            else(
                res.send("Пост был изменен")
            )
        })
    } catch(e){
        
    }
    
}
async deletePost (req, res){
    try{
     const post_id = req.body.post_id
   
     db.query("DELETE FROM posts WHERE id=?", [post_id], (err, results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Пост был удален")
        }
     })
   
    } catch(e){
        
    }
    
}
async getPosts (req, res){
    try{
     db.query("SELECT * FROM posts", (err, results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(results)
        }
     })
   
    } catch(e){
        
    }
    
}

async addCommentsByPost (req, res){
    try{
        const post_id = req.body.post_id
        const comment = req.body.comment
        const sql = "INSERT INTO comments(post_id, comment) VALUES(?,?)"
        const user = db.query(sql, [post_id, comment], (err, results) =>{
            if(err){
                console.log(err)
            }
            else {
                
                res.send(user._rows[0])
            }
        })
    } catch(e){
        console.log(e)
    }
    
}
async putCommentsByPost (req, res){
    try{
        const comment_id = req.body.comment_id
        const newComment = req.body.newComment
        db.query("UPDATE comments SET comment=? WHERE id=?", [newComment, comment_id], (err, results)=>{
            if(err){
                console.log(err)
            }
            else(
                res.send("Комментарий был изменен")
            )
        })
    } catch(e){
        console.log(e)
    }
    
}
async deleteCommentsByPost (req, res){
    try{
        const comment_id = req.body.comment_id

        db.query("DELETE FROM comments WHERE id=?", [comment_id], (err, results)=>{
           if(err){
               console.log(err)
           }
           else{
               res.send("Комментарий был удален")
           }
        })
    } catch(e){
        console.log(e)
    }
    
}
async getCommentsByPost (req, res){
    try{
       const post_id = req.params['post_id']
       db.query('SELECT * FROM comments WHERE post_id=?',[post_id], (err, results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(results)
        }
       })
    } catch(e){
        console.log(e)
    }
    
}

}


module.exports = new apiController()
