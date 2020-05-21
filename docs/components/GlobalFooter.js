import Link from 'next/link';
import styled from 'styled-components';

const Section = styled.section`
    z-index: 9999;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 32px;
    background-color: #F8F8F8;
    box-sizing: border-box;
    @media screen and (min-width: 768px) {
        padding:0px 0px;
    }
`
const Container = styled.div`
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    @media screen and (min-width: 768px) {
        width: 100%;
        padding: 0 48px;
        justify-content: space-between;
    }
`
const Logo = styled.img`
    width: 32px;
    height: 32px;
    margin: 0px 0px 0px 0px;
`
const Menu = styled.div`
    width: 24px;
    height: 24px;
    display: block;
    @media screen and (min-width: 768px) {
        display: none;
    }
`
const Nav = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: flex;
    }
`
const NavItem = styled.a`
    color: ${p => p.theme.colors.N100};
    background-color: transparent;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0 36px 0 0;
    padding: 0;
    cursor: pointer;
    &:last-child {
        margin: 0;
    }
`
const Button = styled.div`
    padding: 12px 24px;
    background-color: #4FCDCF;
    color: ${p => p.theme.colors.N0};
    border-radius: 4px;
    font-weight: 400;
`

const GlobalFooter = (props) => (
    <Section>
        <Container>
            <NavItem>Copyright © 2020 Fiber UI.</NavItem>
            <Nav>
                <NavItem active>Designed and coded by Hamza Shahbaz</NavItem>
            </Nav>
        </Container>
    </Section>
);

export default GlobalFooter;