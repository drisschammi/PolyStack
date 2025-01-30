import express from "express";
import { getCoverageByVehicleSegment, getCoverageByFuelType } from "../controller/analysisController.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

/**
 * @swagger
 * /api/v1/coverage/vehicle-segment:
 *   get:
 *     summary: Get coverage data by vehicle segment
 *     description: Retrieves insurance coverage data by vehicle segment.
 *     responses:
 *       200:
 *         description: Successful response with coverage data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   vehicle_segment:
 *                     type: string
 *                   bodily_injury_liability:
 *                     type: integer
 *                   personal_injury_protection:
 *                     type: integer
 *                   property_damage_liability:
 *                     type: integer
 *                   collision:
 *                     type: integer
 *                   comprehensive:
 *                     type: integer
 *       500:
 *         description: Internal server error
 */
router.get(
    "/coverage/vehicle-segment",
    asyncHandler(getCoverageByVehicleSegment)
);

/**
 * @swagger
 * /api/v1/coverage/fuel-type:
 *   get:
 *     summary: Get coverage data by fuel type
 *     description: Retrieves insurance coverage data based on fuel type.
 *     responses:
 *       200:
 *         description: Successful response with coverage data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   fuel:
 *                     type: string
 *                   bodily_injury_liability:
 *                     type: integer
 *                   personal_injury_protection:
 *                     type: integer
 *                   property_damage_liability:
 *                     type: integer
 *                   collision:
 *                     type: integer
 *                   comprehensive:
 *                     type: integer
 *       500:
 *         description: Internal server error
 */
router.get(
    "/coverage/fuel-type",
    asyncHandler(getCoverageByFuelType)
);

export default router;