import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as HeartIcon } from "images/heart-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)`text-gray-700`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardHeartsContainer = tw.div`leading-none absolute hocus:bg-gray-200 focus:shadow-outline focus:outline-gray-700 transition duration-300 inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardHearts = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm bg-primary-700 hover:bg-primary-500`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Jackets: [
      {
        imageSrc: "https://media-photos.depop.com/b0/22911501/1318568877_7b5b115c28a2460da2c61d36368f677d/P0.jpg",
        title: "Cool Jacket",
        content: "Thrift Shop 123",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/36117628/1297742682_1934bb64fa3e4e2bb497bf101b126309/P0.jpg",
        title: "Awesome Jacket",
        content: "Thrift Shop 123",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/10634385/858539930_74c3df9a154040ae9139acb6d06a3d94/P0.jpg",
        title: "Great Jacket",
        content: "Thrift & Shop",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/33456429/1303601520_0872ded128734933b10c621afd941348/P0.jpg",
        title: "Fantastic Jacket",
        content: "Thrift & Shop",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/16245975/1302160292_78e135ef035e4d2aa4681f1704eed9c9/P0.jpg",
        title: "Aesthetic Jacket",
        content: "ABC Thrift Shop",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/9437779/1278175646_5da5ffa2dd8c4efa8f2a1fd13f1f9e21/P0.jpg",
        title: "Nice Jacket",
        content: "ABC Thrift Shop",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/27722912/1025200380_a01b2c07b4ae40fcb954675ec83e4dab/P0.jpg",
        title: "Bad Jacket",
        content: "Vintage Thrifting",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/3250448/616739410_1d437cc04db14aa28f396ea0296a6e5b/P0.jpg",
        title: "Stunning Jacket",
        content: "Vintage Thrifting",
        price: "$3.99",
        rating: "3.9",
        reviews: "26",
        url: "#"
      }
    ],
    Pants: getRandomCards(),
    Shirts: getRandomCards(),
    Tops: getRandomCards()
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>I'm Interested</CardButton>
                    </CardHoverOverlay>
                    <CardHeartsContainer>
                      <CardHearts>
                        <HeartIcon />
                      </  >
                      <CardReview>({card.reviews})</CardReview>
                    </CardHeartsContainer>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc: "https://media-photos.depop.com/b0/26950329/1266632793_e04b451dc8b24e109c2e657b14762e3a/P0.jpg",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/10236132/1117678515_1978879655114a5f8cfdcb36cb0b0658/P0.jpg",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/17421685/1271614888_089c6ca5f50a4403bf6cb8b6b8d10740/P0.jpg",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/5922571/1224086909_9f43e5cbb9ef4510b553bb52ef9c910e/P0.jpg",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/5922571/1221788191_f543af2073c24e2bbff2ca3e459ab773/P0.jpg",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/22683409/1299822311_7c53dfc882274410a1be242129b4a23f/P0.jpg",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/13865772/1307856017_a8a1be31ba324558a7fb274ad309e59e/P0.jpg",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/14607407/1307885015_ea67aa1c033a4d89b1d57da9450f803a/P0.jpg",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
