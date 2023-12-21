import Cookies from 'js-cookie';

export const getToken = (tokenName: string): any => {
  const ress = Cookies.get(tokenName);
  return ress;
};

export const setToken = (tokenName: string, token: string, expires?: Date) => {
  Cookies.set(tokenName, token, { expires });
};

export const removeToken = (tokenName: string): void => {
  try {
    Cookies.remove(tokenName);
  } catch (e) {
    console.log(e);
  }
};
