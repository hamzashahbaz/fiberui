import GlobalHeader from './GlobalHeader';
import GlobalFooter from './GlobalFooter';

const Layout = props => (
    <>
        <GlobalHeader/>
        {props.children}
        <GlobalFooter/>
    </>
);

export default Layout;