import { Response, Request } from "express";

export const GetUser = (req: Request, res: Response) => {
    try {
        console.log('get user')
        res.send("true")
    } catch (e) {
        console.log(e)
    }
}