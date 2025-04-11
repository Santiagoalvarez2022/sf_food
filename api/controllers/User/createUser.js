import User from "../../models/User.js"
import { ValidationError, UniqueConstraintError } from 'sequelize'
import bcrypt from 'bcrypt'

//create user  
export const createUser = async(req, res) =>{
    try {
        let {nickname, password} = req.body;
        
        // Validate input data
        if (!nickname || !password) throw Error('Incomplete data to create users')
        if (password.length < 8)  throw Error('Password must be at least 8 characters')

        const saltRounds = 10;
        password  = await bcrypt.hash(password,saltRounds)

        // Create user in the database
        const newUser = await User.create({nickname,password})
        //STATUS 201 = Created 
        res.status(201).json('User created successfully');

    } catch (error) {
        // Handle unique constraint error (e.g. duplicate nickname)
        if (error instanceof UniqueConstraintError) {
          res.status(409).json({ error: 'Nickname is already in use. Please choose another.' });

        // Handle Sequelize validation errors
        } else if (error instanceof ValidationError) {
          res.status(400).json({ error: error.message });

        // Handle other unknown errors
        } else {
          res.status(400).json({ error: error.message || 'Something went wrong' });
        }
      }
}

