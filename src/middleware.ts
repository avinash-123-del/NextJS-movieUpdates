import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  
    const path = request.nextUrl.pathname

    //user who is having tokens will not face login and signup page as they are already in
    //for public user (not having tokens)

    const isPublicPath  = path === '/' || path ==='/signup'

    //now get the token 
    
    const token  = request.cookies.get('token')?.value || ''      //if token is available i want to get its value

    if(isPublicPath && token){
        //return NextResponse.redirect('/')                   // this will also work
        return NextResponse.redirect(new URL('/movies/home' , request.nextUrl))                   

    }

    if(!isPublicPath && !token){
        //return NextResponse.redirect('/')                   // this will also work
        return NextResponse.redirect(new URL('/' , request.nextUrl))                   
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',    
        '/movies/about',
        '/movies/movie',
        '/movies/movie/:path*',
        '/movies/home',
        '/movies/contact',
        '/signup',
    ],
  }

