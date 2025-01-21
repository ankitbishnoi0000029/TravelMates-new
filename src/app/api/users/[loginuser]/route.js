import { NextResponse } from 'next/server'
 
export async function GET(request) {
   const loginUserToken = request.headers.get("Authorization");
console.log(loginUserToken);

  return NextResponse.json({ Result: loginUserToken},{status:200})
}
