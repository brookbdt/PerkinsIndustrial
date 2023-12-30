// Import necessary libraries and components
import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineHome } from 'react-icons/ai'
import { Flex, Text } from '../../../components/Base/'
import antDCarousel from 'antd/lib/carousel'
import antDCollapse from 'antd/lib/collapse'

// Import product images
import sesameImage from '../../../assets/sesame.png'
import kidneyBeanImage from '../../../assets/kidneyBean.png'
import soybeanImage from '../../../assets/soybean.png'
import mungBeanImage from '../../../assets/mungBean.png'
import coffeeImage from '../../../assets/coffee.png'

// Styled components
const ExportSection = styled.section`
    // Similar styling to ImportSection
`

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ProductSection = styled.div`
    text-align: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

const ProductImage = styled(Image)`
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
`

const ProductDescription = styled.p`
    margin-top: 1rem;
    color: #666;
    font-size: 0.9rem;
`

const BenefitsSection = styled.section`
    padding: 4rem 2rem;
    background: #f4f4f8;
    text-align: center;
`

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        width: 50%;
        height: 4px;
        background-color: #00a2ff;
        bottom: -10px;
        left: 25%;
    }
`

const BenefitList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const BenefitItem = styled.div`
    padding: 1rem;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
    }
`

const BenefitIcon = styled.div`
    font-size: 2.5rem;
    color: #00a2ff;
    margin-bottom: 1rem;
`

const BenefitText = styled.p`
    font-size: 1rem;
    color: #555;
`

// Dummy data for sections
const benefits = [
    'Quality Assured Products',
    'Sustainable and Ethical Sourcing',
    'Competitive Pricing',
]

const testimonials = [
    {
        quote: 'The quality of sesame seeds is unmatched. Highly recommend!',
        author: 'John Doe',
    },
    {
        quote: 'Our partnership has been fruitful, reliable export services.',
        author: 'Jane Smith',
    },
]

const faqs = [
    {
        question: 'How do you ensure product quality?',
        answer: 'We follow strict quality control measures...',
    },
    {
        question: 'Do you offer bulk orders?',
        answer: 'Yes, we specialize in handling large orders efficiently...',
    },
]

// Export component
const ExportPage = () => {
    const products = [
        {
            name: 'Sesame',
            image: sesameImage,
            description:
                'High-quality sesame seeds known for their rich, nutty flavor, ideal for culinary uses and oil extraction.',
        },
        {
            name: 'Kidney Bean',
            image: kidneyBeanImage,
            description:
                'Versatile and nutritious kidney beans, perfect for hearty meals and rich in essential nutrients.',
        },
        {
            name: 'Soybean',
            image: soybeanImage,
            description:
                'Soybeans, a key source of protein and oil, widely used in food products and animal feed.',
        },
        {
            name: 'Mung Bean',
            image: mungBeanImage,
            description:
                'Mung beans, small, green, and nutritious, popular in Asian cuisine and for sprouting.',
        },
        {
            name: 'Coffee',
            image: coffeeImage,
            description:
                'Premium coffee beans with a rich aroma and robust flavor, sourced from Ethiopia’s finest coffee regions.',
        },
    ]

    return (
        <>
            <Head>{/* Head content goes here */}</Head>

            <ExportSection>
                <Flex alignItems="center" background="#fff" direction="column">
                    <ProductsGrid>
                        {products.map((product) => (
                            <ProductSection key={product.name}>
                                <Text fontSize="2.1rem" fontWeight="bold">
                                    {product.name}
                                </Text>
                                <ProductImage
                                    src={product.image}
                                    alt={product.name}
                                />
                                <ProductDescription>
                                    {product.description}
                                </ProductDescription>
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
                        <BenefitText>
                            Sustainable and Ethical Sourcing
                        </BenefitText>
                    </BenefitItem>
                    <BenefitItem>
                        <BenefitIcon>💰</BenefitIcon>
                        <BenefitText>Competitive Pricing</BenefitText>
                    </BenefitItem>
                    {/* Add more benefits as needed */}
                </BenefitList>
            </BenefitsSection>
        </>
    )
}

export default ExportPage
