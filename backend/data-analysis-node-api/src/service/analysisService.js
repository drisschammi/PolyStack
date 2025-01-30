import * as coverageRepository from '../repository/repository.js';

// Service to fetch coverage by vehicle segment
export const fetchCoverageByVehicleSegment = async () => {
    const data = await coverageRepository.getCoverageByVehicleSegment();
    return data;
};

// Service to fetch coverage by fuel type
export const fetchCoverageByFuelType = async () => {
    const data = await coverageRepository.getCoverageByFuelType();
    return data;
};
