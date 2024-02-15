import React, { useState } from "react";
import GitHubUser from "./GitHubUser";

const RootGitHub = () => {
  const [username, setUsername] = useState("rajats-dev");
  const [input, setInput] = useState("");

  const onSubmit = () => {
    setUsername(input);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onSubmit}>Fetch</button>
      <GitHubUser username={username} />
    </div>
  );
};

export default RootGitHub;
