
const asyncHandler=require('express-async-handler')
const Customers=require('../model/customerModel')
//@desc Get customers
//@route GET /api/customers
//@access Private
const getCustomers=asyncHandler( async (req, res)=>{
    const customers=await Customers.find();
    res.status(200).json(customers);
})
const getCustomersById=asyncHandler( async (req, res)=>{
    const customer=await Customers.findById(req.params.id);
    res.status(200).json(customer);
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

//@desc Update CustomerCash
//@route PUT /api/customers/:id/cash
//@access Private
const updateCustomerCash=asyncHandler( async (req, res)=>{
    // console.log('req.body.cash',req.body.cash);
    
    const customer=await Customers.findById(req.params.id);
    if(customer){
        console.log('req.body.cash',req.body.cash);
        console.log('customer.cash',customer.cash);
        const totAfterDeposit=Number(customer.cash)+Number(req.body.cash);
        console.log('totAfterDeposit',totAfterDeposit);
        const updatedCustomerCash=await Customers.findByIdAndUpdate(req.params.id, {cash: totAfterDeposit}, {
            new: true,
        });
    
        res.status(200).json(updatedCustomerCash)
    }else if(!customer){
        res.status(400)
            throw new Error('Customer NOT FOUND');
    }
})
//@desc Update CustomerCash
//@route PUT /api/customers/:id/cashwithdraw
//@access Private
const updateCustomerCashWithdraw=asyncHandler( async (req, res)=>{
    
    const customer=await Customers.findById(req.params.id);
    if(customer){
        console.log('req.body.cash',req.body.cash);
        console.log('customer.cash',customer.cash);
        const totAferWithdraw=Number(customer.cash)-Number(req.body.cash);
        console.log('totAfterDeposit',totAferWithdraw);
        const updatedCustomerCashWithdraw=await Customers.findByIdAndUpdate(req.params.id, {cash: totAferWithdraw}, {
            new: true,
        });
    
        res.status(200).json(updatedCustomerCashWithdraw)
    }else{
        if(!customer){
            res.status(400)
            throw new Error('Customer NOT FOUND');
        }
    }
})
const updateCashWithPassport=asyncHandler( async (req, res)=>{
    
    const customer=await Customers.find({passportID: req.body.passportID});
    console.log(customer);
    console.log("customer.cash",customer[0].cash);
    if(customer[0]){
        console.log('req.body.cash',req.body.cash);
        console.log('customer.cash',customer[0].cash);
        const totAferUpdate=Number(customer[0].cash)+Number(req.body.cash);
        console.log('totAfterDeposit',totAferUpdate);
        const updatedCustomerCashUpdate=await Customers.findOneAndUpdate({passportID: req.body.passportID}, {cash: totAferUpdate}, {
            new: true,
        });
    
        res.status(200).json(updatedCustomerCashUpdate)
    }else{
        if(!customer){
            res.status(400)
            throw new Error('Customer NOT FOUND');
        }
    }
})
const updateWithdrawalWithPassport=asyncHandler( async (req, res)=>{
    
    const customer=await Customers.find({passportID: req.body.passportID});
    console.log(customer);
    console.log("customer.cash",customer[0].cash);
    if(customer[0]){
        console.log('req.body.cash',req.body.cash);
        console.log('customer.cash',customer[0].cash);
        const totAferUpdate=Number(customer[0].cash)-Number(req.body.cash);
        console.log('totAfterDeposit',totAferUpdate);
        const updatedCustomerCashUpdate=await Customers.findOneAndUpdate({passportID: req.body.passportID}, {cash: totAferUpdate}, {
            new: true,
        });
    
        res.status(200).json(updatedCustomerCashUpdate)
    }else{
        if(!customer){
            res.status(400)
            throw new Error('Customer NOT FOUND');
        }
    }
})


const transerMoney=asyncHandler( async (req, res)=>{

    const originCustomer=await Customers.findById(req.params.id);
    const amountToTrans=Number(req.body.cash);
    if(originCustomer){
        const customerToTransTo=await Customers.find({passportID: req.body.passportID});
        if(customerToTransTo[0]){
            const totalAfterTrans=Number(customerToTransTo[0].cash)+amountToTrans;
            const updatedCustomer2Cash=await Customers.findOneAndUpdate({passportID: req.body.passportID}, {cash: totalAfterTrans}, {
                new: true,
            });
           
            const originUpdatedCash=Number(originCustomer.cash)-Number(req.body.cash);
            const updatedOriginCustomerCash=await Customers.findByIdAndUpdate(req.params.id, {cash: originUpdatedCash}, {
                new: true,
            });
            console.log('totalAfterTrans',totalAfterTrans, 'customerToTransTo[0]', customerToTransTo[0]);
            console.log('originUpdatedCash',originUpdatedCash, 'originCustomer', originCustomer);
            res.status(200).json(updatedOriginCustomerCash)
        }else if(!customerToTransTo[0]){
            res.status(400)
                throw new Error('Customer NOT FOUND');
        }
    }else if(!originCustomer){
        res.status(400)
            throw new Error('Customer NOT FOUND');
    }


})

//@desc Delete Customer
//@route DELETE /api/customers/:id/cash
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
    updateCustomerCash,
    getCustomersById,
    updateCustomerCashWithdraw,
    updateCashWithPassport,
    updateWithdrawalWithPassport,
    transerMoney,
}