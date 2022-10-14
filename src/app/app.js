import home from "./home";
import menu from "./menu";
import info from "./info";

export default function navbar() {
    const header = document.createElement('header');
    header.id = 'navbar';

    const main = document.createElement('main');
    main.id = 'content';

    let item = ['Home', 'Galley Grub', 'Info'];
    item.forEach((element) => {
        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu-item';
        menuDiv.innerHTML = element;
        header.appendChild(menuDiv);
    });
    
    return header;
}