import React, { useRef } from "react";
import "antd/dist/antd.css";
import Head from "next/head";
import styled from "styled-components";
import titleBar from "../../../assets/titlebar-bg.jpg";
import { Flex, Text, Button } from "../../../components/Base/";
import { AiOutlineHome } from "react-icons/ai";
import antDCollapse from "antd/lib/collapse";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import antDCarousel from "antd/lib/carousel";
import generator17 from "../../../assets/generators/generator17.jpg";
import generator18 from "../../../assets/generators/generator18.jpg";
import generator19 from "../../../assets/generators/generator19.jpg";
import generator20 from "../../../assets/generators/generator20.jpg";
import generator24 from "../../../assets/generators/generator24.jpg";
import generator25 from "../../../assets/generators/generator25.jpg";
import generator26 from "../../../assets/generators/generator26.jpg";
import generator27 from "../../../assets/generators/generator27.jpg";
import generator28 from "../../../assets/generators/generator28.jpg";
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
    border: 1px solid ##808080ff;
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
export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const carouselRef = useRef(null);
  return (
    <>
      <Head>
        <title>Switchgears</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledDiv>
        <Flex direction="column">
          <Text
            width="100%"
            mobileWidth="100%"
            fontSize="2rem"
            color="#fff"
            textAlign="center"
            fontWeight="bold"
            mobileTextAlign="center"
            mobileFontSize="2rem"
          >
            Switchgears
          </Text>
          <Flex width="100%" justifyContent="center" gap="0px"  widthMobile="80%">
          <Flex width="25%" directionMobile="row" widthMobile="90%" gap="5px">
              <Link href="/">
                <Flex
                  width="50%"
                  directionMobile="row"
                  widthMobile="80%"
                  justifyContent="center"
                  gap="0px"
                >
                  {" "}
                  <AiOutlineHome style={{ fontSize: "1.5rem" }} />
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    mobileFontSize="0.8rem"
                    textAlign="center"
                    fontWeight="bold"
                    cursor="pointer"
                    width="50%"
                    mobileWidth="60%"
                  >
                    Home
                  </Text>
                </Flex>
              </Link>
              /
              <Link href="/products">
                <Flex width="50%" directionMobile="row" widthMobile="60%">
                  <Text
                    fontSize="1rem"
                    mobileFontSize="0.8rem"
                    color="#fff"
                    textAlign="center"
                    fontWeight="bold"
                    cursor="pointer"
                  >
                    Products
                  </Text>{" "}
                </Flex>
              </Link>
              /
              <Flex width="50%" directionMobile="row" widthMobile="70%">
                <Text
                  fontSize="1rem"
                  mobileFontSize="0.8rem"
                  color="rgb(255, 199, 44)"
                  textAlign="center"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  Switchgears
                </Text>{" "}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </StyledDiv>
      <Flex alignItems="center" background="#fff">
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
            textAlign="left"
            width="90%"
            style={{marginLeft:'1rem'}}
          >
            Switchgears
          </Text>

          <Collapse accordion expandIconPosition="end">
            <Panel header={"Synchronization Panels"} key="1">
              <Text color="#808080" fontSize="0.9rem"           style={{padding:'1rem'}}>
                Synchronization Panels are effective solutions for a client
                seeking power at cyclic conditions or generally to get efficient
                higher rating power. Synchronization lengthens generator life as
                they share the load instead of being burdened and reliability is
                increased in the case of faults. We have our own assembled
                panels right here in UAE with quality parts and design. The
                enclosure is powder coated, 2mm GI steel sheet, & IP55 tested
                and certified.
                <br />
                <br />
                We use Deep Sea Electronics controllers 7510 or 8610 – Synchro
                Compatible and manufactured in the UK. They come with many
                features and benefits which you read more about here. The
                switch-gear are well-known brands such as Schneider and LS
                Metasol.
              </Text>
              <Flex
                style={{ position: "relative" }}
                justifyContent="center"
                alignItems="center"
                justifyContentMobile="center"
                alignItemsMobile="center"
                width="100%"
              >
                {" "}
                <LeftOutlined
                  style={{
                    color: "#808080",
                    fontSize: "2rem",
                    cursor: "pointer",
                    position: "absolute",
                    left: "0",
                    zIndex: "1",
                  }}
                  onClick={() => {
                    carouselRef.current.prev();
                  }}
                />
                <Carousel
                  ref={carouselRef}
                  style={{ height: "700px", width: "100%" }}
                >
                  <Flex
                    justifyContent="center"
                    height="500px"
                    width="800px"
                    position="relative"
                  >
                    <Image
                      objectFit="cover"
                      style={{ zIndex: "-1" }}
                      src={generator17}
                      alt="sliderImage"
                      layout="fill"
                      sizes="(min-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </Flex>
                  <Flex
                    justifyContent="center"
                    height="500px"
                    width="800px"
                    position="relative"
                  >
                    <Image
                      style={{ zIndex: "-1" }}
                      src={generator18}
                      alt="sliderImage"
                      layout="fill"
                      sizes="(min-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </Flex>
                  <Flex
                    justifyContent="center"
                    height="500px"
                    width="800px"
                    position="relative"
                  >
                    <Image
                      objectFit="cover"
                      style={{ zIndex: "-1" }}
                      src={generator19}
                      alt="sliderImage"
                      layout="fill"
                      sizes="(min-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </Flex>
                  <Flex
                    justifyContent="center"
                    height="500px"
                    width="800px"
                    position="relative"
                  >
                    <Image
                      objectFit="cover"
                      style={{ zIndex: "-1" }}
                      src={generator20}
                      alt="sliderImage"
                      layout="fill"
                      sizes="(min-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </Flex>
                  <Flex
                    justifyContent="center"
                    height="500px"
                    width="800px"
                    position="relative"
                  >
                    <Image
                      objectFit="cover"
                      style={{ zIndex: "-1" }}
                      src={generator24}
                      alt="sliderImage"
                      layout="fill"
                      sizes="(min-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </Flex>
                  <Flex
                    justifyContent="center"
                    height="500px"
                    width="800px"
                    position="relative"
                  >
                    <Image
                      objectFit="cover"
                      style={{ zIndex: "-1" }}
                      src={generator25}
                      alt="sliderImage"
                      layout="fill"
                      sizes="(min-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </Flex>
                  <Flex
                    justifyContent="center"
                    height="500px"
                    width="800px"
                    position="relative"
                  >
                    <Image
                      objectFit="cover"
                      style={{ zIndex: "-1" }}
                      src={generator26}
                      alt="sliderImage"
                      layout="fill"
                      sizes="(min-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </Flex>
                  <Flex
                    justifyContent="center"
                    height="500px"
                    width="800px"
                    position="relative"
                  >
                    <Image
                      objectFit="cover"
                      style={{ zIndex: "-1" }}
                      src={generator27}
                      alt="sliderImage"
                      layout="fill"
                      sizes="(min-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </Flex>
                  <Flex
                    justifyContent="center"
                    height="500px"
                    width="800px"
                    position="relative"
                  >
                    <Image
                      objectFit="cover"
                      style={{ zIndex: "-1" }}
                      src={generator28}
                      alt="sliderImage"
                      layout="fill"
                      sizes="(min-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </Flex>
                </Carousel>
                <RightOutlined
                  style={{
                    color: "#808080",
                    fontSize: "2rem",
                    cursor: "pointer",
                    position: "absolute",
                    right: "0",
                    zIndex: "1",
                  }}
                  onClick={() => {
                    carouselRef.current.next();
                  }}
                />
              </Flex>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right">
            <Panel header={"Transfer Switch Panel"} key="2">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right">
            <Panel header={"Distribution Panel"} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse expandIconPosition="right">
            <Panel header={"Control Panel"} key="4">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Flex>
      </Flex>
    </>
  );
}

//write an image slider component
