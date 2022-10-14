import "./main.css";
import home from "./app/home";
import navbar from "./app/app";

export const main = document.createElement('main');
main.id = 'content';

document.body.appendChild(navbar());
document.body.appendChild(main);
main.appendChild(home());