import Link from 'next/link';
import styled from 'styled-components';

const Section = styled.section`
    z-index: 9999;
    width: 75%;
    padding: 32px;
    background-color: #FFF;
    @media screen and (min-width: 768px) {
        padding: 40px 56px;
    }
`

const Content = (props) => (
    <Section>
        {props.children}
    </Section>
);

export default Content;