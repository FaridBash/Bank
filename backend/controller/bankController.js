
const asyncHandler=require('express-async-handler')
const Customers=require('../model/customerModel')
//@desc Get customers
//@route GET /api/customers
//@access Private
const getCustomers=asyncHandler( async (req, res)=>{
    const customers=await Customers.find();
    res.status(200).json(customers);
})

//@desc Set Customer
//@route POST /api/Customer
//@access Private
const setCustomer=asyncHandler( async (req, res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Please add ID');
    }
    const customer=await Customers.create({
        passportID: req.body.passportID,
        customerName: req.body.customerName,
        cash: req.body.cash,
        credit: req.body.credit,
    })

    res.status(200).json(customer);

})

//@desc Update Customer
//@route PUT /api/customers/:id
//@access Private
const updateCustomer=asyncHandler( async (req, res)=>{
   console.log(req.body);

    const customer=await Customers.findById(req.params.id);
    if(customer){
        const updatedCustomer=await Customers.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
    
        res.status(200).json(updatedCustomer)
    }else{
        if(!customer){
            res.status(400)
            throw new Error('Customer NOT FOUND');
        }
    }

})

//@desc Delete Customer
//@route DELETE /api/customers/:id
//@access Private
const deleteCustomer= asyncHandler(async (req, res)=>{
  

    const customer=await Customers.findById(req.params.id);
    if(customer){
        await Customers.findByIdAndRemove(req.params.id);
        res.status(200).json({id: req.params.id})
    }else if(!customer){
        res.status(400)
            throw new Error('Customer NOT FOUND');
    }
   
})


module.exports={
    getCustomers,
    setCustomer,
    updateCustomer,
    deleteCustomer,
}