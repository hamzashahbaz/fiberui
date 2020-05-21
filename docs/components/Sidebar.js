import Link from 'next/link';
import styled from 'styled-components';

const Section = styled.section`
    z-index: 9999;
    width: 16%;
    height: calc(100vh - 56px);
    padding: 24px 32px;
    background-color: #F8F9FF;
    border-right: 1px solid #ECEEF8;
    @media screen and (min-width: 768px) {
        padding: 40px 0px;
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
        width: 100px;
        padding: 0 48px;
        flex-direction: column;
        justify-content: space-between;
    }
`
const Logo = styled.img`
    width: 40px;
    height: 40px;
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
    color: #515A51;
    background-color: transparent;
    font-weight: ${p => p.active ? 600 : 400};
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0 36px 0 0;
    padding: 0;
    cursor: pointer;
    border-bottom: ${p => p.active ? `2px solid ${p.theme.colors.B400}` : 'none'};
    &:last-child {
        margin: 0;
    }
`
const Button = styled.div`
    padding: 8px 24px;
    background-color: #1A6B25;
    color: ${p => p.theme.colors.N0};
    border-radius: 50px;
`

const Sidebar = (props) => (
    <Section>
        <Container>
            <h6>Elements</h6>
            <Nav>
                <NavItem ml={2} active>Button</NavItem>
            </Nav>
        </Container>
    </Section>
);

export default Sidebar;