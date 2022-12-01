async function mainEvent(){
    const form = document.querySelector('.division_form');
    const submit = document.querySelector('#comp_divs');

    const results = await getData();

    form.addEventListener('submit', (submitEvent) =>{
        submitEvent.preventDefault();
        console.log("did somethin");
    });
}
async function getData(){
    //boilerplate api call for now to make sure we are hooked up to the api
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1ad20185f4msh490da773eec2f88p1da196jsn25ab0f4382b6',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021&conference=east', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


_____

async function mainEvent(){
    //queryselectors for relevant elements to the page
    const form = document.querySelector('.division_form');
    const divisionOne = document.querySelector('#division1');//const submit = document.querySelector('#comp_divs');
    const divisionTwo = document.querySelector('#division2');
    const submit = document.querySelector('#comp_divs');
    const results = await getData();

    
    
    let option1,option2 = 'Atlantic'
    divisionOne.addEventListener('change', (changeEvent) => {
        changeEvent.preventDefault();
        console.log(divisionOne.selectedIndex)
        option1 = divisionOne[divisionOne.selectedIndex].value
        console.log(option1)
    });
    divisionTwo.addEventListener('change', (changeEvent) => {
        changeEvent.preventDefault();
        console.log(divisionTwo.selectedIndex);
        option2 = divisionTwo[divisionTwo.selectedIndex].value
        console.log(option2)
    });
   
    
    form.addEventListener('submit', (submitEvent) =>{
        console.log("submitted!")
        submitEvent.preventDefault();
        const filteredStandings = filterstandings(results,option1,option2);
        getTotals(filteredStandings,option1,option2)
    });
}


function getTotals(teams,divisionOne,divisionTwo){
    divisionOne = divisionOne.toLowerCase();
    divisionTwo = divisionTwo.toLowerCase();
    div1 = teams.filter((team) => team.division.name === divisionOne);
    div2 = teams.filter((team) => team.division.name === divisionTwo);

    let div1Wins = 0
    let div2Wins = 0

    div1.forEach((team) => {
        div1Wins += team.win.total 
    });
    div2.forEach((team) => {
        div2Wins += team.win.total
    });
    console.log(div1Wins);
    console.log(div2Wins);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());