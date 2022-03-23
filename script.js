const apartmentsFacilities = [
    {
        'name' : 'Standard room',
        'price' : 50 
    },
    {
        'name' : 'Sea view',
        'price' : 10
    },
    {
        'name' : 'Air conditioning',
        'price' : 10 
    },
    {
        'name' : 'Morning breakfast',
        'price' : 20 
    },
    {
        'name' : 'Spa + Outside pool',
        'price' : 25
    },
    {
        'name' : 'Pet allowed',
        'price' : 15
    },
];
const sectionFacilities = document.querySelector('.apartments-facilities');
const facilitiesAdded = document.querySelector('.facilities-added');
const facilitiesCosts = document.querySelector('.facilities-cost-section');
const invoiceNotice = document.querySelector('.invoice-notice-section');
const invoiceTotalPrice = document.querySelector('.invoice-total-cost');
const btnSendInvoice = document.querySelector('#btn-send-invoice')

// for ( let i = 0; i < apartmentsFacilities.length; i++) {
//     let btnFacility = document.createElement('button');
//     sectionFacilities.append(btnFacility);
//     let paragraphFacility = document.createElement('p');
//     paragraphFacility.innerHTML = `${apartmentsFacilities[i].name} <br> $${apartmentsFacilities[i].price}`
//     btnFacility.append(paragraphFacility);

//     btnFacility.addEventListener('click', ()=> {
//         let newFacilities = document.createElement('p');
//         newFacilities.textContent = `${apartmentsFacilities[i].name}`;
//         facilitiesAdded.append(newFacilities);
//         let newFacilitiesCost = document.createElement('p');
//         newFacilitiesCost.textContent = `$${apartmentsFacilities[i].price}`;
//         facilitiesCosts.append(newFacilitiesCost);
//     });
// };

let arrayFacilitiesAdded = [];
let arrayFacilitiesCostsAdded = [];
let sum = 0;

for( let i = 0; i < apartmentsFacilities.length; i++) {
    //create and display button for all possible facilities
    let btnFacility = document.createElement('button');
    sectionFacilities.append(btnFacility);
    let paragraphFacility = document.createElement('p');
    paragraphFacility.innerHTML = `${apartmentsFacilities[i].name} <br> $${apartmentsFacilities[i].price}`
    btnFacility.append(paragraphFacility);

    //adding extra options to the facilities list
    btnFacility.addEventListener('click', ()=> {

        if ( arrayFacilitiesAdded.includes(apartmentsFacilities[i].name) === true ) {
            return;
        } else {
            facilitiesAdded.innerHTML = `<h3>All Facilities</h3>`;
            facilitiesCosts.innerHTML = `<h3>Prices</h3>`;
            sum = 0;
            arrayFacilitiesAdded.push(apartmentsFacilities[i].name);
            invoiceNotice.innerHTML = 
                `
                <h3>Notice</h3>
                <p>We accept cash, cards, OP.</p>
                `
            
            arrayFacilitiesCostsAdded.push(apartmentsFacilities[i].price) 
            displayFacilitiesSection();
            invoiceTotalPrice.innerHTML = 
                `
                <h3>Total</h3>
                <p>$${sum}</p>
                `
            }
    });  
}



function displayFacilitiesSection() {

    for ( let i = 0; i < arrayFacilitiesAdded.length; i++) {
        let newFacilities = document.createElement('p');
        newFacilities.textContent = `${arrayFacilitiesAdded[i]}`;
        facilitiesAdded.append(newFacilities);
    };

    for ( let i = 0; i < arrayFacilitiesCostsAdded.length; i++) {
        let newFacilitiesCost = document.createElement('p');
        newFacilitiesCost.textContent = `$${arrayFacilitiesCostsAdded[i]}`;
        facilitiesCosts.append(newFacilitiesCost);
        sum += arrayFacilitiesCostsAdded[i]
    };
};




btnSendInvoice.addEventListener('click', ()=> {
    arrayFacilitiesAdded = [];
    arrayFacilitiesCostsAdded = [];
    facilitiesAdded.innerHTML = `<h3>All Facilities</h3>`;
    facilitiesCosts.innerHTML = `<h3>Prices</h3>`;
    invoiceNotice.innerHTML = `<h3>Notice</h3`;
    invoiceTotalPrice.innerHTML = `<h3>Total</h3>`;
        
});
