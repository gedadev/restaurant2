export default function navbar() {
    const header = document.createElement('header');
    header.id = 'navbar';

    let menu = ['Home', 'Galley Grub', 'Info'];
    menu.forEach((element) => {
        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu-item';
        menuDiv.innerHTML = element;
        header.appendChild(menuDiv);
        // header.addEventListener('click', (e) => {
        //     if (element.toLowerCase() === 'home') {
        //         while (body.firstChild) {
        //             body.removeChild(body.lastChild);
        //         }
        //         body.appendChild(content());
        //     }
        //     if (element.toLowerCase() === 'galley grub') {
        //         while (body.firstChild) {
        //             body.removeChild(body.lastChild);
        //         }
        //         body.appendChild(galley());
        //     }
        //     if (element.toLowerCase() === 'info') {
        //         while (body.firstChild) {
        //             body.removeChild(body.lastChild);
        //         }
        //         body.appendChild(info());
        //     }
        // });
    });
    
    return header;
}