// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-pzjw8f+ua7Kw1TIqjQx2R6JbVAqOw0fAdqQzUl+6lfq2dtrXNpZ5KpVdr9rB8t1W"
          crossorigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
          integrity="sha384-pzjw8f+ua7Kw1TIqjQx2R6JbVAqOw0fAdqQzUl+6lfq2dtrXNpZ5KpVdr9rB8t1W"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
          integrity="sha384-pzjw8f+ua7Kw1TIqjQx2R6JbVAqOw0fAdqQzUl+6lfq2dtrXNpZ5KpVdr9rB8t1W"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
