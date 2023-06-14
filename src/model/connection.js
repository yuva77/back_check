const mongoose = require("mongoose")

const BookingSchema = mongoose.Schema(
    {
        DatastorageID:{ type: String },
        PIID:{ type: String },
        Estimatedcoverage:{ type: String},
        Species:{ type: String},
        Ecotype:{ type: String},
        Origincountry:{ type: String},
        Origincity:{ type: String},
        Collectionyear:{ type: String},
        Improvementstatus:{ type: String},
        Maturity_group:{ type: String},
        Dataresource:{ type: String}
    }
)

let collection = {};

// const InfyAirlinesDBURL = "mongodb://localhost:27017/InfyAirlinesDB";
const InfyAirlinesDBURL = "mongodb+srv://yuvarocks100:TEja@777@cluster0.mll1lg8.mongodb.net/test1"

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

collection.getCustomerCollection = async () => {
    try {
        let database = await mongoose.connect(InfyAirlinesDBURL,connectionOptions);
        let customerModel = await database.model('seeds',BookingSchema );
        return customerModel;
    } catch (error) {
        // let err = new Error("Could not connect to Database");
        // err.status = 500;
        // throw err;
        console.log("failed connection connection")
    }
}

module.exports = collection;