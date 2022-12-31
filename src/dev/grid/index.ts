import {range} from "./values";


const fun = (items: string[])=> {
    items.forEach(e=> {
        console.log(e);
    })
}
export const gridOptions = () => {
    // Define atoria grid utilities
    const grids = ['grid-cols-2', "grid-cols-3", "grid-cols-4", 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9' , 'grid-cols-10', 'grid-cols-11', 'grid-cols-12']
    // return a crafted grid representation
    fun(grids)
    return  `
        ${
            [1,2,3,4,5,6,7,8,9,10,11,12].map((element) => {
                console.log(element)
                const ranges = range(1,element) as number[] // create an array of numbers based on the grid grid-colsumn
                return `
                <div class="" style="display: block">
                    <h1 class="text-2xl">${element} Colsums Grid</h1>
                    <div class=" grid gap-2 col-${element}">
                    ${
                        ranges.map((range) => {
                            return `
                            <div >
                                <h2 class="$ text-xl border-gray-1 p-3">${range}</h2>
                            </div>`
                            })
                }
                    </div>
                </div>
                `;
            })
    }
    `
}