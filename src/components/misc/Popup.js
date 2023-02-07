import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

const OverlayContainer = tw.div`fixed left-0 top-0 h-full w-full bg-gray-900 text-black z-10 flex justify-center items-center flex-col`;
const PopUpContainer = tw.div`bg-white w-1/2 pr-10 pl-10 pb-10`;
const InfoContainer = tw.div`float-left w-1/2`;

const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-80 bg-center bg-contain bg-no-repeat relative rounded-t mx-10`}
`;

const CloseContainer = tw.div`text-gray-700 justify-end font-bold flex items-center bg-white w-1/2 h-10 pr-4`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg text-center font-semibold group-hover:text-primary-500`;
const CardContentMain = tw.p`mt-1 text-center text-sm font-medium text-gray-800`;
const CardAddress = tw.p`mt-1 text-center text-sm font-medium text-gray-500`;
const CardDate = tw.p`mt-1 text-center text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-center text-xl font-bold`;

const LoadingText = tw.p`mt-4 text-center text-xl font-bold w-full h-full flex bg-gray-100 justify-center items-center`;

const MapContainer = tw.div`h-full float-left w-1/2`;

export default ({ card = undefined, setCard = () => {} }) => {
  const [loaded, setLoad] = React.useState(false);

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      setCard(undefined);
    }
  };

  const handleLoad = () => {
    console.log("loaded");
    setLoad(true);
  };

  return (
    <OverlayContainer
      style={{ background: "rgba(0,0,0,0.25)" }}
      onClick={handleClick}>
      <CloseContainer>
        <button onClick={() => setCard(undefined)}>X</button>
      </CloseContainer>
      <PopUpContainer>
        <>
          <InfoContainer>
            <CardImageContainer imageSrc={card.imageSrc} />
            <CardDate>{card.date}</CardDate>
            <CardText>
              <CardTitle>{card.title}</CardTitle>
              <CardContentMain>{card.store}</CardContentMain>
              <CardAddress>{card.address}</CardAddress>
              <CardPrice>{card.price}</CardPrice>
            </CardText>
          </InfoContainer>
          <MapContainer>
            {loaded ? undefined : <LoadingText>Loading...</LoadingText>}
            <iframe
              style={{
                border: 0,
                width: loaded ? "100%" : "0%",
                height: loaded ? "100%" : "0%",
              }}
              referrerPolicy={"no-referrer-when-downgrade"}
              onLoad={handleLoad}
              loading={"lazy"}
              src={
                "https://www.google.com/maps/embed/v1/search?q=" +
                card.store.replace(" ", ",+") +
                card.address.replace(" ", ",+") +
                "&key=AIzaSyCZ72L6ari9E0ue-jUnIBXjPY9Lziv28X4"
              }></iframe>
          </MapContainer>
        </>
      </PopUpContainer>
    </OverlayContainer>
  );
};
