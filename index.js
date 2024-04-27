  
let clickedIds = [];

function clicked(id) {
    console.log(id);
    let sitNumbers = document.getElementById("sitNumbers");
    let button = document.getElementById(id);
    let currentColor = button.style.backgroundColor;
    
    

    if (clickedIds.includes(id)) {
        clickedIds = clickedIds.filter(item => item !== id);
    } else {
        if (clickedIds.length >= 4) {
            alert("You can only select up to 4 seats.");
            return; 
        }
        clickedIds.push(id);
    }
    let newColor = currentColor ===  "#1DD100" ? "#ffff" : "#1DD100";

    button.style.backgroundColor = newColor;

    // console.log(clickedIds);

    sitNumbers.innerHTML = '';

    for(const id of clickedIds) {
        let div = document.createElement('div');

        div.innerHTML = `
            <div class="flex flex-col gap-2">
                <div class="flex justify-between">
                    <h4>${id}</h4>
                    <h4>Economy</h4>
                    <h4>500</h4>
                </div>
            </div>
        `;

        sitNumbers.appendChild(div);
    }
}


// main total area 

 
 