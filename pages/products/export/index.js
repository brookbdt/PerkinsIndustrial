// Import necessary libraries and components
import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Flex, Text } from "../../../components/Base/";
import titleBar from "../../../assets/titlebar-bg.jpg";
import antDCollapse from "antd/lib/collapse";
// Import product images
import sesameImage from "../../../assets/sesame.png";
import kidneyBeanImage from "../../../assets/kidneyBean.png";
import soybeanImage from "../../../assets/soybean.png";
import mungBeanImage from "../../../assets/mungBean.png";
import coffeeImage from "../../../assets/coffee.png";
import Collapse from "antd/lib/collapse";

// Styled components
const ExportSection = styled.section`
  // Similar styling to ImportSection
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductSection = styled.div`
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const ProductDescription = styled.p`
  margin-top: 1rem;
  color: #666;
  font-size: 0.9rem;
`;

const BenefitsSection = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f8;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 4px;
    background-color: #00a2ff;
    bottom: -10px;
    left: 25%;
  }
`;

const BenefitList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const { Panel: antDpanel } = antDCollapse;

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

const BenefitItem = styled.div`
  padding: 1rem;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2.5rem;
  color: #00a2ff;
  margin-bottom: 1rem;
`;

const BenefitText = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Dummy data for sections
const benefits = [
  "Quality Assured Products",
  "Sustainable and Ethical Sourcing",
  "Competitive Pricing",
];

const testimonials = [
  {
    quote: "The quality of sesame seeds is unmatched. Highly recommend!",
    author: "John Doe",
  },
  {
    quote: "Our partnership has been fruitful, reliable export services.",
    author: "Jane Smith",
  },
];

const faqs = [
  {
    question: "How do you ensure product quality?",
    answer: "We follow strict quality control measures...",
  },
  {
    question: "Do you offer bulk orders?",
    answer: "Yes, we specialize in handling large orders efficiently...",
  },
];

// Export component
const ExportPage = () => {
  const products = [
    {
      name: "Sesame",
      image: sesameImage,
      description:
        "High-quality sesame seeds known for their rich, nutty flavor, ideal for culinary uses and oil extraction.",
    },
    {
      name: "Kidney Bean",
      image: kidneyBeanImage,
      description:
        "Versatile and nutritious kidney beans, perfect for hearty meals and rich in essential nutrients.",
    },
    {
      name: "Soybean",
      image: soybeanImage,
      description:
        "Soybeans, a key source of protein and oil, widely used in food products and animal feed.",
    },
    {
      name: "Mung Bean",
      image: mungBeanImage,
      description:
        "Mung beans, small, green, and nutritious, popular in Asian cuisine and for sprouting.",
    },
    {
      name: "Coffee",
      image: coffeeImage,
      description:
        "Premium coffee beans with a rich aroma and robust flavor, sourced from Ethiopia’s finest coffee regions.",
    },
  ];

  return (
    <>
      <StyledDiv>{/* Header content goes here */}</StyledDiv>
      <Head>{/* Head content goes here */}</Head>
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
            Export Facilitation and Market Access in Ethiopia
          </Text>

          <Text
            style={{ padding: "1rem" }}
            color="rgb(136,142,148)"
            fontSize="0.9rem"
            textAlign="justify"
            width="90%"
          >
            Facilitating global market access, we connect Ethiopian producers to
            international networks. Our commitment lies in providing unwavering
            support to importers worldwide, ensuring a seamless and reliable
            partnership. Staying connected with farmers across Ethiopia, we
            extend international market opportunities to local producers.
            Additionally, we offer steadfast support to importers abroad,
            ensuring a reliable and seamless partnership.
          </Text>

          <Collapse accordion expandIconPosition="end">
            <Panel
              header={"Extending International Market Opportunities"}
              key="1"
            >
              <Text
                style={{ padding: "1rem" }}
                color="rgb(136,142,148)"
                fontSize="0.9rem"
                ttextAlign="justify"
                width="90%"
              >
                To strengthen our global reach, we stay closely connected with
                farmers across Ethiopia. By doing so, we bring international
                market opportunities to the doorsteps of local producers. This
                not only empowers Ethiopian farmers but also contributes to the
                diversification of exportable goods and the overall growth of
                the agricultural sector.
              </Text>
              {/* Carousel for images */}
              {/* <CarouselContainer>
                <Carousel ref={carouselRef}>
                  {/* <Image src={generator11} alt="Generator Model 11" />
                  <Image src={generator12} alt="Generator Model 12" />
                  <Image src={generator13} alt="Generator Model 13" />
                  <Image src={generator10} alt="Generator Model 10" />
                  <Image src={generator9} alt="Rental Generator" />
                  <Image src={generator8} alt="Generator Model 8" />
                  <Image src={generator7} alt="Generator Model 7" />
                  <Image src={generator6} alt="Generator Model 6" />
                  <Image src={generator4} alt="Generator Model 4" />
                  <Image src={generator5} alt="Generator Model 5" />
                  <Image src={generator36} alt="Generator Model 36" /> */}
              {/* </Carousel>
              </CarouselContainer>*/}
            </Panel>
          </Collapse>
        </Flex>
      </Flex>

      <ExportSection>
        <Flex alignItems="center" background="#fff" direction="column">
          <ProductsGrid>
            {products.map((product) => (
              <ProductSection key={product.name}>
                <Text fontSize="2.1rem" fontWeight="bold">
                  {product.name}
                </Text>
                <ProductImage src={product.image} alt={product.name} />
                <ProductDescription>{product.description}</ProductDescription>
              </ProductSection>
            ))}
          </ProductsGrid>
        </Flex>
      </ExportSection>
      <BenefitsSection>
        <SectionTitle>Why Choose Our Products?</SectionTitle>
        <BenefitList>
          {/* Replace with actual benefits and icons */}
          <BenefitItem>
            <BenefitIcon>🌟</BenefitIcon>
            <BenefitText>Quality Assured Products</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>🌱</BenefitIcon>
            <BenefitText>Sustainable and Ethical Sourcing</BenefitText>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon>💰</BenefitIcon>
            <BenefitText>Competitive Pricing</BenefitText>
          </BenefitItem>
          {/* Add more benefits as needed */}
        </BenefitList>
      </BenefitsSection>
    </>
  );
};

export default ExportPage;
