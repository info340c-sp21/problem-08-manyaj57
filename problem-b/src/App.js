import React, { useState } from 'react';
import _ from 'lodash';

export function App(props) {
  const petsList = props.pets
  const [pets, setAdopted] = useState(petsList)

  let breedsList = Object.keys(_.groupBy(pets, 'breed'));

  const handleAdopt = (petName) => {
    console.log("Toggling adopted of ", petName)
    let updated = pets.map((pet) => {
      let petCopy = {...pet} 
      if  (petCopy.name === petName) {
        petCopy.adopted = true;
      }
      return petCopy;
    })
    console.log("Updated pets", updated)
    setAdopted(updated)
  }
  return (
    <body>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <AboutNav />
            <BreedNav breeds={breedsList}/>
          </div>

          <div id="petList" className="col-9">
            <PetList pets={pets} adoptCallback={handleAdopt}/>
          </div>
        </div>
      </main>

      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </body>
  );
}

export function AboutNav(){
  return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
  );
}

export function BreedNav(prop) {
  let breedsList = prop.breeds;

  let listedBreeds = breedsList.map((item) => <li key={item}><a href="">{item}</a></li>)
  return (
    <nav id="breedLinks">
      <h2>Pick a Breed</h2>
      <ul className="list-unstyled">
        {listedBreeds}
      </ul>            
    </nav>
  );
}

export function PetCard(prop) {
  let pet = prop.pets;
  
  const isAdopted = pet.adopted === true;

  const handleClick = (event) => {
    prop.adoptCallback(pet.name);
  }

  return (
    <div className="card" onClick={handleClick}>
      <img className="card-img-top" src={pet.img} alt={pet.name} />
      <div className="card-body">
        <h3 className="card-title">{isAdopted ? pet.name + " (Adopted)" : pet.name}</h3>
        <p className="card-text">{pet.sex} {pet.breed}</p>
      </div>
    </div>
  )
}

export function PetList(prop) {
  let petsList = prop.pets;
  let returnedPet = petsList.map((pet) => 
    <PetCard key={pet.name} pets={pet} adoptCallback={prop.adoptCallback}/>)
  return (
    <div className="card-deck">
      <h2>Dogs for Adoption</h2>
      {returnedPet}
    </div>
  )
}

export default App;

