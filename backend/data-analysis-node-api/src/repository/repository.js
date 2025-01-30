import pool from '../config/db.js';

// Repository function to fetch coverage by vehicle segment
export const getCoverageByVehicleSegment = async () => {
    const query = `
    SELECT 
      vehicle_segment, 
      SUM(CASE WHEN bodily_injury_liability THEN 1 ELSE 0 END) AS bodily_injury_liability, 
      SUM(CASE WHEN personal_injury_protection THEN 1 ELSE 0 END) AS personal_injury_protection, 
      SUM(CASE WHEN property_damage_liability THEN 1 ELSE 0 END) AS property_damage_liability, 
      SUM(CASE WHEN collision THEN 1 ELSE 0 END) AS collision, 
      SUM(CASE WHEN comprehensive THEN 1 ELSE 0 END) AS comprehensive 
    FROM policy
    GROUP BY vehicle_segment;
  `;
    const { rows } = await pool.query(query);
    return rows;
};

// Repository function to fetch coverage by fuel type
export const getCoverageByFuelType = async () => {
    const query = `
    SELECT 
      fuel, 
      SUM(CASE WHEN bodily_injury_liability THEN 1 ELSE 0 END) AS bodily_injury_liability, 
      SUM(CASE WHEN personal_injury_protection THEN 1 ELSE 0 END) AS personal_injury_protection, 
      SUM(CASE WHEN property_damage_liability THEN 1 ELSE 0 END) AS property_damage_liability, 
      SUM(CASE WHEN collision THEN 1 ELSE 0 END) AS collision, 
      SUM(CASE WHEN comprehensive THEN 1 ELSE 0 END) AS comprehensive 
    FROM policy
    GROUP BY fuel;
  `;
    const { rows } = await pool.query(query);
    return rows;
};