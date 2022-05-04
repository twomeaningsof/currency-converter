export const fetchWithErrorHandling = async (request) => {
  try {
    const response = await request();
    const data = await response.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
