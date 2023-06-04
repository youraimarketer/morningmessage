import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Let's write the best cover letter for your next career move!"
          />
          <meta property="og:site_name" content="jeezaicoverletter" />
          <meta
            property="og:description"
            content="Generate your next Cover Letter now."
          />
          <meta property="og:title" content="Best AI Cover Letters" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cover Letter Generator" />
          <meta
            name="twitter:description"
            content="Write your cover letter"
          />
          <meta
            property="og:image"
            content="https://jeezai.com/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://jeezai.com/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
