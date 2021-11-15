import { Global, css } from '@emotion/react'

export default function GlobalStyles({ theme }) {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Bahnschrift';
          font-style: normal;
          font-display: swap;
          src: local('Bahnschrift'), url(/fonts/bahnschrift.TTF) format('TTF');
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        html,
        body {
          font-family: Bahnschrift, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        body {
          font-size: 1vw;
          line-height: 1.5;
          color: ${theme.colors.text};
          background-color: ${theme.colors.bodyBg};
        }

        @media screen and (max-width: 1200px) {
          body {
            font-size: 13px;
          }
        }

        @media screen and (min-width: 2000px) {
          body {
            font-size: 18px;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.heading};
        }

        h1 {
          font-size: 4.69em;
        }

        p {
          font-size: 1.41em;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          max-width: 100%;
          object-fit: cover;
        }
      `}
    />
  )
}
