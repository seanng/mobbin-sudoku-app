const cache: { [key: string]: string } = {};

/**
 * @see https://newcubator.com/devsquad/363/a-handy-utility-typescript-function-to-access-environment-variables
 */
export const accessEnv = (key: string, defaultValue?: string): string => {
  if (cache[key]) return cache[key] as string;

  if (!(key in process.env) || typeof process.env[key] === undefined) {
    if (defaultValue) return defaultValue;
    throw new Error(`${key} not found in process.env!`);
  }

  if (!(key in cache)) {
    cache[key] = <string>process.env[key];
  }

  return cache[key] as string;
};
