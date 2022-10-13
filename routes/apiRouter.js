const { Router } = require('express')
const router = new Router()
const apiController = require('../controller/apiController')

router.get('/users', apiController.getUsers)
router.get('/posts', apiController.getPosts)
router.post('/posts', apiController.addPost)
router.put('/post', apiController.updatePost)
router.delete('/post', apiController.deletePost)
router.post('/comment', apiController.addCommentsByPost)
router.put('/comment', apiController.putCommentsByPost)
router.delete('/comment', apiController.deleteCommentsByPost)
router.get('/comment/:post_id',  apiController.getCommentsByPost)


module.exports = router