import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();
const controller = new ProductController();


const wrapAsync = (fn: Function) => {
  return (req: any, res: any, next: any) => {
    fn(req, res, next).catch(next);
  };
};


router.get('/', wrapAsync(controller.findAll)); 
router.get('/findById', wrapAsync(controller.findById)); 
router.post('/', wrapAsync(controller.create)); 
router.put('/:id', wrapAsync(controller.update)); 
router.delete('/:id', wrapAsync(controller.delete)); 

export default router;