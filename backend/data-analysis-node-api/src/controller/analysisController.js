import { fetchCoverageByVehicleSegment, fetchCoverageByFuelType } from '../service/analysisService.js';

// Controller for getting coverage by vehicle segment
export const getCoverageByVehicleSegment = async (req, res) => {
  try {
    const data = await fetchCoverageByVehicleSegment();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve coverage by vehicle segment' });
  }
};

// Controller for getting coverage by fuel type
export const getCoverageByFuelType = async (req, res) => {
  try {
    const data = await fetchCoverageByFuelType();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve coverage by fuel type' });
  }
};