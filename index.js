
let clickedIds = [];


function clicked(id) {
    console.log(id);
    let sitNumbers = document.getElementById("sitNumbers");
    let totalSitMoney = document.getElementById("main-total");
    let discount = document.getElementById("discaount-price");
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
    let newColor = currentColor === "green" ? "#ffff" : "green";

    button.style.backgroundColor = newColor;

    // console.log(clickedIds);
    let totalMoney = 500 * clickedIds.length;
    sitNumbers.innerHTML = '';

    for (const id of clickedIds) {
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



    const sitLeft = document.getElementById('sit-count')
    sitLeft.innerText = 40 - clickedIds.length;

    totalSitMoney.innerText = totalMoney
    discount.innerText = totalMoney



    console.log(totalMoney);
}



//  document.getElementById('input-fild').addEventListener('keyup', function(event){
//     const text = event.target.value;

//     if(text === 'NEW15'){
//        const cpupon = document.getElementById('c-btn');
//         cpupon.removeAttribute('disabled ')
//         console.log('this is set');
//     }
//     else{
//        text.s
//     }
//     console.log(text);
//  })




document.getElementById('input-fild').addEventListener('keyup', function (evet) {
    const text = evet.target.value;

    const applyBtn = document.getElementById('c-btn');
    if (text === 'NEW15' || text === 'Couple 20') {
        applyBtn.removeAttribute('disabled')

    }

    else {
        applyBtn.setAttribute('disabled', true)
    }
    console.log(text);
})


function apply() {
    if (text = 'NEW15') {

        console.log('15%discount');

    }
    else if (text = 'Couple 20') {
        console.log('have 20 $');
    }  
        
    
}

// discaount-price section 

