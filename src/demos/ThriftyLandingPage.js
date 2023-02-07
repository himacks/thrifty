import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import HeadingQuote from "components/misc/HeadingQuote";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Popup from "components/misc/Popup";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-800 font-retroCool text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  const [card, setCard] = React.useState(undefined);

  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Find Thrifted <HighlightedText>Clothes Near You.</HighlightedText></>}
        description="In 2018, 17 million tons of textile waste emerged from the clothing industry while only 2.5 million tons were recycled."
        enableImage={false}
        primaryButtonText={"Be the change."}
      />
      <HeadingQuote text={"We need to responsibly manage our planet so that there is a sustainable future for the generations to come. When clothing trends change faster than ice turning to liquid, clothing turns into a dispensable commodity: merely a piece of trash."} />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <div id="clothingColl" style={{position: "relative"}}>
        {card && <Popup card={card} setCard={setCard}/>}
        <TabGrid
            heading={
            <>
                Checkout the <HighlightedText>latest finds.</HighlightedText>
            </>
            }
            setCard={setCard}
        />
      </div>
      <Footer />
    </AnimationRevealPage>
  );
}
