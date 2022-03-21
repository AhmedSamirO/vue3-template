import Cookies from 'js-cookie'
const ID_TOKEN_KEY = 'pedaia_id_token'
export const getToken = () => {
  return Cookies.get(ID_TOKEN_KEY)
};
export const saveToken = (token: any) => {
  // 2 weeks
  const expireDate = new Date(new Date().getTime() + (14 * 24 * 60 * 60 * 1000));
  Cookies.set(ID_TOKEN_KEY, token, { expires: expireDate })
};
export const destroyToken = () => {
  Cookies.remove(ID_TOKEN_KEY)
};
export default { getToken, saveToken, destroyToken }
