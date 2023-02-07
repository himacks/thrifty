import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import Card from "./Card";
import BgBanner from "../../images/bgBanner.png";


const HeaderRow = tw.div`bg-white p-12 flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)`font-retroCool text-5xl text-gray-700`;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const MainContainer = styled.div`
  background-image: url(${BgBanner}); 
  ${tw`relative pb-32 bg-contain bg-center`}
  `;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  setCard = () => {},
  tabs = {
    Jackets: [
      {
        imageSrc: "https://media-photos.depop.com/b0/22911501/1318568877_7b5b115c28a2460da2c61d36368f677d/P0.jpg",
        title: "Cool Jacket",
        store: "Orange Circle Antique Mall",
        address: "118 S Glassell St, Orange, CA 92866",
        date: "12/05/2022 5:30PM",
        price: "$5.99",
        rating: "5.0",
        reviews: 87,
        url: "#",
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/36117628/1297742682_1934bb64fa3e4e2bb497bf101b126309/P0.jpg",
        title: "Awesome Jacket",
        store: "The Collection by Casa Teresa",
        address: "234 N Glassell St, Orange, CA 92866",
        date: "12/04/2022 3:29PM",
        price: "$2.99",
        rating: "4.8",
        reviews: 32,
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/10634385/858539930_74c3df9a154040ae9139acb6d06a3d94/P0.jpg",
        title: "Great Jacket",
        store: "Orange Circle Antique Mall",
        address: "118 S Glassell St, Orange, CA 92866",
        date: "12/05/2022 5:30PM",
        lat: 33.7874969,
        lng: -117.8510215,
        price: "$7.99",
        rating: "4.9",
        reviews: 89,
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/33456429/1303601520_0872ded128734933b10c621afd941348/P0.jpg",
        title: "Fantastic Jacket",
        store: "Orange Circle Antique Mall",
        address: "118 S Glassell St, Orange, CA 92866",
        date: "12/05/2022 5:30PM",
        lat: 33.7874969,
        lng: -117.8510215,
        price: "$8.99",
        rating: "4.6",
        reviews: 12,
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/16245975/1302160292_78e135ef035e4d2aa4681f1704eed9c9/P0.jpg",
        title: "Aesthetic Jacket",
        store: "Orange Circle Antique Mall",
        address: "118 S Glassell St, Orange, CA 92866",
        date: "12/05/2022 5:30PM",
        lat: 33.7874969,
        lng: -117.8510215,
        price: "$7.99",
        rating: "4.2",
        reviews: 19,
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/9437779/1278175646_5da5ffa2dd8c4efa8f2a1fd13f1f9e21/P0.jpg",
        title: "Nice Jacket",
        store: "Orange Circle Antique Mall",
        address: "118 S Glassell St, Orange, CA 92866",
        date: "12/05/2022 5:30PM",
        lat: 33.7874969,
        lng: -117.8510215,
        price: "$2.99",
        rating: "5.0",
        reviews: 61,
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/27722912/1025200380_a01b2c07b4ae40fcb954675ec83e4dab/P0.jpg",
        title: "Bad Jacket",
        store: "Orange Circle Antique Mall",
        address: "118 S Glassell St, Orange, CA 92866",
        date: "12/05/2022 5:30PM",
        lat: 33.7874969,
        lng: -117.8510215,
        price: "$3.99",
        rating: "4.2",
        reviews: 95,
        url: "#"
      },
      {
        imageSrc: "https://media-photos.depop.com/b0/3250448/616739410_1d437cc04db14aa28f396ea0296a6e5b/P0.jpg",
        title: "Stunning Jacket",
        store: "Orange Circle Antique Mall",
        address: "118 S Glassell St, Orange, CA 92866",
        date: "12/05/2022 5:30PM",
        lat: 33.7874969,
        lng: -117.8510215,
        price: "$3.99",
        rating: "3.9",
        reviews: 26,
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
    <MainContainer>
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
              <Card card={card} index={index} setCard={setCard}></Card>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </MainContainer>
  );
};



/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc: "https://media-photos.depop.com/b0/22911501/1318568877_7b5b115c28a2460da2c61d36368f677d/P0.jpg",
      title: "Cool Jacket",
      store: "Orange Circle Antique Mall",
      address: "118 S Glassell St, Orange, CA 92866",
      date: "12/05/2022 5:30PM",
      lat: 33.7874969,
      lng: -117.8510215,
      price: "$5.99",
      rating: "5.0",
      reviews: 87,
      url: "#",
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/36117628/1297742682_1934bb64fa3e4e2bb497bf101b126309/P0.jpg",
      title: "Awesome Jacket",
      store: "Orange Circle Antique Mall",
      address: "118 S Glassell St, Orange, CA 92866",
      date: "12/05/2022 5:30PM",
      lat: 33.7874969,
      lng: -117.8510215,
      price: "$2.99",
      rating: "4.8",
      reviews: 32,
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/10634385/858539930_74c3df9a154040ae9139acb6d06a3d94/P0.jpg",
      title: "Great Jacket",
      store: "Orange Circle Antique Mall",
      address: "118 S Glassell St, Orange, CA 92866",
      date: "12/05/2022 5:30PM",
      lat: 33.7874969,
      lng: -117.8510215,
      price: "$7.99",
      rating: "4.9",
      reviews: 89,
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/33456429/1303601520_0872ded128734933b10c621afd941348/P0.jpg",
      title: "Fantastic Jacket",
      store: "Orange Circle Antique Mall",
      address: "118 S Glassell St, Orange, CA 92866",
      date: "12/05/2022 5:30PM",
      lat: 33.7874969,
      lng: -117.8510215,
      price: "$8.99",
      rating: "4.6",
      reviews: 12,
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/16245975/1302160292_78e135ef035e4d2aa4681f1704eed9c9/P0.jpg",
      title: "Aesthetic Jacket",
      store: "Orange Circle Antique Mall",
      address: "118 S Glassell St, Orange, CA 92866",
      date: "12/05/2022 5:30PM",
      lat: 33.7874969,
      lng: -117.8510215,
      price: "$7.99",
      rating: "4.2",
      reviews: 19,
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/9437779/1278175646_5da5ffa2dd8c4efa8f2a1fd13f1f9e21/P0.jpg",
      title: "Nice Jacket",
      store: "Orange Circle Antique Mall",
      address: "118 S Glassell St, Orange, CA 92866",
      date: "12/05/2022 5:30PM",
      lat: 33.7874969,
      lng: -117.8510215,
      price: "$2.99",
      rating: "5.0",
      reviews: 61,
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/27722912/1025200380_a01b2c07b4ae40fcb954675ec83e4dab/P0.jpg",
      title: "Bad Jacket",
      store: "Orange Circle Antique Mall",
      address: "118 S Glassell St, Orange, CA 92866",
      date: "12/05/2022 5:30PM",
      lat: 33.7874969,
      lng: -117.8510215,
      price: "$3.99",
      rating: "4.2",
      reviews: 95,
      url: "#"
    },
    {
      imageSrc: "https://media-photos.depop.com/b0/3250448/616739410_1d437cc04db14aa28f396ea0296a6e5b/P0.jpg",
      title: "Stunning Jacket",
      store: "Orange Circle Antique Mall",
      address: "118 S Glassell St, Orange, CA 92866",
      date: "12/05/2022 5:30PM",
      lat: 33.7874969,
      lng: -117.8510215,
      price: "$3.99",
      rating: "3.9",
      reviews: 26,
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
