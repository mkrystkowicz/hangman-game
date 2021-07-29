export default async function api(url, options) {
  try {
    const response = await fetch(url, options);

    return response.json();
  } catch (err) {
    throw new Error('Could not get word definition', err);
  }
}
