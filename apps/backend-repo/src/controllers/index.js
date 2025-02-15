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
const firestore_1 = require("firebase/firestore");
const config_1 = require("../config");
const controller = {
    getUsers: (_, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const snapshot = yield (0, firestore_1.getDocs)(config_1.usersCollection);
            const data = snapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
            res.status(200).json({ data });
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }),
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { totalAverageWeightRatings, numberOfRents, recentlyActive } = req.body;
            const newUser = {
                totalAverageWeightRatings: +totalAverageWeightRatings,
                numberOfRents: +numberOfRents,
                recentlyActive: +recentlyActive,
            };
            const docRef = yield (0, firestore_1.addDoc)(config_1.usersCollection, newUser);
            res.status(201).json(Object.assign({ id: docRef.id }, newUser));
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { totalAverageWeightRatings, numberOfRents, recentlyActive } = req.body;
            const userRef = (0, firestore_1.doc)(config_1.db, "users", id);
            const updateData = {
                totalAverageWeightRatings: +totalAverageWeightRatings,
                numberOfRents: +numberOfRents,
                recentlyActive: +recentlyActive,
            };
            yield (0, firestore_1.updateDoc)(userRef, updateData);
            res.status(200).json({
                message: "Success update data",
                data: {
                    id,
                    data: updateData,
                },
            });
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }),
};
exports.default = controller;
