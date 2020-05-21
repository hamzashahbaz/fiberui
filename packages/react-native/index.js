import theme from './theme';
import { ThemeProvider } from 'styled-components';

export * as Button from './components/Button';

const FiberProvider = (props) => <ThemeProvider theme={props.theme || theme}>{props.children}</ThemeProvider>;

export default FiberProvider;
