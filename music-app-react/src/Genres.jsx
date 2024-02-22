import React, { useState, useEffect } from "react";

const Genres = () => {
  const [genreInfo, setGenreInfo] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      console.log("Page Loaded");

      const genreList = document.getElementById("genreList");

      if (genreList) {
        genreList.addEventListener("click", function (event) {
          if (event.target.tagName === "BUTTON") {
            const genre = event.target.textContent.toLowerCase();
            setSelectedGenre(genre);
          }
        });
      }
    });
  }, []);

  useEffect(() => {
    const fetchGenreInfo = async () => {
      try {
        const apiKey = "bmowHxKDkguJzXoMyPoU";
        const apiSecret = "NiRGOLydFLANQtnwZgmkaYqaWMbOkQPm";
        const baseURL = "https://api.discogs.com";
        const url = `${baseURL}/database/search?type=release&q=${selectedGenre}&key=${apiKey}&secret=${apiSecret}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "User-Agent": "YourApp/1.0",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        displayGenreInfo(data, selectedGenre);
      } catch (error) {
        console.error("Error fetching genre information:", error);
        displayGenreInfo(null, selectedGenre);
      }
    };

    fetchGenreInfo();
  }, [selectedGenre]);

  const displayGenreInfo = (data, genre) => {
    const genreDescriptions = {
      rock: `
        <p>Rock music or rock and roll in full name is a genre of popular music that originated as "rock and roll" in the United States in the early 1950s, and developed into a range of different styles in the late 1950s, 1960s and later, particularly in the United Kingdom and the United States. Its roots are in 1950s' American rock and roll when and where it first started, itself heavily influenced by rhythm and blues and country music. Rock music also drew strongly on a number of other genres such as blues and folk, and incorporated influences from jazz, classical and other musical sources.</p>
        <p>In its purest form, Rock & Roll has three chords, a strong, insistent back beat, and a catchy melody. Early rock & roll drew from a variety of sources, primarily blues, R&B, and country, but also gospel, traditional pop, jazz, and folk. All of these influences combined in a simple, blues-based song structure that was fast, danceable, and catchy. The first wave of rock & rollers -- Chuck Berry, Elvis Presley, Little Richard, Jerry Lee Lewis, Buddy Holly, Bo Diddley, Bill Haley, Gene Vincent, the Everly Brothers, and Carl Perkins, among many others -- set the template for rock & roll that was followed over the next four decades.</p>
        <p>Provided by Wikipedia under Creative Commons Attribution CC-BY-SA 4.0</p>
      `,
      jazz: `
        <p>Jazz is a genre of music that originated in African-American communities during the late 19th and early 20th century. Jazz emerged in many parts of the United States of independent popular musical styles; linked by the common bonds of European American and African-American musical parentage with a performance orientation.</p>
        <p>Jazz spans a range of music from ragtime to the present day—a period of over 100 years—and has proved to be very difficult to define. Jazz makes heavy use of improvisation, polyrhythms, syncopation, and the swung note, as well as aspects of European harmony, American popular music, the brass band tradition, and African musical elements such as blue notes and ragtime. A musical group that plays jazz is called a jazz band.</p>
        <p>While New Orleans jazz has improvised ensembles, when jazz started becoming popular in the 1920s and demand was growing for larger dance bands, it became necessary for ensembles to be written down, particularly when a group included more than three...</p>
        <p>Provided by Wikipedia under Creative Commons Attribution CC-BY- SA 4.0</p>
      `,
      hiphop: `
        <p>Hip hop music, also called hip-hop, rap music, or hip-hop music, is a music genre consisting of a stylized rhythmic music that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted. It developed as part of hip hop culture, a subculture defined by four key stylistic elements: MCing/rapping, DJing/scratching, break dancing, and graffiti writing.</p>
        <p>Other elements include sampling (or synthesis), and beatboxing. While often used to refer to rapping, "hip hop" more properly denotes the practice of the entire subculture. The term hip hop music is sometimes used synonymously with the term rap music, though rapping is not a required component of hip hop music; the genre may also incorporate other elements of hip hop culture, including DJing and scratching, beatboxing, and instrumental tracks.</p>
        <p>Rap's germination is sometimes attributed to the righteous street poetry of the Last Poets and the Watts Prophets, but it didn't begin to take full shape -- and earn its tag -- until after the Sugarhill Gang released "Rapper's Delight" in 1979.</p>
        <p>Provided by Wikipedia under Creative Commons Attribution CC-BY-SA 4.0</p>
      `,
    };

    setGenreInfo(
      genreDescriptions[genre] ||
        "<p> No information available for this genre.</p>"
    );
  };

  return (
    <div>
      <main>
        <div id="genreInfoContainer">
          {selectedGenre && (
            <div dangerouslySetInnerHTML={{ __html: genreInfo }} />
          )}
        </div>
        <ul id="genreList">
          <li onClick={() => setSelectedGenre("rock")}>
            <button>Rock</button>
          </li>
          <li onClick={() => setSelectedGenre("hiphop")}>
            <button>Hiphop</button>
          </li>
          <li onClick={() => setSelectedGenre("jazz")}>
            <button>Jazz</button>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Genres;
