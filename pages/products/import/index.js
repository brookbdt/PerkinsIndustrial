// Import necessary libraries and components
import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";

import { Flex, Text } from "../../../components/Base/";
import antDCarousel from "antd/lib/carousel";
import antDCollapse from "antd/lib/collapse";
import titleBar from "../../../assets/titlebar-bg.jpg";
import generator11 from "../../../assets/generators/generator11.jpg";
import generator12 from "../../../assets/generators/generator12.jpg";
import generator13 from "../../../assets/generators/generator13.jpg";
import generator10 from "../../../assets/generators/generator10.jpg";
import generator9 from "../../../assets/generators/rental.jpg";
import generator8 from "../../../assets/generators/generator8.jpg";
import generator7 from "../../../assets/generators/generator7.jpg";
import generator6 from "../../../assets/generators/generator6.jpg";
import generator4 from "../../../assets/generators/generator4.jpg";
import generator5 from "../../../assets/generators/generator5.jpg";
import generator36 from "../../../assets/generators/generator36.jpg";
// Import assets

// Styled components
const Carousel = styled(antDCarousel)`
  width: 50rem !important;
  height: 40rem !important;
  @media (max-width: 1000px) {
    width: 24rem !important;
    height: 24rem !important;
  }
  @media (max-width: 763px) {
    width: 20rem !important;
    height: 20rem !important;
  }
  > .slick-dots li button {
    width: 14px;
    height: 14px;
    background: #808080ff;
    border-radius: 100%;
    border: 1px solid #fff;
  }
  > .slick-dots li.slick-active button {
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background: #808080ff;
    border: 1px solid #808080ff;
  }
`;
const text = `
Generators don't actually create electricity. Instead, they convert mechanical or chemical energy into electrical energy. They do this by capturing the power of motion and turning it into electrical energy by forcing electrons from the external source through an electrical circuit.
`;
const { Panel: antDpanel } = antDCollapse;
const Collapse = styled(antDCollapse)`
  &.ant-collapse {
    background: #fff !important;
  }
`;

const Panel = styled(antDpanel)`
  width: 70rem;
  margin-top: 0.5rem;
  @media (max-width: 1000px) {
    width: 24rem;
  }
  @media (max-width: 763px) {
    width: 20rem;
  }
  &.ant-collapse-item-active {
    background: rgb(255, 199, 44);
    font-size: 1rem;
    color: #fff !important;
    .ant-collapse-header {
      fontsize: 25px;
      color: #fff !important;
      font-weight: bold;
    }
  }
  &.ant-collapse-item {
    font-size: 1rem;
    .ant-collapse-header {
      font-size: 1rem;
      color: rgba(0, 48, 100, 1);
      font-weight: bold;
    }
  }
`;
const StyledDiv = styled.div`
  background-image: url(${titleBar.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 16rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
`;
const CarouselContainer = styled.div`
  width: 100%; // Adjust the width as needed
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styled Image Component for Carousel
const StyledImage = styled(Image)`
  display: block; // Ensure the image is a block element
  margin-left: auto;
  margin-right: auto;
  max-width: 100%; // Adjust as needed for responsive design
  height: auto; // Adjust if you have a fixed height for images
`;

const OilPetroleumSection = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      margin="2rem"
    >
      {/* Section Title and Description */}
      <Text>{/* Title and Description for Oil Petroleum */}</Text>

      <Collapse accordion expandIconPosition="end">
        <Panel header="Detailed Oil Petroleum Information" key="2">
          <Text>
            The Oil Petroleum sector is a cornerstone of the global energy
            market, crucial for powering industries, transportation, and
            residential needs. Our oil petroleum products are sourced from the
            world&apos;s leading producers, ensuring top-quality, efficiency,
            and environmental compliance. Our range includes crude oil, refined
            petroleum, and specialty lubricants, each rigorously tested to meet
            stringent industry standards. We emphasize sustainable practices,
            aiming to balance energy needs with environmental stewardship.
          </Text>

          {/* Carousel or other content for Oil Petroleum */}
        </Panel>
      </Collapse>
    </Flex>
  );
};

// Paint Manufacturing Section
const PaintManufacturingSection = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      margin="2rem"
    >
      {/* Section Title and Description */}
      <Text>{/* Title and Description for Paint Manufacturing */}</Text>

      <Collapse accordion expandIconPosition="end">
        <Panel header="Detailed Paint Manufacturing Information" key="3">
          <Text>
            In the world of Paint Manufacturing, we take pride in offering a
            spectrum of solutions for both industrial and residential use. Our
            product line includes high-quality, durable paints designed for
            various applications, from protective coatings for machinery to
            vibrant colors for home interiors. Our innovative formulations
            ensure long-lasting finishes, resistance to weathering, and minimal
            environmental impact. We continuously work towards sustainable
            manufacturing processes, ensuring our products are both eco-friendly
            and user-safe.
          </Text>

          {/* Carousel or other content for Paint Manufacturing */}
        </Panel>
      </Collapse>
    </Flex>
  );
};

// Construction & Real Estate Development Section
const ConstructionRealEstateSection = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      margin="2rem"
    >
      {/* Section Title and Description */}
      <Text>
        {/* Title and Description for Construction & Real Estate Development */}
      </Text>

      <Collapse accordion expandIconPosition="end">
        <Panel header="Detailed Construction & Real Estate Information" key="4">
          <Text>
            Our Construction and Real Estate Development section showcases a
            portfolio of projects ranging from commercial complexes to
            residential buildings. We emphasize modern design, sustainability,
            and smart technology integration. Our projects are crafted to meet
            the highest standards of quality and safety, ensuring lasting value.
            We also offer real estate development services, including property
            management, market analysis, and investment opportunities. Our aim
            is to create spaces that blend functionality with aesthetic appeal,
            enhancing community living and working environments.
          </Text>

          {/* Carousel or other content for Construction & Real Estate */}
        </Panel>
      </Collapse>
    </Flex>
  );
};

// Main component
const ImportPage = () => {
  const carouselRef = useRef(null);
  return (
    <>
      <Head>{/* Head content goes here */}</Head>

      <StyledDiv>{/* Header content goes here */}</StyledDiv>

      <Flex alignItems="center" background="#fff" direction="column">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          margin="2rem"
        >
          <Text
            color="rgba(0, 48, 100, 1)"
            fontSize="2.1rem"
            mobileFontSize="2rem"
            fontWeight="bold"
            textAlign="justify"
            width="90%"
            style={{ marginLeft: "1rem" }}
          >
            Generator Import
          </Text>

          <Text
            style={{ padding: "1rem" }}
            color="rgb(136,142,148)"
            fontSize="0.9rem"
            textAlign="justify"
            width="90%"
          >
            We provide a wide range of high-quality generators suitable for
            various applications. Our generators ensure reliable power supply,
            optimized for efficiency and durability. Explore our collection to
            find the perfect fit for your industrial, residential, or commercial
            needs.
          </Text>

          <Collapse accordion expandIconPosition="end">
            <Panel header={"Detailed Generator Information"} key="1">
              <Text
                style={{ padding: "1rem" }}
                color="rgb(136,142,148)"
                fontSize="0.9rem"
                ttextAlign="justify"
                width="90%"
              >
                Our generators are sourced from top manufacturers and are
                designed to meet a variety of power requirements. Features
                include low noise levels, fuel efficiency, and robust
                construction. Suitable for both standby and continuous power
                needs, they are ideal for critical applications in healthcare,
                construction, and data centers.
              </Text>
              {/* Carousel for images */}
              <CarouselContainer>
                <Carousel ref={carouselRef}>
                  <Image src={generator11} alt="Generator Model 11" />
                  <Image src={generator12} alt="Generator Model 12" />
                  <Image src={generator13} alt="Generator Model 13" />
                  <Image src={generator10} alt="Generator Model 10" />
                  <Image src={generator9} alt="Rental Generator" />
                  <Image src={generator8} alt="Generator Model 8" />
                  <Image src={generator7} alt="Generator Model 7" />
                  <Image src={generator6} alt="Generator Model 6" />
                  <Image src={generator4} alt="Generator Model 4" />
                  <Image src={generator5} alt="Generator Model 5" />
                  <Image src={generator36} alt="Generator Model 36" />
                </Carousel>
              </CarouselContainer>
            </Panel>
          </Collapse>
        </Flex>
        <OilPetroleumSection />
        <PaintManufacturingSection />
        <ConstructionRealEstateSection />
      </Flex>
    </>
  );
};

export default ImportPage;
