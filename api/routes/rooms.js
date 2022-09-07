import express from "express";
import {
  createRoom,
  deleteRoom,
  getHRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../util/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GETALL
router.get("/", getHRooms);

export default router;
