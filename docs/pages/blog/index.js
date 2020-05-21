import Layout from '../../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
    <li>
        <Link href="/users/[id]" as={`/users/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
const Index = props => (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
            <h1>Batman TV Shows</h1>
            <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                <Link href="/blog/[id]" as={`/blog/${show.id}`}>
                    <a>{show.name}</a>
                </Link>
                </li>
            ))}
            </ul>
            <style jsx>{`
                h1,
                a {
                font-family: 'Arial';
                }

                ul {
                padding: 0;
                }

                li {
                list-style: none;
                margin: 5px 0;
                }

                a {
                text-decoration: none;
                color: blue;
                }

                a:hover {
                opacity: 0.6;
                }
            `}</style>
        </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;