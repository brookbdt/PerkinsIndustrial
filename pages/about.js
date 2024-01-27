import React from "react";
import Footer from "../components/Footer";
import "antd/dist/antd.css";
import Head from "next/head";
import styled from "styled-components";
import titleBar from "../assets/titlebar-bg.jpg";
import { Flex, Text, Button } from "../components/Base";
import { AiOutlineHome } from "react-icons/ai";
import Progress from "antd/lib/progress";
import antDCollapse from "antd/lib/collapse";
// import commitmentImage from "../assets/About-Us-Lowerf.jpg";
import dotBackground from "../assets/dotbackground.png";
import Image from "next/image";
import Link from "next/link";
import Form from "antd/lib/form";
// import Input from "antd/lib/input";
import Select from "antd/lib/select";
// import TextArea from "antd/lib/input/TextArea";
import LowerImage from "../assets/Lower-3.jpg";
import { GoLocation } from "react-icons/go";
import antDCarousel from "antd/lib/carousel";
import generator1 from "../assets/generators/generator1.jpg";
import generator2 from "../assets/generators/generator2.jpg";
import generator3 from "../assets/generators/generator4.jpg";
import generator4 from "../assets/generators/generator5.jpg";
import generator5 from "../assets/generators/generator6.jpg";
import generator6 from "../assets/generators/generator7.jpg";
const ImageContainer = styled.div`
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "420px"};
  position: relative;
  @media (max-width: 1000px) {
    width: ${(props) => props.mobileWidth || "360px"};
    height: ${(props) => props.mobileHeight || "680px"};
  }
`;

const { Option } = Select;
const Collapse = styled(antDCollapse)`
  &.ant-collapse {
    background: #fff !important;
  }
`;
const Carousel = styled(antDCarousel)`
  width: 500px !important;
  height: 500px !important;
  @media (max-width: 1000px) {
    width: 400px !important;
    height: 500px !important;
  }
`;

const text = `
Generators don't actually create electricity. Instead, they convert mechanical or chemical energy into electrical energy. They do this by capturing the power of motion and turning it into electrical energy by forcing electrons from the external source through an electrical circuit.

`;
const { Panel: antDpanel } = antDCollapse;

const Panel = styled(antDpanel)`
  width: 35rem;
  @media (max-width: 1000px) {
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
const PowerSectionContainer = styled.section`
  width: 100%;
  padding: 6rem;
  background: #fff;
  @media (max-width: 1000px) {
    padding: 0.5rem;
  }
`;
const AboutDescription = styled.div`
  padding: 1rem;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  background-color: #fff;
  width: 60%;
  height: 100%;
  position: relative;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const CommitmentSection = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #fff;
`;
const CommitmentInsideSection = styled.section`
  width: 27rem;
  height: 40rem;
  background-color: #fff;
  background-size: cover;
  position: relative;
  background-image: url(${LowerImage.src});
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const CommitmentContent = styled.div`
  width: 80rem;
  background-color: #fff;
  padding: 0 2rem;
  position: absolute;
  inset: 5rem 2rem 2rem 2rem;
  position: absolute;
  @media (max-width: 1000px) {
    padding: 2rem;
    width: 100%;

    inset: 0;
  }
`;
const ContactSectionHeader = styled.div`
  background-image: url(${titleBar.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
  z-index: -1;
  padding: 1rem;
  @media (max-width: 1000px) {
    margin-top: 20rem;
  }
`;
const ContactSection = styled.section`
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
  @media (max-width: 1000px) {
    margin-top: 10rem;
  }
`;
//center an absolute element
const QuoteSection = styled.div`
  position: absolute;
  padding: 0 5rem;
  left: 50%;
  transform: translate(-50%, -16%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${dotBackground.src});
  z-index: 1;
  @media (max-width: 1000px) {
    width: 100%;
    position: relative;
    transform: translate(-50%, -0%);
    padding: 0;
  }
`;
const FormContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 2rem;
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;
const QuoteImageContaier = styled.div`
  background-image: url(${LowerImage.src});
  height: 34rem;
  width: 40%;
  background-size: contain;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 4rem 0;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
    background: none;
  }
`;
const OurFacility = styled.section`
  width: 18rem;
  height: 15rem;
  background-color: rgb(255, 199, 44);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  @media (max-width: 1000px) {
    width: 90%;
    margin: 1rem;
  }
`;
const FooterHeader = styled.div`
  height: 70rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ScrollableContent = styled.div`
  max-height: 200px; // Set a fixed height as per your requirement
  overflow-y: auto; // Enable vertical scrolling
  padding-right: 5px; // Optional, for better readability
`;
const About = () => {
  const workers = [
    generator1,
    generator2,
    generator3,
    generator4,
    generator5,
    generator6,
  ];
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(
        <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
      );
    }

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div > */}
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
            About Us
          </Text>
          <Flex width="100%" justifyContent="center" gap="0px">
            <Flex width="20%" directionMobile="row" widthMobile="60%" gap="0px">
              <Link href="/">
                <Flex
                  width="50%"
                  directionMobile="row"
                  widthMobile="50%"
                  justifyContent="center"
                  gap="0px"
                >
                  {" "}
                  <AiOutlineHome style={{ fontSize: "1.5rem" }} />
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    textAlign="center"
                    fontWeight="bold"
                    cursor="pointer"
                    width="50%"
                    mobileWidth="40%"
                  >
                    Home
                  </Text>
                </Flex>
              </Link>
              /
              <Flex width="50%" directionMobile="row" widthMobile="40%">
                <Text
                  fontSize="1rem"
                  color="rgb(255, 199, 44)"
                  textAlign="center"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  About Us
                </Text>{" "}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </StyledDiv>
      <PowerSectionContainer>
        <Flex alignItems="start" gap="1.5rem">
          <Carousel autoplay dots={false}>
            {workers.map((worker, index) => {
              return (
                <ImageContainer key={index} height="500px">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    sizes="(min-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
                    src={worker}
                    alt="compony workers"
                  />
                </ImageContainer>
              );
            })}
          </Carousel>
          <AboutDescription>
            <Text
              color="rgb(136,142,148)"
              fontSize="1.2rem"
              fontWeight="bold"
              textAlign="left"
            >
              {" "}
              About Us
            </Text>
            <Text
              color="rgba(0, 48, 100, 1)"
              fontSize="2rem"
              mobileFontSize="2rem"
              fontWeight="bold"
              textAlign="justify"
            >
              {" "}
              Powering Your Business
            </Text>
            <Text
              color="rgb(136,142,148)"
              fontSize="1rem"
              // textAlign="left"
              textAlign="justify"
            >
              {" "}
              Perkins, for over 80 years, has worked with generator set
              manufacturers to bring light, warmth, protection and of course
              peace of mind to thousands of people. Perkins Ethiopia now
              supplies the best of these world-class tools. running every day or
              once a year, you can count on our people to create innovative,
              efficient and reliable solutions whatever your application.
              PERKINS INDUSTRIAL is the EXCLUSIVE DEALER for Perkins Generator
              set, UK. Perkins Industrial in the territory of Ethiopia. We in
              the process of establishing a Generator Manufacturing Plant right
              here in Ethiopia, Addis Ababa under Perkins Generator UK.
            </Text>
            <Text
              color="rgba(0, 48, 100, 1)"
              fontSize="1.3rem"
              mobileFontSize="1.8rem"
              fontWeight="bold"
              textAlign="left"
            >
              What is Our Mission
            </Text>
            <Text
              color="rgb(136,142,148)"
              fontSize="1rem"
              // textAlign="left"
              textAlign="justify"
            >
              To develop lasting client relationship by providing exceptional
              service and products. Our main objective being lighting up all of
              Africa with our high quality Generators.
            </Text>
            <Text
              color="rgba(0, 48, 100, 1)"
              fontSize="1.3rem"
              mobileFontSize="1.8rem"
              fontWeight="bold"
              // textAlign="left"
              textAlign="justify"
            >
              What Is Our Vision?
            </Text>
            <Text
              color="rgb(136,142,148)"
              fontSize="1rem"
              // textAlign="left"
              textAlign="justify"
            >
              To be the benchmark for Diesel engine Generator, production,
              assembly and maintenance world wide. Starting from Ethiopia, we
              wish to be recognized for the values that we stand for as a humble
              company
            </Text>
          </AboutDescription>
        </Flex>
      </PowerSectionContainer>
      <CommitmentSection>
        <Flex justifyContent="end">
          <CommitmentInsideSection></CommitmentInsideSection>
        </Flex>
        <CommitmentContent>
          <Flex alignItems="start">
            <Flex direction="column" alignItems="start">
              <Text
                color="rgba(0, 48, 100, 1)"
                fontSize="2.3rem"
                mobileFontSize="2rem"
                fontWeight="bold"
                textAlign="left"
              >
                Our Commitment To You
              </Text>
              <Collapse accordion expandIconPosition="end">
                <Panel header={"Dependable and Quality Products"} key="1">
                  <p>
                    Our generators are configured to meet your needs, including
                    choice of containment, cold weather packages and trailer
                    options. For ultimate flexibility, most of our mobile
                    generators come parallel-ready, enabling a scalable approach
                    to power – parallel up to 32 units. Our mobile generators
                    are manufactured to deliver the reliable power you need,
                    when and where you need it.
                  </p>
                </Panel>
              </Collapse>
              <Collapse expandIconPosition="right">
                <Panel header={"End-to-End Customizable Solutions"} key="2">
                  <ScrollableContent>
                    <p>
                      Our Genset is consisting of imported Perkins diesel
                      engines manufactured from the UK/USA from 400 series all
                      the way to 4000 series and coupling the engines with
                      alternators from various suppliers such as Leroysomer
                      France and Linz Italy. The alternators come with quality
                      AVR such as the R120 to R250 or SX440 and the voltage
                      level can be adjusted by terminal arrangement as per
                      client requirement. The control panel consists of a
                      digital controller from Deep Sea Electronics UK coming
                      with features such AMF, configurable timers and alarms,
                      compatible with a wide range of CAN engines, uses DSE
                      Configuration Suite PC software. We have a capable team
                      for Generator repair and Troubleshooting in Ethiopia, as
                      per our contract we will have our Electromechanical
                      technicians on standby for any service requirement across
                      the country, and troubleshooting of engines to keep your
                      engine feeling great.{" "}
                    </p>
                  </ScrollableContent>
                </Panel>
              </Collapse>
              <Collapse expandIconPosition="right">
                <Panel header={"Efficient and Expect Customer Support"} key="3">
                  <p>
                    These are our core values: Integrity Quality Reliability
                    Trust Teamwork With our every interaction within staff
                    members and customers we will always exercise our core
                    values.
                  </p>
                </Panel>
              </Collapse>
            </Flex>
            <Flex direction="column" alignItems="start">
              <Text
                color="rgba(0, 48, 100, 1)"
                fontSize="2.3rem"
                mobileFontSize="2rem"
                fontWeight="bold"
                textAlign="left"
              >
                We Are The Experts In Power Solutions.
              </Text>
              <Text
                color="rgb(136,142,148)"
                fontSize="1rem"
                // textAlign="left"
                textAlign="justify"
              >
                We have a long and proud history of providing energy solutions
                to various environments and fields.
              </Text>
              <Text color="rgb(136,142,148)" fontSize="1rem" fontWeight="bold">
                Industrial
              </Text>
              <Progress
                strokeColor={"rgb(255, 199, 44)"}
                strokeWidth={11}
                percent={96}
                size="large"
                status="active"
                style={{
                  fontWeight: "bold",
                  color: "rgba(0, 48, 100, 1)",
                }}
              />
              <Text color="rgb(136,142,148)" fontSize="1rem" fontWeight="bold">
                Construction
              </Text>
              <Progress
                strokeColor={"rgb(255, 199, 44)"}
                strokeWidth={11}
                percent={96}
                size="large"
                status="active"
                style={{
                  fontWeight: "bold",
                  color: "rgba(0, 48, 100, 1)",
                }}
              />
              <Text color="rgb(136,142,148)" fontSize="1rem" fontWeight="bold">
                Hospitality
              </Text>
              <Progress
                strokeColor={"rgb(255, 199, 44)"}
                strokeWidth={11}
                percent={94}
                size="large"
                status="active"
                style={{
                  fontWeight: "bold",
                  color: "rgba(0, 48, 100, 1)",
                }}
              />
            </Flex>
          </Flex>
        </CommitmentContent>
      </CommitmentSection>
      <ContactSection>
        <ContactSectionHeader>
          <Flex direction="column">
            <Text
              color="rgb(255, 199, 44) "
              fontSize="1rem"
              mobileFontSize="1rem"
              fontWeight="bold"
              width="100%"
              textAlign="center"
            >
              CONTACT DETAILS
            </Text>
            <Text
              color="#fff"
              fontSize="2.5rem"
              mobileFontSize="2.5rem"
              fontWeight="bold"
              width="100%"
              textAlign="center"
            >
              How can we help you ?
            </Text>
          </Flex>
        </ContactSectionHeader>

        <QuoteSection>
          <Flex justifyContent="space-between" background="#fff">
            <FormContainer>
              <Text
                color="rgb(136,142,148)"
                fontSize="1.2rem"
                fontWeight="bold"
                width="100%"
                textAlign="left"
              >
                Free Consultation
              </Text>
              <Text
                color="rgba(0, 48, 100, 1)"
                fontSize="2.5rem"
                fontWeight="bold"
                width="100%"
                textAlign="left"
              >
                Get a free Quote?
              </Text>
              <Link href="/contact">
                <Form.Item>
                  <Button
                    width="80%"
                    background="rgb(255, 199, 44)"
                    hoverbackground="rgba(0, 48, 100, 1)"
                    height="3rem"
                  >
                    Get a free quote
                  </Button>
                </Form.Item>
              </Link>
            </FormContainer>
            <QuoteImageContaier>
              <OurFacility>
                <GoLocation fontSize="2rem" />
                <Text
                  color="#fff"
                  fontSize="1.5rem"
                  fontWeight="bold"
                  width="100%"
                  textAlign="center"
                >
                  {" "}
                  Visit Our Facility
                </Text>
                <Text
                  color="#fff"
                  fontSize="1rem"
                  width="100%"
                  textAlign="center"
                >
                  {" "}
                  Woreda 03, Bole Addis Ababa Zone, Ethiopia
                </Text>
              </OurFacility>
            </QuoteImageContaier>
          </Flex>
        </QuoteSection>
      </ContactSection>
      {/* </div> */}
      {/* <FooterHeader></FooterHeader> */}
      <Footer />
    </>
  );
};

export default About;
