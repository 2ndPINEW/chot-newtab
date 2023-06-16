import React, { ChangeEvent, useEffect, useState } from 'react';
import browser from 'webextension-polyfill';

const Options = () => {
  const [gitHubUserId, setGitHubUserId] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGitHubUserId(event.target.value);
  };

  useEffect(() => {
    browser.storage.sync.get('userId').then(({ userId }) => {
      setGitHubUserId(userId);
    });
  }, []);

  const handleButtonClick = () => {
    browser.storage.sync.set({ userId: gitHubUserId }).then(() => {
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
            onChange={handleInputChange}
          />
          <button
            className="mt-4 px-2 py-1 bg-blue-600 text-white rounded"
            onClick={handleButtonClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
