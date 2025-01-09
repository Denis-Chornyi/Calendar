import { Holiday } from "../types";

const BASE_URL = "https://date.nager.at/api/v3";

function getCountryByTimeZone(): string {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZoneMapping: { [key: string]: string } = {
    "Europe/Kiev": "UA",
    "America/New_York": "US",
    "Europe/Paris": "FR",
    "Europe/London": "GB",
    "Europe/Berlin": "DE",
  };

  return timeZoneMapping[timeZone] || "UA";
}

export async function getHolidays(year: number): Promise<Holiday[]> {
  try {
    const countryCode = await getCountryByTimeZone();
    const response = await fetch(
      `${BASE_URL}/PublicHolidays/${year}/${countryCode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching holidays:", error);
    return [];
  }
}
