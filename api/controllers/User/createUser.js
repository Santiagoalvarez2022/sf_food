import User from "../../models/User.js"


//create user 
export const CreateUser = async(req, res) =>{
    console.log("llego", req.body);
    
    try {
        const {nickname, password} = req.body;
        console.log(password.length);
        
        //data validation
        if (!nickname || !password) throw Error('Incomplete data to create users')
        if (password.length !== 8)  throw Error('Password must be at least 8 characters')
        const newUser = await User.create({nickname,password})
        //STATUS 201 = Created 
        res.status(201).json(newUser);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

