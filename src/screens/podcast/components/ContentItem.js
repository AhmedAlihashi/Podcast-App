import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Layout, Text, Spinner, Icon, Button } from "@ui-kitten/components";
import PlayerControls from "./PlayerControls";

import PodCard from "../../../components/PodCard.js";
import {
  LikeButton,
  FavButton,
  DownloadButton,
  InfoButton,
  AdButton,
} from "../../../components/Icons/Icons";

import AppContext from "../../../../context/AppContext";

//import { EngagementContext } from "../../../context/EngagementContext";

export const ArchiveItem = ({
  epTitle,
  desc,
  cid,
  epNum,
  onPress,
  podBGColor,
}) => {
  const [loading, setLoading] = useState(false);
  const { state } = useContext(AppContext);

  return (
    <TouchableOpacity onPress={onPress}>
      <PodCard
        bgColor={podBGColor && podBGColor}
        flex={1}
        borderWidth={3}
        radius={20}
        content={
          <Layout
            style={{
              flex: 1,
              flexWrap: "wrap",
              flexDirection: "column",
              backgroundColor: "null",
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <Text
                  category="s1"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  {epTitle}
                </Text>
              </View>

              {/* <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "baseline",
                }}
              >
                <LikeButton />
                <FavButton />
              </View> */}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Text category="h4" style={{ color: "black" }}>
                  Ep.{epNum}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {loading ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <Spinner />
                </View>
              ) : null}
            </View>
          </Layout>
        }
      />
    </TouchableOpacity>
  );
};

export const LatestItem = () => {
  const { state, dispatch } = useContext(AppContext);

  const [descState, setDescState] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    state.latestEpisode && (
      // <EngagementContext.Consumer>
      //   {(engagementContext) => {
      //     return (
      <PodCard
        flex={1}
        borderWidth={4}
        radius={20}
        bgColor={"white"}
        content={
          <Layout
            style={{
              flex: 1,
              flexWrap: "wrap",
              flexDirection: "column",
              backgroundColor: null,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AdButton />

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {state.infoSection ? (
                  <Text category="c1" status="basic">
                    Scroll down for more info
                  </Text>
                ) : null}
                <InfoButton />
                {/*
                         taken out for demo
                      <DownloadButton />
                      <LikeButton
                        cid={cid}
                        loggedUserEngagements={
                          engagementContext.state.loggedUserEngagements
                        }
                      />
                      <FavButton /> */}
              </View>
            </View>

            <Layout style={{ flex: 2 }}>
              {state.infoSection ? (
                <ScrollView>
                  <View style={{ marginHorizontal: 5 }}>
                    <Text category="h6" style={{ color: "black" }}>
                      {state.latestEpisode.title}
                    </Text>
                    <Text category="s2" style={{ color: "black" }}>
                      {state.latestEpisode.description}
                    </Text>
                  </View>
                </ScrollView>
              ) : (
                <View style={{ marginHorizontal: 5 }}>
                  <Text category="h4" style={{ color: "black" }}>
                    {state.latestEpisode.title}
                  </Text>
                </View>
              )}
            </Layout>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 2, flexDirection: "row" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 10,
                  }}
                >
                  {state.adSection ? (
                    <>
                      <Text category="s1" style={{ color: "black" }}>
                        Sponsored Track
                      </Text>
                      <Text style={{ color: "black" }}>
                        {state.latestEpisode.ads}
                      </Text>
                    </>
                  ) : null}
                </View>
              </View>

              <Text
                category="h4"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  marginRight: 10,
                }}
              >
                Ep. {state.latestEpisode.id}
              </Text>
            </View>
          </Layout>
        }
      />
      //     );
      //   }}
      // </EngagementContext.Consumer>
    )
  );
};

export const FavItem = ({ epTitle, desc, epNum }) => {
  return (
    <PodCard
      flex={1}
      borderWidth={3}
      radius={20}
      content={
        <Layout
          style={{
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "column",
            backgroundColor: null,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <Text
                category="s1"
                style={{ fontWeight: "bold", color: "black" }}
              >
                {epTitle}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "baseline",
              }}
            >
              <LikeButton />
              <FavButton favouited />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 3,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View>
                <DownloadButton />
              </View>
              <View>
                <PlayerControls size={45} src={src} />
              </View>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text category="h4" style={{ color: "black" }}>
                Ep.{epNum}
              </Text>
            </View>
          </View>
        </Layout>
      }
    />
  );
};

export const DownloadItem = ({ epTitle, desc, epNum }) => {
  return (
    <PodCard
      flex={1}
      borderWidth={3}
      radius={20}
      content={
        <Layout
          style={{
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "column",
            backgroundColor: null,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <Text
                category="s1"
                style={{ fontWeight: "bold", color: "black" }}
              >
                {epTitle}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "baseline",
              }}
            >
              <LikeButton liked />
              <FavButton favouited />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 3,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View>
                <DownloadButton downloaded />
              </View>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text category="h4" style={{ color: "black" }}>
                Ep.{epNum}
              </Text>
            </View>
          </View>
        </Layout>
      }
    />
  );
};
