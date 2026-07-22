import bcrypt from "bcrypt";
export const registerUser = async(req,res)=>{
    try{
        // const{
        //     name,
        //     email,
        //     pasword:hashedpassword,
        //     role
        //     //whole reg data comes from req.body
        // } = req.body;
        const exsitingUser = await UserActivation.findOne({
            email
        });
        if (exsitingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        const hashedpassword = await bcrypt.hash(
            password,
            10
        );
        res.status(201).json({
            success:true,
            meaasage:"User Registered successfuly",
        })
        const user = await User.create({
            name,
            email,
            pasword:hashedpassword,
            role
        });

    }catch(error){
        console.log(error) 
    }
}