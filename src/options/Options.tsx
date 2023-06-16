import React, { ChangeEvent, useEffect, useState } from 'react';
import browser from 'webextension-polyfill';

const Options = () => {
  const [gitHubUserId, setGitHubUserId] = useState('');
  const [fontFamily, setFontFamily] = useState('');

  const handleUserIdInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGitHubUserId(event.target.value);
  };

  const handleFontFamilyInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFontFamily(event.target.value);
  };

  useEffect(() => {
    browser.storage.sync.get('userId').then(({ userId }) => {
      setGitHubUserId(userId);
    });
    browser.storage.sync.get('fontFamily').then(({ fontFamily }) => {
      setFontFamily(fontFamily);
    });
  }, []);

  const handleButtonClick = () => {
    Promise.all([
      browser.storage.sync.set({ userId: gitHubUserId }),
      browser.storage.sync.set({ fontFamily: fontFamily }),
    ]).then(() => {
      alert('Saved!');
    });
  };

  return (
    <div className="h-screen flex justify-center align-middle">
      <div className="p-6 my-auto mx-auto rounded-xl shadow-md">
        <div className="">
          <h1 className="font-bold mb-4 text-2xl">Options</h1>
          <h2 className="text-base">GitHub UserID</h2>
          <input
            type="text"
            className="p-2 border rounded-md"
            value={gitHubUserId}
            onChange={handleUserIdInputChange}
          />
          <h2 className="text-base mt-4">Clock Font Family</h2>
          <input
            type="text"
            className="p-2 border rounded-md"
            value={fontFamily}
            onChange={handleFontFamilyInputChange}
          />
          <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={handleButtonClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
