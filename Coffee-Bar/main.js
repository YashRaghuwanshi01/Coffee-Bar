"use strict";

const renderCoffee = coffee => {
    let html = '<tr class="coffee">';
    html += `<td>${coffee.id}</td>`;
    html += `<td>${coffee.name}</td>`;
    html += `<td>${coffee.roast}</td>`;
    html += '</tr>';

    return html;
}

const renderCoffees = coffees => {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

const updateCoffees = e => {
    e.preventDefault(); 
    const selectedRoast = roastSelection.value;
    const filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast);
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    //... (rest of your coffees data here)
];

const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
