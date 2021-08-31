import { css } from '@emotion/react';

import PageNav from '@/components/PageNav';

const style = css({
  height: '3rem',
  width: '100vw',
  'border-bottom': '1px solid #ccc',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
});

export default function Header() {
  return (
    <>
      <header css={style}>
        <PageNav />
      </header>
    </>
  );
}
