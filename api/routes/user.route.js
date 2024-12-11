import express from 'express';
import {test} from '../Controllers/user.controller.js'; // think to add .js

const router = express.Router();

router.get('/test2', test);

export default router;
