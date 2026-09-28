// Static emission factors for demo mode
// Values are approximate kg CO2e per unit
// Source: Various public sources (EPA, DEFRA, etc.)

export interface EmissionFactor {
  id: string;
  name: string;
  category: 'TRANSPORT' | 'ENERGY' | 'DIET' | 'SHOPPING' | 'WASTE';
  unit: string;
  co2ePerUnit: number;
  description?: string;
}

export const emissionFactors: EmissionFactor[] = [
  // TRANSPORT
  {
    id: 'car_gasoline',
    name: 'Car (gasoline)',
    category: 'TRANSPORT',
    unit: 'km',
    co2ePerUnit: 0.21,
    description: 'Average passenger vehicle',
  },
  {
    id: 'car_diesel',
    name: 'Car (diesel)',
    category: 'TRANSPORT',
    unit: 'km',
    co2ePerUnit: 0.19,
    description: 'Average passenger vehicle',
  },
  {
    id: 'car_electric',
    name: 'Car (electric)',
    category: 'TRANSPORT',
    unit: 'km',
    co2ePerUnit: 0.05,
    description: 'Grid average (varies by region)',
  },
  {
    id: 'bus',
    name: 'Bus (public transit)',
    category: 'TRANSPORT',
    unit: 'km',
    co2ePerUnit: 0.089,
    description: 'Average city bus',
  },
  {
    id: 'train',
    name: 'Train (rail)',
    category: 'TRANSPORT',
    unit: 'km',
    co2ePerUnit: 0.041,
    description: 'Electric train',
  },
  {
    id: 'flight_short',
    name: 'Flight (short-haul)',
    category: 'TRANSPORT',
    unit: 'km',
    co2ePerUnit: 0.255,
    description: 'Under 3 hours',
  },
  {
    id: 'flight_long',
    name: 'Flight (long-haul)',
    category: 'TRANSPORT',
    unit: 'km',
    co2ePerUnit: 0.195,
    description: 'Over 3 hours',
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle',
    category: 'TRANSPORT',
    unit: 'km',
    co2ePerUnit: 0.113,
    description: 'Average motorcycle',
  },

  // ENERGY
  {
    id: 'electricity_grid',
    name: 'Electricity (grid)',
    category: 'ENERGY',
    unit: 'kWh',
    co2ePerUnit: 0.42,
    description: 'Grid average (varies by region)',
  },
  {
    id: 'electricity_green',
    name: 'Electricity (green tariff)',
    category: 'ENERGY',
    unit: 'kWh',
    co2ePerUnit: 0.05,
    description: 'Renewable energy',
  },
  {
    id: 'natural_gas',
    name: 'Natural gas',
    category: 'ENERGY',
    unit: 'kWh',
    co2ePerUnit: 0.2,
    description: 'Heating/cooking',
  },
  {
    id: 'heating_oil',
    name: 'Heating oil',
    category: 'ENERGY',
    unit: 'liters',
    co2ePerUnit: 2.68,
    description: 'Home heating',
  },
  {
    id: 'propane',
    name: 'Propane/LPG',
    category: 'ENERGY',
    unit: 'liters',
    co2ePerUnit: 1.52,
    description: 'Heating/cooking',
  },

  // DIET
  {
    id: 'beef',
    name: 'Beef',
    category: 'DIET',
    unit: 'kg',
    co2ePerUnit: 27.0,
    description: 'Per kg of meat',
  },
  {
    id: 'pork',
    name: 'Pork',
    category: 'DIET',
    unit: 'kg',
    co2ePerUnit: 12.1,
    description: 'Per kg of meat',
  },
  {
    id: 'chicken',
    name: 'Chicken',
    category: 'DIET',
    unit: 'kg',
    co2ePerUnit: 6.9,
    description: 'Per kg of meat',
  },
  {
    id: 'fish',
    name: 'Fish',
    category: 'DIET',
    unit: 'kg',
    co2ePerUnit: 5.1,
    description: 'Per kg of fish',
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    category: 'DIET',
    unit: 'kg',
    co2ePerUnit: 0.4,
    description: 'Per kg of vegetables',
  },
  {
    id: 'dairy',
    name: 'Dairy products',
    category: 'DIET',
    unit: 'kg',
    co2ePerUnit: 2.5,
    description: 'Per kg of dairy',
  },
  {
    id: 'eggs',
    name: 'Eggs',
    category: 'DIET',
    unit: 'kg',
    co2ePerUnit: 4.8,
    description: 'Per kg of eggs',
  },

  // SHOPPING
  {
    id: 'clothing',
    name: 'Clothing',
    category: 'SHOPPING',
    unit: 'item',
    co2ePerUnit: 15.0,
    description: 'Average clothing item',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    category: 'SHOPPING',
    unit: 'item',
    co2ePerUnit: 50.0,
    description: 'Average electronic device',
  },
  {
    id: 'furniture',
    name: 'Furniture',
    category: 'SHOPPING',
    unit: 'item',
    co2ePerUnit: 80.0,
    description: 'Average furniture item',
  },
  {
    id: 'books',
    name: 'Books',
    category: 'SHOPPING',
    unit: 'item',
    co2ePerUnit: 2.5,
    description: 'Per book',
  },

  // WASTE
  {
    id: 'waste_landfill',
    name: 'Waste to landfill',
    category: 'WASTE',
    unit: 'kg',
    co2ePerUnit: 0.5,
    description: 'Per kg of waste',
  },
  {
    id: 'waste_recycled',
    name: 'Waste recycled',
    category: 'WASTE',
    unit: 'kg',
    co2ePerUnit: 0.1,
    description: 'Per kg of waste',
  },
  {
    id: 'waste_composted',
    name: 'Waste composted',
    category: 'WASTE',
    unit: 'kg',
    co2ePerUnit: 0.05,
    description: 'Per kg of waste',
  },
];

// Helper function to get emission factor by ID
export function getEmissionFactor(id: string): EmissionFactor | undefined {
  return emissionFactors.find((factor) => factor.id === id);
}

// Helper function to get emission factors by category
export function getEmissionFactorsByCategory(category: EmissionFactor['category']): EmissionFactor[] {
  return emissionFactors.filter((factor) => factor.category === category);
}
