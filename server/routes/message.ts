import {Router} from 'express';

import {createMessage, getMessages} from '../controllers/message';

const router = Router();

router.get('/', getMessages);
router.post('/', createMessage);

export default router;