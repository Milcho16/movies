console.log
    ("Hello");


let is_clicked = false;

// function myFunction() {
//     let clickButtonElement = document.getElementById('click-button')
// let buttonsDivElement = document.getElementById('buttons')

//     if (!is_clicked) {
//         let newButtonElement = document.createElement('button')
//         newButtonElement.classList.add('click-buttons')
// newButtonElement.textContent = 'Click Me'

//         newButtonElement.addEventListener('click', () => {
//             is_clicked = false;
// newButtonElement.remove()
//         })

// buttonsDivElement.appendChild(newButtonElement)
//         is_clicked = true;
//     }
//   }
// ;


let clickButtonElement = document.getElementById('click-button');
let buttonsDivElement = document.getElementById('buttons');
const containerMovies = document.querySelector(".all_movies");


//debugger

clickButtonElement.addEventListener("click", () => {
    console.log("m");
    if (!is_clicked) {
        let newButtonElement = document.createElement('button');
        newButtonElement.classList.add('click-buttons')
        newButtonElement.textContent = 'Click Me'

        buttonsDivElement.appendChild(newButtonElement)
        newButtonElement.addEventListener('click', () => {
            is_clicked = false;
        newButtonElement.remove();
        })
    }

})

async function getData() {
    const url = "http://localhost:3000/movies";
    try {
        
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const arraymovies = await response.json();
      // foreach, map, for
      arraymovies.forEach(element => {
        let movie_elemnt = `

        <div class="text">
       
       
            <h2>${element.title}</h2>
            <p>${element.summary}</p>
            <b>Actor:</b>
            <br><i>${element.actors.map(actor => { 
                return `${actor} <br> ` ;
             })}</i>
            <br>§
            <br>
       
            <a href="index2.html">Watch now</a>
       
            <br>
            <br>
        </div>
        <img src="${element.image}"
            alt="Не валиден лиден линк" width="350" height="450">
       
       `;
       let movieDivElemnt = document.createElement('div');
             movieDivElemnt.classList.add("all_movies")
       containerMovies.append();

       console.log(movie_elemnt)
      });

      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

 
 let movie_elemnt = `<div class="all_class">

 <div class="text">


     <h2>f</h2>
     <p>A thief who enters the subconscious of his targets <br> is offered a chance to have his criminal
         history erased.</p>
     <b>Actor:</b>
     <br><i>Leonardo DiCaprio,
         <br> Joseph Gordon-Levitt,
         <br> Elliot Page</i>
     <br>
     <br>

     <a href="index2.html">Watch now</a>

     <br>
     <br>
 </div>
 <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
     alt="Не валиден лиден линк" width="350" height="450">

</div>`



getData();

