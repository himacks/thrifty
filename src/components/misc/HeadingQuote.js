import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import trashman from "../../images/trashman.png";

const Container = tw.div`bg-white p-20 font-serif text-center text-3xl flex flex-col text-black justify-center items-center`;
const ImgContainer = tw.div`w-24 mb-10`

export default ({text}) => {
    return (
        <Container>
            {text}
        </Container>
      );
}