import { NextResponse } from "next/server";

export async function GET() {

    try {

        const response = NextResponse.json(
            {
                message: 'logout sucessfull'
                , success: true
            }
        )

        //now reponse will interact with token and make token empty

        response.cookies.set("token", "", { httpOnly: true })
        //also we can provide expires:new Date(0)
        return response

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 })
    }
}