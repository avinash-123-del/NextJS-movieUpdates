import loginDB from "@/libsLogin/loginDB"
import loginSchema from "@/modelLogin/loginSchema"
import { NextResponse } from "next/server"

 loginDB()

export  async function POST(request){

    try {
          const {email,password,confirmPassword} = await request.json()


    await loginSchema.create({email,password,confirmPassword})

    return NextResponse.json({messsage:'user registered'} , {status:200})

    } catch (error) {
        console.log('error registering the user' , error);
    }
  
}
