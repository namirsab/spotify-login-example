import { useEffect, useState } from "react";
import useToken from "../hooks/useToken";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  const [token] = useToken();

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data.items);
      });
  }, [token]);

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
}
