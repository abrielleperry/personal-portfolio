import React, { useEffect, useState } from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import AudioPlayer from "./AudioPlayer";
import LoadingSkeleton from "./LoadingSkeleton";

type Song = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string;
  song: string;
};

type CurrentlyPlayingProps = {
  songId: string;
  currentSongIndex: number;
  playlistLength: number;
  isShuffleOn: boolean;
  toggleShuffle: () => void;
  onChangeSong: (newIndex: number) => void;
  volume: number;
  setVolume: (volume: number) => void;
  isPlaying: boolean;
  togglePlayPause: () => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
};

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  songId,
  currentSongIndex,
  playlistLength,
  isShuffleOn,
  toggleShuffle,
  onChangeSong,
  volume,
  setVolume,
  togglePlayPause,
  isPlaying,
  playbackSpeed,
  setPlaybackSpeed,
}) => {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSong = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/v1/songs/${songId}`);
        const data: Song = await response.json();
        setSong(data);
      } catch (error) {
        console.error("Error fetching song data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (songId) {
      fetchSong();
    }
  }, [songId]);

  const handleSongEnd = () => {
    if (isShuffleOn) {
      const randomIndex = Math.floor(Math.random() * playlistLength);
      onChangeSong(randomIndex);
    } else if (currentSongIndex < playlistLength - 1) {
      onChangeSong(currentSongIndex + 1);
    } else {
      togglePlayPause();
    }
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!song) {
    return <div>Song not found</div>;
  }
  return (
    <div
      data-testid="currently-playing"
      className="flex flex-col flex-1 px-6 border-b sm:border-b-0 sm:border-r border-gray-200 rounded"
    >
      <AudioPlayer
        songUrl={song.song}
        isPlaying={isPlaying}
        volume={volume}
        playbackSpeed={playbackSpeed}
        onSongEnd={handleSongEnd}
      />
      <CoverArt coverUrl={song.cover} />
      <SongTitle title={song.title} artist={song.artist} />
      <PlayControls
        currentSongIndex={currentSongIndex}
        playlistLength={playlistLength}
        isShuffleOn={isShuffleOn}
        toggleShuffle={toggleShuffle}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        onChangeSong={onChangeSong}
        playbackSpeed={playbackSpeed}
        setPlaybackSpeed={setPlaybackSpeed}
      />
      <VolumeControls
        volume={volume}
        onVolumeChange={(newVolume) => setVolume(newVolume)}
      />
    </div>
  );
};

export default CurrentlyPlaying;
