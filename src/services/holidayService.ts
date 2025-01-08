import { Holiday } from '../types';

const BASE_URL = 'https://date.nager.at/api/v3';

export async function getHolidays(year: number, countryCode: string = 'US'): Promise<Holiday[]> {
  try {
    const response = await fetch(`${BASE_URL}/PublicHolidays/${year}/${countryCode}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching holidays:', error);
    return [];
  }
}