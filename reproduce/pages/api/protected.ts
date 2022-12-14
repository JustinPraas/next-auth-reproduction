import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    
    const session = await unstable_getServerSession(req, res, authOptions)

    switch (req.method) {
        case "GET":
            res.json({message: "I'm some data"})

    }
}