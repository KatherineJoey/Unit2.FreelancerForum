document.addEventListener('DOMContentLoaded', function() {
    const freelancerList = document.getElementById('freelancer-list');
    const averageStartingPriceDisplay = document.getElementById('average-starting-price');
  
    // Initial array of freelancers
    let freelancers = [
      { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
      { name: 'Bob', occupation: 'Teacher', startingPrice: 50 }
    ];
  
    // Function to render initial freelancer data
    function renderInitialFreelancers() {
      freelancers.forEach(freelancer => {
        const li = document.createElement('li');
        li.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.startingPrice}`;
        freelancerList.appendChild(li);
      });
    }
  
    // Function to render freelancers
    function renderFreelancers() {
      freelancerList.innerHTML = ''; // Clear previous list
      freelancers.forEach(freelancer => {
        const li = document.createElement('li');
        li.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.startingPrice}`;
        freelancerList.appendChild(li);
      });
    }
  
    // Function to calculate and update average starting price
    function updateAverageStartingPrice() {
      if (freelancers.length > 0) {
        const totalStartingPrice = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0);
        const average = totalStartingPrice / freelancers.length;
        averageStartingPriceDisplay.textContent = `Average starting price: $${average.toFixed(2)}`;
      } else {
        averageStartingPriceDisplay.textContent = `Average starting price: $0.00`;
      }
    }
  
    // Initial rendering of freelancers
    renderInitialFreelancers();
    updateAverageStartingPrice();
  
    // Simulate adding new freelancer (Carol) after a few seconds
    setTimeout(function() {
      const newFreelancer = { name: 'Carol', occupation: 'Programmer', startingPrice: 70 };
      freelancers.push(newFreelancer);
      renderFreelancers();
      updateAverageStartingPrice();
    }, 3000); // Add Carol after 3 seconds
  
  });
  
  // Arrays for random selection
const names = ['Ava', 'Dylan', 'Vince', 'David', 'Kyle'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Artist'];
const minPrice = 20;
const maxPrice = 100;

// Function to generate a new random freelancer
function generateNewFreelancer() {
  const randomNameIndex = Math.floor(Math.random() * names.length);
  const randomOccupationIndex = Math.floor(Math.random() * occupations.length);
  const startingPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;

  return {
    name: names[randomNameIndex],
    occupation: occupations[randomOccupationIndex],
    startingPrice: startingPrice
  };
}

  // Function to add a new freelancer
  function addNewFreelancer() {
    const newFreelancer = generateNewFreelancer();
    newFreelancer.push(newFreelancer);
    newFreelancer();
    updateAverageStartingPrice();
  }

  // Simulate adding new freelancers every few seconds
  setInterval(addNewFreelancer, 3000); // Add new freelancer every 3 seconds


// Example usage
const newFreelancer = generateNewFreelancer();
console.log(newFreelancer);
