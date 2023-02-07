import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as HeartIcon } from "images/heart-icon.svg";

const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardHeartsContainer = tw.div`leading-none absolute hocus:bg-gray-200 focus:shadow-outline focus:outline-gray-700 transition duration-300 inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardHearts = styled.div`
  ${tw`mr-1 text-sm font-bold pointer-events-none	flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current pointer-events-none text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardReview = tw.div`font-medium text-xs pointer-events-none text-gray-600`;
const CardButton = tw(
  PrimaryButtonBase
)`text-sm bg-primary-700 hover:bg-primary-500`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

export default ({card, index, setCard}) => {

  const [reviewCount, setReviewCount] = React.useState(card.reviews);
  const [liked, setLiked] = React.useState(false);

  const handleCardOpen = (event, card) => {
    event.preventDefault();

    if (event.target.id != "cardHeartsCont") {
      setCard(card);
    } else {
        setReviewCount(liked ? reviewCount-1 : reviewCount+1);
        setLiked(!liked);
    }
  };

  return (
    <CardContainer key={index}>
      <Card
        className="group"
        initial="rest"
        whileHover="hover"
        animate="rest"
        onClick={(event) => handleCardOpen(event, card)}>
        <CardImageContainer imageSrc={card.imageSrc}>
          <CardHoverOverlay
            variants={{
              hover: {
                opacity: 1,
                height: "auto",
              },
              rest: {
                opacity: 0,
                height: 0,
              },
            }}
            transition={{ duration: 0.3 }}>
            <CardButton>I'm Interested</CardButton>
          </CardHoverOverlay>
          <CardHeartsContainer id="cardHeartsCont">
            {/* Have a POST request here to the server update the item in the container
                          Also need a server storage which holds an object of every clothing item, with like count, image source, etc..
                      */}
            <CardHearts>
              <HeartIcon />
            </CardHearts>
            <CardReview>({reviewCount})</CardReview>
          </CardHeartsContainer>
        </CardImageContainer>
        <CardText>
          <CardTitle>{card.title}</CardTitle>
          <CardContent>{card.store}</CardContent>
          <CardPrice>{card.price}</CardPrice>
        </CardText>
      </Card>
    </CardContainer>
  );
};
