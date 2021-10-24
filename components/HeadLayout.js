import Head from 'next/head'

const HeadLayout = ({twitterHandle, currentURL, previewImage, siteName, Title, pageTitle, description}) => {
    return (
        <Head>
            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

            <meta property="og:url" content={currentURL} key="ogurl" />
            <meta property="og:image" content={previewImage} key="ogimage" />
            <meta property="og:site_name" content={siteName} key="ogsitename" />
            <meta property="og:title" content={pageTitle} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />
            <title>{pageTitle}</title>
        </Head>
    );
}

export default HeadLayout