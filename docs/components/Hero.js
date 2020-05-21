import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.section`
    padding: 0 56px;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #1F2443;
    margin: 0 auto;
    box-sizing: border-box;
    @media screen and (min-width: 768px) {
        width: 1140px;
        justify-content: center;
    }
`
const Title = styled.h1`
    font-size: 40px;
    margin: 0 0 12px;
    font-weight: 500;
`
const Subtitle = styled.h2`
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 32px;
    font-weight: 300;
    text-align: center;
    width: 75%;
`
const Button = styled.a`
    padding: 24px 56px;
    background-color: #4FCDCF;
    color: #1F2443;
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    align-items: center;
`

const Hero = () => (
    <Container>
        <Title>Beautiful UI components</Title>
        <Subtitle>Fully designed and developed responsive HTML components for faster and easier web development.</Subtitle>
        <Button href='/components'>Browse Components</Button>
    </Container>
);


export default Hero;