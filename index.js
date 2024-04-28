
let clickedIds = [];


function clicked(id) {
    console.log(id);
    let sitNumbers = document.getElementById("sitNumbers");
    let totalSitMoney = document.getElementById("main-total");
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

    totalSitMoney.innerText= totalMoney
   

    // // function mainTotal() {
    //     const total  =
    //     totalMoney.push(total);
    //     return totalMoney;
console.log(totalMoney);
    } 
// }


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
    if (text === 'NEW15' ) {
        applyBtn.removeAttribute('disabled')
    }
    else if ( text === 'Couple 20'){
        applyBtn.removeAttribute('disabled')

    }
    else {
        applyBtn.setAttribute('disabled', true)
    }
    console.log(text);
})


// discaount-price section 

 