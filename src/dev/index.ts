import {gridOptions} from "./grid";
import {textContent} from "./text";
import {backgroundContent} from "./background";
import {opacity} from "./background/opacity";

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

${
    opacity()
}

`;
root.innerHTML = rootElem