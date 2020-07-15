import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon, Text, Spinner, Layout } from "@ui-kitten/components";
import { Audio } from "expo-av";
import AppContext from "../../../../context/AppContext";

Audio.setAudioModeAsync({
  allowsRecordingIOS: false,
  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  playsInSilentModeIOS: true,
  shouldDuckAndroid: true,
  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  playThroughEarpieceAndroid: false,
});

export default PlayerControls = ({ size, margins, src }) => {
  const { state, dispatch } = useContext(AppContext);
  const [player, setPlayer] = useState({
    demo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    playbackInstance: null,
    isPlaying: false,
    volume: 1.0,
    playButton: false,
    pauseButtonClicked: false,
    nextTrackClicked: false,
    prevTrackClicked: false,
    playbackInstance: null,
    isBuffering: null,
  });

  useEffect(() => {
    console.log("here", Boolean(player.isPlaying));

    if (!player.playbackInstance) {
      src && setUpAudio(src);
    }
    // pauseButtonClicked ? null : setUpAudio(src);
    // playbackInstance ? null : setUpAudio(src);
  }, [player.isPlaying]);

  const handleStop = async (src) => {
    const { playbackInstance, demo } = player;
    playbackInstance.unloadAsync();
    setPlayer((prevState) => ({
      ...prevState,
      playButton: false,
      isPlaying: false,
      pauseButtonClicked: false,
      playbackInstance: null,
    }));
  };

  const handlePause = async () => {
    const { playbackInstance, isPlaying, pauseButtonClicked } = player;
    await playbackInstance.pauseAsync().then(
      setPlayer((prevState) => ({
        ...prevState,
        pauseButtonClicked: !pauseButtonClicked,
      }))
    );
  };

  const handlePlay = async () => {
    const { playbackInstance, isPlaying, pauseButtonClicked } = player;
    await playbackInstance.playAsync().then(
      setPlayer((prevState) => ({
        ...prevState,
        isPlaying: true,
        pauseButtonClicked: !pauseButtonClicked,
      }))
      // console.log("playbackInstance @ playpause", playbackInstance),
      // console.log("isPlaying @ playpause", isPlaying)
    );
  };

  const onPlaybackStatusUpdate = (status) => {
    setPlayer((prevState) => ({
      ...prevState,
      isBuffering: status.isBuffering,
    }));
  };

  const setUpAudio = async (src) => {
    const { isPlaying, volume } = player;

    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: src,
      };

      const status = {
        shouldPlay: isPlaying,
        volume: volume,
      };
      playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);

      setPlayer((prevState) => ({
        ...prevState,
        playbackInstance: playbackInstance,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    player.playbackInstance && (
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: null,
          margin: margins,
          alignItems: "center",
        }}
      >
        {/* <View>
          {prevTrackClicked ? (
            <Icon
              name="arrow-left"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ prevTrackClicked: !prevTrackClicked })
              }
            />
          ) : (
            <Icon
              name="arrow-left-outline"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ prevTrackClicked: !prevTrackClicked })
              }
            />
          )}
        </View> */}

        {/* {DONT DELETE */}

        {player.isPlaying ? (
          <View>
            <Icon
              name="stop-circle"
              onPress={async () => {
                await handleStop(src);
              }}
              style={{ height: size, width: size }}
            />
          </View>
        ) : null}

        <View>
          {player.isPlaying ? (
            player.pauseButtonClicked ? (
              <Icon
                name="pause-circle"
                onPress={() => {
                  handlePause();
                }}
                style={{
                  height: size,
                  width: size,
                }}
              />
            ) : (
              <Icon
                name="play-circle"
                onPress={() => {
                  handlePlay();
                }}
                style={{
                  height: size,
                  width: size,
                }}
              />
            )
          ) : (
            <Icon
              name="play-circle-outline"
              onPress={() => {
                handlePlay();
              }}
              style={{
                height: size,
                width: size,
              }}
            />
          )}
        </View>

        {/* {DONT DELETE */}

        {/* <View>
          {nextTrackClicked ? (
            <Icon
              name="arrow-right"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ nextTrackClicked: !nextTrackClicked })
              }
            />
          ) : (
            <Icon
              name="arrow-right-outline"
              style={{ height: size, width: size }}
              onPress={() =>
                this.setState({ nextTrackClicked: !nextTrackClicked })
              }
            />
          )}
        </View> */}
      </Layout>
    )
  );
};
