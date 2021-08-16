import useSessionStorage from "./useSessionStorage";

/**
 * Simple custom hook to access the token stored in the Session Storage
 * @returns An array with the token and a functions to set and clear the token, similar to setState
 */
export default function useToken() {
  const [token, setToken] = useSessionStorage("token", null);

  function clearToken() {
    setToken(null);
  }
  return [token, setToken, clearToken];
}
