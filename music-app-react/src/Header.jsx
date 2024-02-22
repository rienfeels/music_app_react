import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Header() {
  const [userName, setUserName] = useState("");
  const [formVisible, setFormVisible] = useState(true);
  const resultContainerRef = useRef(null);
  // const [searchResult, setSearchResult] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userNameValue = e.target.querySelector("#userName").value;
    setUserName(userNameValue);
  };

  useEffect(() => {
    setFormVisible(false);
  }, [userName]);

  const showForm = () => {
    setFormVisible(true);
  };

  const processForm = () => {
    const userNameValue = document.getElementById("userName").value;
    setUserName(userNameValue);
    setFormVisible(false);
  };

  const searchSong = async () => {
    const songInput = document.getElementById("songSearch").value;

    const apiKey = "bmowHxKDkguJzXoMyPoU";

    const apiUrl = `https://api.discogs.com/database/search?q=${songInput}&key=${apiKey}&secret=NiRGOLydFLANQtnwZgmkaYqaWMbOkQPm`;

    try {
      const response = await axios.get(apiUrl, {});

      const data = response.data;

      if (data.results && data.results.length > 0) {
        const artistName = data.results[0].title;
        displayResult(`Artist: ${artistName}`);
      } else {
        displayResult("No results found");
      }
    } catch (error) {
      console.error(error.message);
      displayResult("Error fetching data");
    }
  };

  const displayResult = (result) => {
    const resultContainer = resultContainerRef.current;
    if (resultContainer) {
      resultContainer.textContent = result;
    } else {
      console.error("Result container not found");
    }
  };

  return (
    <>
      <header>
        <a href="music_app_index.html">
          <img
            className="transparent-image"
            src="logo_4.jpg"
            alt="The sampler logo"
          />
        </a>

        <div className="search container">
          <input
            type="text"
            id="songSearch"
            placeholder="Search for a song..."
          />
          <button id="searchButton" onClick={searchSong}>
            Search
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <a href="popular-samples_index.html">
                <button className="button">Popular Samples</button>
              </a>
            </li>

            <li>
              <a href="genres_index.html">
                <button className="button">Genres</button>
              </a>
            </li>

            <li>
              <a href="playlist_index.html">
                <button className="button">Artists ID Lookup</button>
              </a>
            </li>

            <li>
              <a href="open_ai_index.html">
                <button className="button">Find Samples</button>
              </a>
            </li>

            <li>
              <a href="create_account_index.html">
                <button className="button">Create an Account</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {formVisible && (
        <div id="userForm" className="your-form-class">
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="userName">User Name:</label>
            <input type="text" id="userName" />
            <button type="submit" onClick={processForm}>
              Submit
            </button>
          </form>
        </div>
      )}

      <div id="userOutput" ref={resultContainerRef}>
        <div>
          <h3>User Input:</h3>
          <p>{userName}</p>
        </div>
      </div>
    </>
  );
}

export default Header;
