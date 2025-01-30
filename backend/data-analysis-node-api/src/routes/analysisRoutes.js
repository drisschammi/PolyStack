import express from "express";
import { getCoverageByVehicleSegment, getCoverageByFuelType } from "../controller/analysisController.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.get(
    "/coverage/vehicle-segment",
    asyncHandler(getCoverageByVehicleSegment)
);

router.get(
    "/coverage/fuel-type",
    asyncHandler(getCoverageByFuelType)
);

export default router;