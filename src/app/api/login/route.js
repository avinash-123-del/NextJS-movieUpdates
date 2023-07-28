import loginDB from "@/libsLogin/loginDB"
import loginSchema from "@/modelLogin/loginSchema"
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(request) {
    try {
        await loginDB()

        const { email, password } = await request.json()

        //check if user exist

        const user = await loginSchema.findOne({ email })

        if (!user) {
            return {
                status: 404,
                body: {
                    message: "User not found"
                }
            }
        }

        // if(user.email && user.password){
        //     return{
        //         status: 200,
        //         body: {
        //             message: "User not found"
        //         }
        // }}


        console.log("user data", user.password);

        // if(!user.email || !user.password){
        //     return{
        //         status: 503,
        //         body: {
        //             message: "Invalid email or password"
        //         }
        // }}


        //check if password is correct

        const validPassword = await bcryptjs.compare(password, user.password)

        // if password is incorrect

        if (!validPassword) {
            return {
                status: 500,
                body: {
                    message: "User not found"
                }
            }
        }

        //create token data
        const tokenData = {
            id: user._id,
            email: user.email
        }

        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET)

        //token created but not saved in the user cookies 

        const response = NextResponse.json({
            message: 'login sucessfull',
            sucsess: true
        })

        response.cookies.set('token', token, {
            httpOnly: true,

        })

        return response



    } catch (error) {
        console.log('error finding the user', error);

    }
}