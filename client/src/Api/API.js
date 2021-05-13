const API_URL = 'http://localhost:1337'

export async function fetchLogEntries() {
  try {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function addLogEntry(entry) {
  try {
    const response = await fetch(`${API_URL}/api/logs`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(entry),
    });
    return response.json();
  } catch (error) {
    console.error(error);
    throw(error);
  }
}
