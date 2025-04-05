import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();
const controller = new ProductController();

router.get('/', controller.findAll.bind(controller));
router.get('/findById', controller.findById.bind(controller)); //inge con este es el de query params y lo probe en postman y si dio 
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));   //igual este lo probe con postman que en frontend no pedia opcion para actualizar
router.delete('/:id', controller.delete.bind(controller));

export default router;