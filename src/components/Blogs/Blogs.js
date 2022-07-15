import React from 'react';
import Footer from '../Footer/Footer';
import './Blogs.css'

const Blogs = () => {
    return (
        <>
            <div className='blogs'>
                <div className='blogs-info'>
                    <h2>Frequently Asked Questions</h2>
                    <h4>* What is Context API?</h4><br />
                    <p><strong>The React Context API</strong> is a way for a react app to effectively produce global variable that can be passes around, this is the alternative to props drilling or moving props from parent to child to current and so on. <strong>React.createContext()</strong> is all you need. It returns a consumer and provider. <strong>The Context API</strong> is a React structure that enables you to exchange unique details and assists in solving props-drilling from all levels of your application.</p><br />
                    <h4>* What is Semantic Tags?</h4><br />
                    <p>
                        <strong>Semantic HTML</strong> tags allow you to add meaning to your markup so that search engine screen readers and web browser can make sense of it. By default, user agent reads your content, it doesn't understand the context and meaning. <br /> <strong>Semantic HTML</strong> tags let you serve structure content to your users, which is especially important for on-page SEO and accessibility. <strong>Semantic</strong> tags existed in earlier html versions, the HTML 5 specifications added several new semantic element to the syntax both on the block and inline levels.
                    </p><br />
                    <h4>* What is the difference between inline and inline-block elements?</h4><br />
                    <p>
                        <u><strong>Inline Elements</strong></u>: <br />
                        <strong>Inline Elements</strong> occupy is only sufficient width required. Online elements don't start in a new line. Inline elements allow other inline elements to sit behind. <br /><br />
                        <u><strong>Inline-Block Elements</strong></u>: <br /> <strong>Inline-Block Elements</strong> are similar to inline elements, except they can have padding and margins added on all four sides.
                        They consume the entire width available irrespective of their sufficiency. they always start in a new line and have top and bottom margins. it does not contain any other elements next to it.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blogs;