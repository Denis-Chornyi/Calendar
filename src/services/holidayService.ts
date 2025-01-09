import { Holiday } from "../types";

const BASE_URL = "https://date.nager.at/api/v3";

async function getCountryCode(): Promise<string> {
  try {
    const response = await fetch("https://ipapi.co/json/");
    if (!response.ok) throw new Error("Failed to fetch country code");
    const data = await response.json();
    return data.country_code || "US";
  } catch (error) {
    console.error("Error fetching country code:", error);

    return getCountryByTimeZone();
  }
}

function getCountryByTimeZone(): string {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZoneMapping: { [key: string]: string } = {
    "Europe/Kiev": "UA",
    "America/New_York": "US",
    "Europe/Paris": "FR",
    "Europe/London": "GB",
    "Europe/Berlin": "DE",
  };

  return timeZoneMapping[timeZone] || "US";
}

export async function getHolidays(year: number): Promise<Holiday[]> {
  try {
    const countryCode = await getCountryCode();
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
