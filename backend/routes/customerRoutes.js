const express=require('express');
const router=express.Router();
const {getCustomers, transerMoney,getCustomersById ,setCustomer, updateCustomer, deleteCustomer, updateCashWithPassport, updateWithdrawalWithPassport, updateCustomerCash, updateCustomerCashWithdraw}=require('../controller/bankController');


router.route('/').get(getCustomers).post(setCustomer);
router.route('/Deposit').put(updateCashWithPassport);
router.route('/withdrawl').put(updateWithdrawalWithPassport);
router.route('/:id').delete(deleteCustomer).put(updateCustomer).get(getCustomersById);
router.route('/:id/cashDeposit').put(updateCustomerCash)
router.route('/:id/cashwithdraw').put(updateCustomerCashWithdraw)
router.route('/:id/trans').put(transerMoney)


// router.get('/', getCustomers);

// router.post('/', setCustomer);

// router.put('/:id', updateCustomer);

// router.delete('/:id',deleteCustomer);

module.exports=router;