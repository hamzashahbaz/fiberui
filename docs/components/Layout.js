import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import styled from 'styled-components';

const Column = styled.div`
    display: flex;
`

const Layout = props => (
    <>
        <Header/>
        <Column>
            <Sidebar/>
            <Content>
                {props.children}
            </Content>
        </Column>
    </>
);

export default Layout;