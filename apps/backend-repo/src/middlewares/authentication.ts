import { Request, Response, NextFunction } from "express";

async function authentication(req: Request, res: Response, next: NextFunction) {
  try {
    const token: string | undefined = req.cookies["ebuddy_recruitment"];
    if (!token) throw new Error("unauthenticated");

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAit_BWmuTFJ3dns_yKh727nVSmcq3l0-U`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: token }),
      }
    );

    if (!response.ok) {
      throw new Error("unauthenticated");
    }

    next();
  } catch (error) {
    if (error instanceof Error && error.message === "unauthenticated") {
      res.status(401).json({ message: "Unauthenticated" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default authentication;
