import Layout from '../../../components/Layout';
import styled from 'styled-components';

const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
    margin: 32px 0 8px;
`
const Subtitle = styled.p`
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    color: ${p => p.theme.colors.N300};
`

const Index = props => (
        <Layout>
            <p>Components / Button</p>
            <Title>Buttons</Title>
            <Subtitle>The classic button, in different colors, sizes, and states</Subtitle>
        </Layout>
)

export default Index;