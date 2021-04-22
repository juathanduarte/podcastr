import { useState } from 'react';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setcurrentEpisodeIndex] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setcurrentEpisodeIndex(0);
    setisPlaying(true);
  }

  function togglePlay() {
    setisPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setisPlaying(state);
  }

  return (
    <PlayerContext.Provider value={{episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState}}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
