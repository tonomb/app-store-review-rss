import React, { FormEvent, useState } from 'react';

export default function ReviewInput() {
  const [appId, setAppId] = useState('595068606');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(appId);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppId(e.target.value);
  };

  return (
    <form className="p-4 text-center" onSubmit={handleSubmit}>
      <input
        type="text"
        value={appId}
        onChange={handleChange}
        className="border border-solid border-slate-950 px-2 py-1.5 rounded-md my-4"
      />
      <button className="ml-2 bg-[#0070C9] px-2 py-1.5 rounded-md text-white ">
        Check Reviews
      </button>
    </form>
  );
}
