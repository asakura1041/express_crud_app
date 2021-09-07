import Express from "express";
import usersController from '../controllers/usersController'

const router = Express.Router()

router.get('/', usersController.index, usersController.indexView)
router.get('/new', usersController.new)
router.post('/create', usersController.create, usersController.redirectView)
router.get('/:id/edit', usersController.edit, usersController.editView)
router.put('/:id/update', usersController.update, usersController.redirectView)
router.delete('/:id/delete', usersController.delete, usersController.redirectView)

export default router