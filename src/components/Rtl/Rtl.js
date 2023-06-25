import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

const Rtl = ({ children }) => (
  <CacheProvider value={cacheRtl}>
    {children}
  </CacheProvider>
);

export default Rtl;
