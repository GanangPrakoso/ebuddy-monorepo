import { Request, Response } from "express";
import { getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { usersCollection, db } from "../config";

interface User {
  totalAverageWeightRatings: number;
  numberOfRents: number;
  recentlyActive: number;
}

const controller = {
  getUsers: async (_: Request, res: Response): Promise<void> => {
    try {
      const snapshot = await getDocs(usersCollection);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  createUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const { totalAverageWeightRatings, numberOfRents, recentlyActive } =
        req.body;

      const newUser: User = {
        totalAverageWeightRatings: +totalAverageWeightRatings,
        numberOfRents: +numberOfRents,
        recentlyActive: +recentlyActive,
      };

      const docRef = await addDoc(usersCollection, newUser);

      res.status(201).json({ id: docRef.id, ...newUser });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  updateUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { totalAverageWeightRatings, numberOfRents, recentlyActive } =
        req.body;

      const userRef = doc(db, "users", id);

      const updateData: Partial<User> = {
        totalAverageWeightRatings: +totalAverageWeightRatings,
        numberOfRents: +numberOfRents,
        recentlyActive: +recentlyActive,
      };

      await updateDoc(userRef, updateData);

      res.status(200).json({
        message: "Success update data",
        data: {
          id,
          data: updateData,
        },
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default controller;
