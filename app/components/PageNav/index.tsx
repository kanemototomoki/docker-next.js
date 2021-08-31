import NextLink from 'next/link';
import { css } from '@emotion/react';

const links = [
  {
    name: 'Top',
    path: '/',
  },
  {
    name: 'CheckBox',
    path: '/checkbox',
  },
];

const liStyle = css`
  & + & {
    &::before {
      content: '|';
    }
  }
`;

export default function PageNuv() {
  return (
    <>
      <ul css={{ listStyle: 'none', padding: 0, display: 'flex' }}>
        {links.map((link) => {
          return (
            <li key={link.name} css={liStyle}>
              <NextLink href={link.path}>
                <a
                  css={{
                    padding: '0.3rem',
                    cursor: 'pointer'
                  }}
                >
                  {link.name}
                </a>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
