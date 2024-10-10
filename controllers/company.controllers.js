import{ company } from "../models/company.model.js"; 
export const registercompany = async (req,res) => {
    try {
        const {companyName} = req.body;
    if(!companyName){
        return res.status(400).json({
            message:"Company name is required",
            success:"false"
        });
    }
    let Company = await company.findOne({name:companyName})
    } catch (error) {
        console.log(error);
    }
}
