import { decodeToken } from "@/constaints/jwt";
import { authKey } from "@/constaints/token";
import { getFromLocalStorage, setToLocalStorage } from "@/utls/local-storage";

export const setUserInToLocalStorage = ({
  accessToken,
}: {
  accessToken: string;
}) => {
  setToLocalStorage(authKey, accessToken as string);
};

export const getUserFromLocalStorage = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodAuthToken = decodeToken(authToken);
    return decodAuthToken;
  } else {
    return null;
  }
};

export const isLoggedIn = (): boolean => {
  const authToken = getFromLocalStorage(authKey);
  return !authToken;
};

export const userLogOut = (key: string) => {
  return localStorage.removeItem(key);
};
