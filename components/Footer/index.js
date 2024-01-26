import React from "react";
import { Text, Flex, Button } from "../Base";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { BsTelephoneFill } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import styled from "styled-components";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const FooterContainer = styled.div`
  @media (max-width: 1000px) {
    position: relative;
  }
`;
const SectionWrapper = styled.div`
  max-width: 1200px; /* Set your desired maximum width */
  margin: 0 auto;
`;

export default function Footer() {
  return (
    <>
      <FooterContainer
        style={{ background: "rgba(0, 48, 100, 1)", padding: "4rem" }}
      >
        <SectionWrapper>
          <Flex
            justifyContent="space-between"
            alignItems="start"
            direction="row"
            width="100%"
            padding="2rem"
            paddingMobile="1rem"
            gap="3rem"
          >
            <Flex
              // style={{ marginRight: "1rem" }}
              direction="column"
              gap="1rem"
              gapMobile="2rem"
              alignItems="start"
              width="37%" // Adjusted width for consistency
            >
              <Flex
                direction="column"
                gap="1rem"
                gapMobile="2rem"
                alignItems="start"
              >
                <Text
                  color="#fff"
                  fontSize="1.3rem"
                  fontWeight="500"
                  mobileFontSize="1.3rem"
                >
                  Get in Touch
                </Text>
                <Flex directionMobile="row">
                  <GoLocation
                    fontSize="1.5rem"
                    color="rgb(255, 199, 44)"
                    style={{ marginRight: "0.7rem" }}
                  />
                  <Text color="#fff" fontSize="1rem">
                    Woreda 03, Bole Addis Ababa Zone, Ethiopia
                  </Text>
                </Flex>
                <Flex directionMobile="row">
                  <AiOutlineMail
                    fontSize="1.5rem"
                    color="rgb(255, 199, 44)"
                    style={{ marginRight: "0.9rem" }}
                  />
                  <Text color="#fff" fontSize="1rem">
                    info@perkinsindustrial.com
                  </Text>
                </Flex>
                <Flex directionMobile="row">
                  <BsTelephoneFill
                    fontSize="1.5rem"
                    color="rgb(255, 199, 44)"
                    style={{ marginRight: "0.7rem" }}
                  />
                  <Flex direction="column">
                    <Text
                      color="#fff"
                      fontSize="1rem"
                      mobileWhiteSpace="nowrap"
                    >
                      +251 114 700 101
                    </Text>
                    <Text
                      color="#fff"
                      fontSize="1rem"
                      margin="0 0 0 1rem"
                      mobileWhiteSpace="nowrap"
                    >
                      {" "}
                      +251 114 700 202
                    </Text>
                    <Text
                      color="#fff"
                      fontSize="1rem"
                      margin="0 0 0 1rem"
                      mobileWhiteSpace="nowrap"
                    >
                      {" "}
                      +251 111 267 716
                    </Text>
                  </Flex>
                </Flex>
                <Flex directionMobile="row">
                  <GoGlobe
                    fontSize="1.5rem"
                    color="rgb(255, 199, 44)"
                    style={{ marginRight: "0.1rem" }}
                  />
                  <Text color="#fff" fontSize="1rem">
                    https://www.PerkinsIndustrial.com
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              direction="column"
              gap="1rem"
              gapMobile="2rem"
              alignItems="start"
              width="25%" // Adjusted width for consistency
            >
              <Flex
                directionMobile="row"
                wrap="wrap"
                wrapMobile="wrap"
                gap="6px"
                width="100%"
              >
                <Text
                  color="#fff"
                  fontSize="1.3rem"
                  fontWeight="500"
                  mobileFontSize="1.3rem"
                >
                  Products and Services
                </Text>

                <Flex direction="column" gap="1rem" width="100%">
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    // width="60%"
                    mobileWhiteSpace="nowrap"
                  >
                    <GiCheckMark
                      fontSize="1rem"
                      color="rgb(255, 199, 44)"
                      style={{ marginRight: "0.7rem" }}
                    />
                    Generators
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    // width="50%"
                    mobileWhiteSpace="nowrap"
                  >
                    <GiCheckMark
                      fontSize="1rem"
                      color="rgb(255, 199, 44)"
                      style={{ marginRight: "0.7rem" }}
                    />
                    Paint Factory
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    // width="50%"
                    mobileWhiteSpace="nowrap"
                  >
                    <GiCheckMark
                      fontSize="1rem"
                      color="rgb(255, 199, 44)"
                      style={{ marginRight: "0.7rem" }}
                    />
                    Other Products
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="1rem"
                    // width="40%"
                    mobileWhiteSpace="nowrap"
                  >
                    <GiCheckMark
                      fontSize="1rem"
                      color="rgb(255, 199, 44)"
                      style={{ marginRight: "0.7rem" }}
                    />
                    Services
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              direction="column"
              gap="1rem"
              gapMobile="2rem"
              alignItems="start"
              width="25%" // Adjusted width for consistency
            >
              <Flex justifyContent="space-between" width="100%">
                <Flex direction="column">
                  <Text
                    color="#fff"
                    fontSize="1.3rem"
                    fontWeight="500"
                    mobileFontSize="1.3rem"
                  >
                    Links
                  </Text>
                  <Link href="/terms">
                    <Text
                      hoverColor="rgb(255, 199, 44)"
                      color="#fff"
                      fontSize="1rem"
                      // width="40%"
                      mobileWhiteSpace="nowrap"
                    >
                      Terms of Service
                    </Text>
                  </Link>
                  <Link href="/privacy">
                    <Text
                      hoverColor="rgb(255, 199, 44)"
                      color="#fff"
                      fontSize="1rem"
                      // width="40%"
                      mobileWhiteSpace="nowrap"
                    >
                      Privacy Policy
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              direction="column"
              // gap="1rem"
              gapMobile="2rem"
              alignItems="start"
              width="25%" // Adjusted width for consistency
            >
              <Flex
                direction="column"
                // gap="1rem"
                gapMobile="2rem"
                alignItems="start"
              >
                <Text
                  color="#fff"
                  fontSize="1.3rem"
                  fontWeight="500"
                  mobileFontSize="1.3rem"
                >
                  Get a Free Estimate
                </Text>
                <Text color="#fff" fontSize="0.8rem" fontWeight="bold">
                  Call us now
                </Text>
                <Text
                  color="rgb(255, 199, 44)"
                  fontSize="1.8rem"
                  mobileFontSize="1.8rem"
                  fontWeight="bold"
                >
                  +251 111 267 716
                </Text>
                <Flex direction="row" gap="1rem">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF
                      color="#fff"
                      fontSize="1.5rem"
                      style={{ marginRight: "1rem" }}
                    />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn
                      color="#fff"
                      fontSize="1.5rem"
                      style={{ marginRight: "1rem" }}
                    />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp
                      color="#fff"
                      fontSize="1.5rem"
                      style={{ marginRight: "1rem" }}
                    />
                  </a>
                </Flex>

                {/* <Flex justifyContent="start" width="40%">
                                <Button
                                    background="transparent"
                                    color="rgb(255, 199, 44)"
                                    border="1px solid rgb(255, 199, 44)"
                                    height="3rem"
                                    mobileHeight="2.5rem"
                                    mobileWidth="8rem"
                                    fontSize="1rem"
                                    mobileFontSize="0.7rem"
                                    width="8rem"
                                >
                                    {' '}
                                    Visit Us
                                </Button>
                            </Flex> */}
              </Flex>
            </Flex>
          </Flex>
        </SectionWrapper>
        <Flex
          justifyContent="space-between"
          alignItems="start"
          direction="row"
          width="100%"
          margin="10px"
          padding="1.5rem"
        >
          <Text color="#fff" mobileFontSize="0.5rem">
            Copyright © 2023 Perkins Industrial All rights reserved. Designed by
            &nbsp;
            <a
              style={{
                color: "#fff",
                textDecoration: "underline",
              }}
              href="https://kelaltech.com/"
            >
              Kelaltech.com
            </a>
          </Text>

          <Flex
            width="100%"
            justifyContent="end"
            alignItems="start"
            directionMobile="row"
          >
            <Link href="/">
              <Text
                width="10%"
                mobileWidth="13%"
                hoverColor="rgb(255, 199, 44)"
                color="#fff"
                fontSize="0.8rem"
                mobileFontSize="0.5rem"
              >
                Home |
              </Text>
            </Link>
            <Link href="/about">
              <Text
                width="12%"
                mobileWidth="18%"
                hoverColor="rgb(255, 199, 44)"
                color="#fff"
                fontSize="0.8rem"
                mobileFontSize="0.5rem"
              >
                {" "}
                About Us |
              </Text>
            </Link>
            <Link href="/products/generators">
              <Text
                width="25%"
                mobileWidth="18%"
                hoverColor="rgb(255, 199, 44)"
                color="#fff"
                fontSize="0.8rem"
                mobileFontSize="0.5rem"
              >
                {" "}
                Products & Services |
              </Text>
            </Link>
            <Link href="/contact">
              <Text
                width="14%"
                mobileWidth="18%"
                hoverColor="rgb(255, 199, 44)"
                color="#fff"
                fontSize="0.8rem"
                mobileFontSize="0.5rem"
              >
                {" "}
                Contact Us |
              </Text>
            </Link>
          </Flex>
        </Flex>
      </FooterContainer>
    </>
  );
}
