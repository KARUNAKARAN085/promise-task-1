function updatedata(country){
    console.log(country)
    const elem = document.querySelector(".row")
    const card = `
    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div class="card h-100">
            <header class="header">
                <div class="card-header"><b>${country.attributes.name}</b></div>
            </header>
      
        <div class="card-body">
            <div class="card-text"><b>Description:</b> ${country.attributes.description}</div><br>
        </div>
    </div>`
    
    elem.insertAdjacentHTML("beforeend",card)
}

const getData = async ()=>{
    let dogData = await fetch("https://dogapi.dog/api/v2/breeds")
    .then((data)=>data.json())
    .then((data) => data)
    .catch(x=> console.warn(x));
    
    for(let i=0;i<dogData.data.length;i++){
        updatedata(dogData.data[i])
    }
}
getData();
