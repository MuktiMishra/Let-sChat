import type { NextFunction, Request, Response } from "express";
import type { Document, Types } from "mongoose";
interface IUser extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
}
export interface AuthenticatedRequest extends Request {
    user?: IUser | null;
}
export declare const isAuth: (req: AuthenticatedRequest, res: Response, next: NextFunction) => Promise<void>;
export default isAuth;
//# sourceMappingURL=isAuth.d.ts.map