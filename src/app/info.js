export default function info() {
    const body = document.createElement('div');
    body.id = 'info';

    const title = document.createElement('h3');
    const address = document.createElement('p');

    title.innerHTML = 'Address';
    address.innerHTML = '124 Conch Street, Bikini Bottom, Pacific Ocean';

    body.appendChild(title);
    body.appendChild(address);

    return body;
}