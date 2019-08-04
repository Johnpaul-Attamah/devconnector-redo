import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({message: 'testing user route'});
});


export default router;