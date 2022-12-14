"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from 'swr'

export const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) => fetch(input, init).then(res => res.json())

export default function Logout() {

    const router = useRouter()

    const { data, isLoading, error } = useSWR("/api/protected", fetcher)

    const logout = () => {
        console.log("Signing out ")
        signOut({ redirect: false }).then(() => router.push("/login"))
    }

    return (<>
        <button onClick={logout}>
            Log out
        </button>
        {isLoading && "Loading..."}
        {data && data.message}
        {error && error.message}
    </>
    )
}