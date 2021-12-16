import superFetch from "node-superfetch";

const getRequest = async (endpoint: string) => {
  const response: any = await superFetch.get(endpoint);
  if (response.ok) {
    return response;
  }

  throw new Error(`Failed to fetch ${endpoint}`);
};

/**
 * Get a random of a joke!
 *
 */
export const joke = async () => {
  return getRequest("https://sorrowapi.glitch.me/api/jokes").then((res) => res.body.joke);
};

/**
 * Get a random roast!
 *
 */
export const roast = async () => {
  return getRequest("https://sorrowapi.glitch.me/api/roasts").then(
    (res) => res.body.roast
  );
};

/**
 * Get a random image of a animegirl!
 *
 */
export const animegirl = async () => {
  return getRequest(
    "https://sorrowapi.glitch.me/api/animegirls"
  ).then((res) => res.body.animegirls);
};

/**
 * Get a random image of a animeboy!
 *
 */
export const animeboy = async () => {
  return getRequest("https://sorrowapi.glitch.me/api/animeboys").then(
    (res) => res.body.animeboys
  );
};
