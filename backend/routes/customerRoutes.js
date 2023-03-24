const express=require('express');
const router=express.Router();
const {getCustomers, setCustomer, updateCustomer, deleteCustomer}=require('../controller/bankController');


router.route('/').get(getCustomers).post(setCustomer);
router.route('/:id').delete(deleteCustomer).put(updateCustomer);


// router.get('/', getCustomers);

// router.post('/', setCustomer);

// router.put('/:id', updateCustomer);

// router.delete('/:id',deleteCustomer);

module.exports=router;