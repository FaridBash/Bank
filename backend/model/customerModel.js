const mongoose=require('mongoose');
const { boolean } = require('yargs');

const customerSchema=mongoose.Schema({
    passportID: {
        type: String,
        required:[true, 'Please Enter passportID']
    },
    customerName: {
        type: String,
        required:[true, 'Please Enter Customer Name']
    },
    cash: {
        type: Number,
        required:[true, 'Please enter amount']
    },
    credit: {
        type: Number,
        required:[true, 'Please enter credit']
    },
    
},
 {
    timestamps: true,
});

module.exports=mongoose.model('Customer', customerSchema);