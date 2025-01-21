import { NextResponse } from 'next/server'
 
export async function GET(request) {
   const loginUserToken = request.headers;
console.log(loginUserToken);

  return NextResponse.json({ Result: "hello"},{status:200})
}
