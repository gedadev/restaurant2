import home from "./home";
import menu from "./menu";
import info from "./info";
import { main } from "../index";

export default function navbar() {
    const header = document.createElement('header');
    header.id = 'navbar';

    let item = ['Home', 'Galley Grub', 'Info'];
    item.forEach((element) => {
        const menuDiv = document.createElement('div');
        menuDiv.className = 'menu-item';
        menuDiv.innerHTML = element;
        header.appendChild(menuDiv);
        menuDiv.addEventListener(('click'), () => {
            if (element.toLowerCase() === 'home') {
                while(main.firstChild) {
                    main.removeChild(main.lastChild);
                }
                main.appendChild(home());
            }
            if (element.toLowerCase() === 'galley grub') {
                while(main.firstChild) {
                    main.removeChild(main.lastChild);
                }
                main.appendChild(menu());
            }
            if (element.toLowerCase() === 'info') {
                while(main.firstChild) {
                    main.removeChild(main.lastChild);
                }
                main.appendChild(info());
            }
        });
    });
    
    return header;
}