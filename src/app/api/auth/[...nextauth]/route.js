import NextAuth from 'next-auth'

import { options } from '@/auth'

console.log(process.env.NEXTAUTH_URL)
const handler = NextAuth(options)
export { handler as GET, handler as POST }
