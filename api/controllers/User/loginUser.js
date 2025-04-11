import { ValidationError } from 'sequelize'
import bcrypt from 'bcrypt'
import {User} from '../../models/index.js';
import jwt from 'jsonwebtoken'

export const loginUser = async(req,res) =>{
    try {
        let {nickname, password} = req.body;
        if (!nickname || !password) throw Error('Incomplete data to Log In')
        
        //I search for the user in the database
        const user = await User.findOne({where :{
            nickname
        }})
        if (!user) throw Error('User not found')

        //I decrypt and compare passwords
        const isCorrect = await bcrypt.compare(password, user.password);
        
        if (!isCorrect) throw Error('Password is incorrect')
        
        const token = jwt.sign({
            id:user.id,
            nickname:user.nickname},
            process.env.JWT_SECRET,
            {expiresIn: '8h'}
        )
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None', 
            maxAge: 8 * 60 * 60 * 1000
          });
        res.status(200).json({nickname:user.nickname});

    } catch (error) {

        
        if (error instanceof ValidationError) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: error.message || 'Something went wrong' });
        }
    }
}


export const logOut = async(req,res) =>{
    try {
        res.cookie('token', '', {
            httpOnly: true,
            secure: true,
            sameSite: 'None', 
            expires :  new Date(0) 
          });
        res.status(200).json({message:'Logout succefully'});

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}