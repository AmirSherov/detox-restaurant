'use client';
import React, { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './index';

const I18nProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  React.useEffect(() => {
    i18n.init().then(() => setIsReady(true));
  }, []);

  if (!isReady) return <div>Loading...</div>;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
