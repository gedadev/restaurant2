export default function menu() {
    const body = document.createElement('div');
    body.id = 'grub';

    const title = document.createElement('h2');
    const item1 = document.createElement('p');
    const item2 = document.createElement('p');
    const item3 = document.createElement('p');
    const item4 = document.createElement('p');
    const item5 = document.createElement('p');
    const item6 = document.createElement('p');
    const soda = document.createElement('h3');
    const coral = document.createElement('h3');
    const item7 = document.createElement('p');
    const item8 = document.createElement('p');
    const item9 = document.createElement('p');
    
    title.innerHTML = 'Galley Grub';
    soda.innerHTML = 'Seafoam Soda';
    coral.innerHTML = 'Coral Bits';
    item1.innerHTML = 'Krabby Patty: 1.25';
    item2.innerHTML = 'Double Krabby Patty: 2.00';
    item3.innerHTML = 'Triple Krabby Patty: 2.00';
    item4.innerHTML = 'Krabby Meal: 3.50';
    item5.innerHTML = 'Salty Sea Dog: 1.25';
    item6.innerHTML = 'Sailors Surprise: 3.00';
    item7.innerHTML = 'Small: 1.00';
    item8.innerHTML = 'Medium: 1.25';
    item9.innerHTML = 'Large: 1.50';

    body.appendChild(title);
    body.appendChild(item1);
    body.appendChild(item2);
    body.appendChild(item3);
    body.appendChild(item4);
    body.appendChild(item5);
    body.appendChild(item6);
    body.appendChild(soda);
    body.appendChild(item7);
    body.appendChild(item8);
    body.appendChild(item9);
    body.appendChild(coral);
    body.appendChild(item7.cloneNode(true));
    body.appendChild(item8.cloneNode(true));
    body.appendChild(item9.cloneNode(true));

    return body;
}