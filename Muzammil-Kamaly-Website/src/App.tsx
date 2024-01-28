import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>YMuzammil Kamaly</h1>
        <p>Welcome to My Personal Website</p>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hello! Muzammil Kamaly. I'm passionate about technology and enjoy
            building awesome web applications.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            {/* Add more projects as needed */}
          </ul>
        </section>

        <section>
          <h2>My Picture</h2>
          <figure className="picture-container">
            <img
              src="https://placekitten.com/300/200" 
              alt="My Picture"
              className="rounded-lg border-4 border-purple-500 p-2"
            />
            <figcaption className="mt-2 text-gray-600 text-sm">Caption for my picture</figcaption>
          </figure>
        </section>
      </main>

      <footer>
        <p>Contact me at your.email@example.com</p>
      </footer>
    </div>
  );
}

export default App;
