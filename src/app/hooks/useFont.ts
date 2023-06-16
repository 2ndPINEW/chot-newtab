import { useEffect, useState } from 'react';
import browser from 'webextension-polyfill';

export const useFont = () => {
  // CLSして欲しくないから、localStorageにも保存しておく
  const localStorageFontFamily = localStorage.getItem('fontFamily');
  const [fontFamily, setFontFamily] = useState(localStorageFontFamily ?? '');

  useEffect(() => {
    browser.storage.sync.get('fontFamily').then(({ fontFamily }) => {
      setFontFamily(fontFamily);
      localStorage.setItem('fontFamily', fontFamily);
    });
  });

  return [fontFamily];
};
