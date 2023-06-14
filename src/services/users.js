const InfyAirlinesServ = {}
const InfyAirlinesDB = require('../model/users');


const throwError = (errorMessage, statusCode) => {
    let err = new Error(errorMessage);
    err.status = statusCode;
    throw err;
}



InfyAirlinesServ.updateBooking = async(arr) =>{
    let customerData = await InfyAirlinesDB.checkCustomer(arr);
    if(!customerData){
        throwError("Customer not registered. Register to proceed", 404);

    }
    else{
        return customerData;
    }

}
module.exports = InfyAirlinesServ;