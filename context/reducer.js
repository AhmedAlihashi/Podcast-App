export default function reducer(state, { type, payload }) {
  switch (type) {
    // Auth
    case "GET_USERINFO":
      return {
        ...state,
        user: payload,
      };
    // Catalogue
    case "GET_CATALOGUE":
      return {
        ...state,
        episodes: payload,
      };
    case "GET_LATEST_EPISODE":
      return {
        ...state,
        latestEpisode: payload,
      };

    //player
    case "PLAYER_ACTIVE":
      return {
        ...state,
        playbackInstance: payload,
      };

    case "UPDATE_MEDIA_CONTROL":
      return {
        ...state,
        currentMediaLoaded: payload,
      };

    case "UPDATE_PLAYER_STATUS":
      return {
        ...state,
        playingStatus: payload,
      };

    case "UPDATE_ARCHIVE_PLAYER_DATA":
      return {
        ...state,
        archivePlayerObj: payload,
      };

    case "ARCHIVE_PLAYER_STATUS":
      return {
        ...state,
        archivePlayerLoading: payload,
      };

    case "ARCHIVE_PLAYER_CLEAR":
      return {
        ...state,
        //playingStatus: "changed",
        // archivePlayerLoading: false,
        playbackInstance: null,
        archivePlayerObj: null,
        // currentMediaLoaded: null,
      };

    //buttons
    case "FLIP_INFO":
      return {
        ...state,
        infoSection: payload,
      };
    case "FLIP_ADS":
      return {
        ...state,
        adSection: payload,
      };

    default:
      return state;
  }
}
