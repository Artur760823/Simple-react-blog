import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id: 3 },
        { title: 'The end of all', body: 'lorem ipsum...', author: 'Artur', id: 4 }

    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs:" />
        </div>
    );
}

export default Home;