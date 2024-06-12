export const useAPImocks = false;

export const BASE_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_APP_DB_ID}`;
export const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
};
