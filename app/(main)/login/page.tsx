"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Login() {

    const router = useRouter()

    const login = () => {
        console.log("Signing in ")
        signIn("credentials", { username: "username", password: "password", redirect: false }).then(() => router.push("/logout"))
    }

    return (<>
        <button onClick={login}>
            Log in
        </button>
    </>
    )
}