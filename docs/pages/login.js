import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Login = props => (
    <form>
        <input type='text' name='username' placeholder='username' />
        <input type='password' name='password' placeholder='password' />
        <button> Sign In</button> 
    </form>
)

Login.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
        shows: data.map(entry => entry.show)
    };
};

export default Login;