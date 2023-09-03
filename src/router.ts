import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';

export const router = Router();


router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/products', listProducts);

router.post('/products', createProduct);

router.post('/categories/:categoryId/products', (req,res) => {
    res.send('OK');
});

router.get('/orders', (req,res) => {
    res.send('OK');
});

router.patch('/orders/:orderId', (req,res) => {
    res.send('OK');
});

router.delete('/orders/:orderId', (req,res) => {
    res.send('OK');
});
