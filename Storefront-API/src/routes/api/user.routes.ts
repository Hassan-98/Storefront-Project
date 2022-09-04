import { Router } from 'express';
import * as controller from '../../controllers/user.controller';
import { requireAuth } from '../../middlewares/auth.middleware';

const router: Router = Router();

// GET: all users
router.get('/', requireAuth, controller.getUsers);

// GET: get current user
router.get('/current', requireAuth, controller.getCurrentUser);

// GET: user by id
router.get('/:id', requireAuth, controller.getUserById);

// POST: authenticate user
router.post('/authenticate', controller.authenticateUser);

// POST: create a user
router.post('/create', controller.createUser);

// DELETE: user by id
router.delete('/:id', requireAuth, controller.deleteUser);

export default router;
