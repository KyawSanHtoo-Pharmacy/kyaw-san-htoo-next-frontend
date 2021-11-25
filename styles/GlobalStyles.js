import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

export const GlobalContainer = styled.div`
  padding: 6.25em 7.81em;

  @media screen and (max-width: 980px) {
    padding: 3.13em 3.91em;
  }

  @media screen and (max-width: 500px) {
    padding: 3.13em 1.25em;
  }
`

export default function GlobalStyles({ theme }) {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Bahnschrift';
          font-style: normal;
          font-display: swap;
          src: local('Bahnschrift'), url('/fonts/bahnschrift.TTF') format('TTF');
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        ::selection {
          color: ${theme.colors.heading};
          background-color: ${theme.colors.text};
        }

        html,
        body {
          font-family: Bahnschrift, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        body {
          font-size: 1vw;
          line-height: 1.8;
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
          line-height: 1.6;
        }

        h1 {
          font-size: 3.13em;
        }

        h2 {
          font-size: 2.5em;
        }

        @media screen and (max-width: 500px) {
          h2 {
            font-size: 1.88em;
          }
        }

        h3 {
          font-size: 1.72em;
        }
        @media screen and (max-width: 500px) {
          h3 {
            font-size: 1.41em;
          }
        }

        p {
          font-size: 1.25em;
        }

        a,
        button {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }

        img {
          max-width: 100%;
          object-fit: cover;
        }

        .mm-number {
          font-size: 1.2em;
        }

        .swiper {
        }

        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        .swiper-pagination {
        }

        .swiper-pagination-bullet {
          background: ${theme.colors.heading};
          transition: all 0.2s ease-out;
          border-radius: 0.2em;
        }

        .swiper-pagination-bullet-active {
          transform: scaleX(1.5);
        }
      `}
    />
  )
}
