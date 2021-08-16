import { useEffect } from "react";
import useToken from "../hooks/useToken";

/*
  Simple component that displays the children only if there is a toke saved
  Otherwise, it displays a link to login the user, and handles reading
  and storing the token when the user is redirected back to the app
*/
export default function Authorized({ children = [] }) {
  const [token, setToken] = useToken(null);

  const url = new URL("https://accounts.spotify.com/authorize");
  url.searchParams.set("client_id", process.env.REACT_APP_SPOTIFY_CLIENT_ID);
  url.searchParams.set("redirect_uri", `${window.location.href}playlists`);
  url.searchParams.set("response_type", "token");
  url.searchParams.set("scope", "playlist-read-private");

  console.log(url.searchParams.get("redirect_uri"));

  useEffect(() => {
    // If the user was redirected here and there is a token
    // try to get it
    const url = new URL(window.location.href);
    const hash = url.hash;
    if (hash) {
      const token = hash.split("&")[0].split("=")[1];
      setToken(token);
    }
  }, [setToken]);

  return !token ? <a href={url.toString()}>Login</a> : children;
}
