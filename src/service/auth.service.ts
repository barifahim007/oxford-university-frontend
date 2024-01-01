import { setToLocalStorage } from "@/utls/local-storage";

export const storeUserLoginInfo = ({
  accessToken,
}: {
  accessToken: string;
}) => {
  setToLocalStorage("accessToken", accessToken);
};
