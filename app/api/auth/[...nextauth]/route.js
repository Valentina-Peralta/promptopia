import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@/utils/database';
import User from '@/models/user';

//authentication handler, it uses the 'NextAuth' function to configure an authentication instance
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();
                //chek if a usear already exists
                const userExists = await User.findOne({
                    email: profile.email
                })
                //if not, create a new one
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }

})

export { handler as GET, handler as POST }

/*
You can't sign in to this app because it doesn't comply with Google's OAuth 2.0 policy.

If you're the app developer, register the redirect URI in the Google Cloud Console.
Request details: response_type=code redirect_uri=http://localhost:3000/api/auth/callback/google state=nD2-zUBAPwuPEtfQenAYor7QGkGyhMvHui74K_38eUc code_challenge_method=S256 client_id=1002478930999-vu17svn1b4ueq8ihde4bqdo3m8euo1lv.apps.googleusercontent.com code_challenge=IgnL2JNiBa_ewmqn3QZUJ-Seqr6Vosh4kNt4zZiWQzU access_type=online scope=openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile
Related developer documentation
*/