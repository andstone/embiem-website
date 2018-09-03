import { Fragment } from "react";
import Head from "next/head";

export default () => (
  <Fragment>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Rubik"
        rel="stylesheet"
      />
    </Head>
    <header>
      <a>Home</a>
      <a>Blog</a>
    </header>
    <main>
      <div className="alice-background">
        <h1>Some Cool Header</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra
          rutrum ex vel vulputate. Praesent nec risus cursus, consectetur enim
          eget, pharetra tellus. Nulla in felis in mauris laoreet pellentesque.
          Integer hendrerit congue elit ac rutrum. Nam eu dui non turpis
          consequat porta. Ut iaculis dignissim libero non aliquet. Aliquam urna
          leo, molestie sit amet orci et, vulputate iaculis lacus. Vestibulum
          euismod at quam in mattis. Cras tincidunt suscipit lectus, sed
          porttitor enim mollis et. Nullam urna orci, venenatis ac ornare vel,
          gravida ac augue. Morbi ut lacus sapien. Aenean dapibus tincidunt
          massa eget bibendum. Suspendisse sit amet porta magna, et auctor
          mauris. In eget tempus mi, eget accumsan velit.
        </p>
      </div>
    </main>
    <style global jsx>{`
      html {
        min-height: 100%;
        box-shadow: rgba(0, 0, 0, 0.3) 0 0 30px inset;
      }

      body {
        background-color: #f8f8f8;
        background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2367696e' fill-opacity='0.17'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }

      header {
        background: #fafafa;
        width: 53%;
        height: 50px;
        position: relative;
        left: -20px;
        top: 32px;
        transform: rotate(-1.36deg);
        box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
        z-index: 10;
      }

      header a {
        display: inline-block;
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: bold;
        font-size: 24px;
        color: #354751;
      }

      header a:nth-of-type(1) {
        position: relative;
        left: 71px;
        top: 4px;
        transform: rotate(-11.4deg);
      }

      header a:nth-of-type(2) {
        position: relative;
        left: 178px;
        top: 6px;
        transform: rotate(-15deg);
      }

      main {
        color: #354751;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      main .alice-background {
        background-color: #f4eee2;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2367696e' fill-opacity='0.13' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
        transform: rotate(4.4deg);
        width: 724px;
        height: 818px;
        box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 8px;
      }

      main .alice-background h1 {
        position: relative;
        top: 35px;
        left: 24px;
        transform: rotate(-7.1deg);

        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
      }

      main .alice-background p {
        position: relative;
        top: 67px;
        left: 85px;
        padding-right: 170px;
        transform: rotate(-4.4deg);

        font-family: "Rubik", sans-serif;
        font-size: 18px;
        line-height: 34px;
        letter-spacing: 0.7px;
      }
    `}</style>
  </Fragment>
);