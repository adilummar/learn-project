import express from 'express'
import { testMessage } from '../controllers/user.controller.js';

const router = express.Router()

router.get('/test',testMessage)

export default router;