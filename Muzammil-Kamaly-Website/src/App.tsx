import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Your Name</h1>
        <p>Welcome to My Personal Website</p>
      </header>

      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Hello! I'm Your Name. I'm passionate about technology and enjoy
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
      </main>

      <footer>
        <p>Contact me at your.email@example.com</p>
      </footer>
    </div>
  );
}

export default App;
