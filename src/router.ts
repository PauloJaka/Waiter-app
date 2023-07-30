import { Router } from 'express';

export const router = Router();


router.get('/categories', (req,res) => {
    res.send('OK');
});
