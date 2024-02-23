import React, { useState } from "react";

const FindSamples = () => {
  const [songInput, setSongInput] = useState("");
  const [result, setResult] = useState("");

  const findSampledMusic = async () => {
    try {
      const trimmedInput = songInput.trim();

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              {
                role: "user",
                content: `What songs were sampled to make "${trimmedInput}"?`,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.choices || !data.choices.length) {
        throw new Error("Invalid API response");
      }

      const chatGPTResponse = data.choices[0].message.content.trim();
      setResult(chatGPTResponse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Music Sample Finder</h1>
      <label htmlFor="songInput">Enter a song name:</label>
      <input
        type="text"
        id="songSearch"
        placeholder="e.g., 'Gold Digger'"
        value={songInput}
        onChange={(e) => setSongInput(e.target.value)}
      />
      <button className="frosted-glass-button" onClick={findSampledMusic}>
        Find Sampled Music
      </button>
      <p id="result">{result}</p>
    </div>
  );
};

export default FindSamples;
