import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'HeL2niHOG9tReD7oX4UytPQijrSKMtCE';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGidId: "9zW1KmtJpEL35RU9Fu"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, result) => {
        this.setState({
          gifs: result.data
        });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
