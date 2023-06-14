const connection = require('./connection');

let InfyAirlinesDB = {}





InfyAirlinesDB.checkCustomer = async (arr) => {
    
    let customerModel = await connection.getCustomerCollection();
    let obj = [];
    for (var i = 0; i < arr.length; i++) {
        let customerData = await customerModel.findOne({$or : [{ PIID: arr[i] },{DatastorageID:arr[i]}]}, { _id: 0 });
        if(customerData){
            obj.push(customerData)
        }
      }

    console.log("customerdata");
    console.log(obj)
    return obj

}



module.exports = InfyAirlinesDB;


