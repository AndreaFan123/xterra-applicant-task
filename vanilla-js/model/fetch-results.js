export async function fetchResults() {
  // Nice to have: Better use environment variables
  const apiUri =
    "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09";

  if (!apiUri) {
    throw new Error("Something went wrong!We will fix immediately");
  }

  try {
    const resp = await fetch(apiUri);
    if (!resp.ok) {
      throw new Error("Something went wrong! We will fix immediately");
    }
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Something went wrong! We will fix immediately");
  }
}
