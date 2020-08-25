import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  constructor(props){
    super(props);
    this.state.searchResults = [
      {name: 'Cant knock the hustle'},
      {artist: 'Jay-Z'},
      {album: 'Unreasonable doubt'},
      {id: 1}
    ]
    
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
