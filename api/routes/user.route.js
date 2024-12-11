import express from 'express';

const router = express.Router();

router.get('/test2', (req, res) => {
    res.json({ message  : 'API is working on route file!!'})
})

export default router;
