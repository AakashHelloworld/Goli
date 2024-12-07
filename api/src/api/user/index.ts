import { Router } from 'express';
import { 
    handleAsyncRequest,
    APIError
 } from '../../lib/handle-async-request';
import Joi from 'joi';
import User from '../../models/user';
import {signToken} from '../../lib/tokenGenerator';

interface IUser{
    Username: string;
    PhoneNumber: number;
    Email: string;
    Role: string;
    Password: string;
    ConfirmPassword: string;
}




export class APIUser{
    static instance(){
        const router = Router();


        // Signup
        router.post('/signup', handleAsyncRequest(async(req)=>{
            // Validation using Joi
            console.log(req.body);    // undefined
            const schema = Joi.object<IUser>({
                Username: Joi.string().required(),
                Email: Joi.string().required(),
                Password: Joi.string().required().min(8),
                ConfirmPassword: Joi.string().required().min(8),

            });
            const signup = schema.validate(req.body);

            // If validation fails

            if (signup.error) {
              throw new APIError(400, signup.error.message);
            }

            // Check if password and confirm password are same

            if(signup.value.Password !== signup.value.ConfirmPassword){
                throw new APIError(400, "Password and Confirm Password must be same");
            }

            // Check if user already exist
            const userexist = await User.findOne({Email: signup.value.Email});

            // If user already exist

            if(userexist){
                throw new APIError(409, "User already exist");
            }

            // Create user

            const user = await User.create(signup.value);

            return {
                success: true,
                message: "User created successfully",
                data: {
                    _id: user._id,
                    Username: user.Username,
                    Email: user.Email,
                    Role: user.Role
                }
              };
        }) )


        // Login
        router.post('/login', handleAsyncRequest(async(req , res)=>{

            // Validation using Joi
            const schema = Joi.object<IUser>({
                Email: Joi.string().required(),
                Password: Joi.string().required().min(8),
            });

            const login = schema.validate(req.body);
            
            // If validation fails
            if (login.error) {
              throw new APIError(400, login.error.message);
            }
            
            // Check if user exist 
            const user = await User.findOne({Email: login.value.Email});

            // If user does not exist
            if(!user){
                throw new APIError(404, "User not found");
            }

            // Check if password is correct
            if(!await user.correctPassword(login.value.Password, user.Password)){
                throw new APIError(401, "Password is incorrect");
            }

            // Create token
            const token= signToken(user._id  as string);
            console.log(token);

            // Set cookie
            const cookieoption = {
                expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                secure: true,
                sameSite: 'none' as 'none',  // Explicitly cast sameSite to 'none'
            };
            
            res.cookie('jwt', token, cookieoption);

            return ({
                success: true,
                message: "User logged in successfully",
                data: {
                    _id: user._id,
                    Username: user.Username,
                    Email: user.Email,
                    Role: user.Role,
                    // token
            }
            })
        }))

        return router;
    }

}