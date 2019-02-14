import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const Home = ({hi}) => (
    <Layout>
        <h1>Hi! <Link href="/test">Go here</Link>/</h1>
        <p>On Safari, if you press the link and then SWIPE BACK USING THE TRACKPAD or ON MOBILE, the entire page gets stuck and freezes for a bit, including NProgress. (Try scrolling up and down!).</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p><img src="https://via.placeholder.com/500" /></p>
        <p><img src="https://via.placeholder.com/400" /></p>
        <p><img src="https://via.placeholder.com/200" /></p>
    </Layout>
)

Home.getInitialProps = async ({ req,     res, a }) => {
    return {
        hi: 'hi'
    }
}

export default Home;
