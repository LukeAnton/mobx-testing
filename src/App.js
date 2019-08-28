import React from "react";
import { inject, observer } from "mobx-react";

// Gives access to the BirdStore passed in the Provider './index.js'

const App = inject("BirdStore")(
  observer(({ BirdStore }) => {
    const { birds, birdCount, addBird } = BirdStore;

    const handleSubmit = e => {
      e.preventDefault();
      const bird = BirdStore.bird.value;
      addBird(bird);
      BirdStore.bird.value = "";
    };

    return (
      <div className="App">
        <header className="App-header">
          Your State
          {birds.length === 0 ? (
            <h1>{birdCount}</h1>
          ) : (
            <h1>
              {birds.map((bird, index) => (
                <ul key={index}>
                  {bird}
                  {index}
                </ul>
              ))}
            </h1>
          )}
          {birds}
        </header>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter State"
            ref={input => (BirdStore.bird = input)}
          />
          <button>Add State</button>
        </form>
      </div>
    );
  }),
);

export default App;
