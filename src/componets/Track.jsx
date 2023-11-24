import { useContext } from 'react';
import { AudioContext } from '../context/AudioContext';
import style from './track.module.scss';
import { IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import secondToMIn from '../utils/secondToMIn';
import cn from 'classnames';

const Track = (track) => {
  const { id, src, preview, duration, title, artists } = track;

  const { handleToggleAudio, currentTrack, isPlaying } = useContext(AudioContext);

  const isCurrentTrack = currentTrack.id === track.id;

  const formatDuration = secondToMIn(duration);

  return (
    <div className={cn(style.track, isCurrentTrack && style.playing)}>
      <IconButton onClick={() => handleToggleAudio(track)}>
        {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img className={style.preview} src={preview} alt="" />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formatDuration}</p>
    </div>
  );
};

export default Track;
