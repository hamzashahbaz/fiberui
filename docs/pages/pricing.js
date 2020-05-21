import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

const Container = styled.section`
    background-color: #1F2443;
    height: 100vh;
    margin: 0;
`

const Pricing = props => (
    <Container>
        <h2>Pricing</h2>
        <p>You'll get access to the first 150+ components today, plus new components every month until we're out of ideas.</p>
        <div className="columns">
            <ul className="price">
                <li className="header">Starter</li>
                <li className="grey">Free</li>
                <li>All application UI components</li>
                <li>Free</li>
                <li>Lifetime access</li>
                <li>Use on unlimited projects</li>
            </ul>
        </div>
        <div className="columns">
            <ul className="price">
                <li className="header">Pro</li>
                <li className="grey">$45</li>
                <li>All application UI components</li>
                <li>Free</li>
                <li>Lifetime access</li>
                <li>Use on unlimited projects</li>
                <li className="grey"><a href="#" className="button">Sign Up</a></li>
            </ul>
        </div>
    </Container>
)

export default Pricing;