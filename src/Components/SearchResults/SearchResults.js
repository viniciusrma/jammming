import React from 'react';
import TrackList from '';
import './SearchResults.css'

function SearchResults() {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={this.props.searchResults} />
    </div>
  )
};

export default SearchResults;