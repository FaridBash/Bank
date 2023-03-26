const express=require('express');
const router=express.Router();
const {getCustomers,getCustomersById ,setCustomer, updateCustomer, deleteCustomer, updateCustomerCash, updateCustomerCashWithdraw}=require('../controller/bankController');


router.route('/').get(getCustomers).post(setCustomer);
router.route('/:id').delete(deleteCustomer).put(updateCustomer).get(getCustomersById);
router.route('/:id/cashDeposit').put(updateCustomerCash)
router.route('/:id/cashwithdraw').put(updateCustomerCashWithdraw)


// router.get('/', getCustomers);

// router.post('/', setCustomer);

// router.put('/:id', updateCustomer);

// router.delete('/:id',deleteCustomer);

module.exports=router;