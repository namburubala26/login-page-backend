const User = require('../models/user');
function isstringinvalid(string){
    if(string == undefined || string.length === 0){
        return true
    } else {
        return false
    }
}
const signup = async (req,res) => {
    try{
    const {name, phno, email, password} = req.body;
    if(isstringinvalid(phno) || isstringinvalid(email) || isstringinvalid(password)){
        return res.status(400).json({err:'Bad Parameters. Something is missing'})
    }
    await User.create({nmae, phno,email,pasword })
            res.status(201).json({message:'Successfuly create new user'})
}catch(err)  {
            res.status(500).json(err);
        }
}

const login = async (req,res) => {
    try{
    const { email, password } = req.body;
    if(isstringinvalid(email) || isstringinvalid(password)){
        return res.status(400).json({success:false, message:"Email id or password is missing"})
    }
    console.log(password);
    const user = await User.findAll({where: { email }})
        if(user.length > 0){
            if(user[0].password === password){
                res.status(200).json({success:true, message:"User logged in successfully"})
            } else {
                return res.status(400).json({success:false, message:"Password is incorrect"})
            }
        } else {
            res.status(404).json({success:false, message:"User Doesnot exist"})
        }
    } catch(err){
        res.status(500).json({message:err,success:false})
    }
}