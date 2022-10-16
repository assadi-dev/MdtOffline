export const TOKEN_STORAGE_NAME = "mdt911-Offline-Token";
export const REFRESH_TOKEN_STORAGE_NAME = "refresh_token";
export const USER_DATA_STORAGE = "mdt911-Offline-user-storage";
export const ID_SERVICE_STORAGE = "mdt911-service-active";

const protocol = location.protocol;
export const DOMAIN = protocol + "//" + process.env.REACT_APP_URLBACKEND;
