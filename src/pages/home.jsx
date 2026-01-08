import React from 'react';

export default function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Wolf</h1>
        <p>Your amazing page starts here</p>
      </header>
      
      <main>
        <section className="hero">
          <h2>Main Section</h2>
          <p>Add your content here</p>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2026 Wolf. All rights reserved.</p>
      </footer>
    </div>
  );
}