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