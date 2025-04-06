export const APP_NAME = getEnvVar('VITE_APP_NAME');
const APP_PROD_BASE_URL = getEnvVar('VITE_APP_PROD_BASE_URL');
const APP_DEV_BASE_URL = getEnvVar('VITE_APP_DEV_BASE_URL');

export const isDevEnv = getEnvVar('DEV');
export const isProdEnv = getEnvVar('PROD');

export const BASE_URL = isProdEnv ? APP_PROD_BASE_URL : APP_DEV_BASE_URL;

function getEnvVar(key: string) {
  const envVar: string | null = import.meta?.env[key] || null;

  if (!envVar) {
    throw new Error(`Env variable ${key} is required`);
  }

  return envVar;
}
