import {Schema,model, models} from "mongoose";

const ServiceSchema= new Schema({
    titre:String,
    description:String,
    images:Array
    
});

const Service = models.Service || model("Service",ServiceSchema);

export default Service;