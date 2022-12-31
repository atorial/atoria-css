import {gridOptions} from "./grid";
import {textContent} from "./text";
import {backgroundContent} from "./background";

const root: any = document.querySelector(".root")
// background color styles

const rootElem: any=`
${
    backgroundContent()
}
${
    textContent()
}
${
    gridOptions()
}
`;
root.innerHTML = rootElem