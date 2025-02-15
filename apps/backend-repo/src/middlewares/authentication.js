"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function authentication(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.cookies["ebuddy_recruitment"];
            if (!token)
                throw new Error("unauthenticated");
            const response = yield fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAit_BWmuTFJ3dns_yKh727nVSmcq3l0-U`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idToken: token }),
            });
            if (!response.ok) {
                throw new Error("unauthenticated");
            }
            next();
        }
        catch (error) {
            if (error instanceof Error && error.message === "unauthenticated") {
                res.status(401).json({ message: "Unauthenticated" });
            }
            else {
                res.status(500).json({ message: "Internal Server Error" });
            }
        }
    });
}
exports.default = authentication;
