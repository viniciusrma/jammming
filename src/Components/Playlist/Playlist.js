import React from 'react';
import './Playlist.css';

function Playlist() {
  return (
    <div className="Playlist">
  <input value="New Playlist"/>
  <TrackList />
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>   
  )
}

export default Playlist;