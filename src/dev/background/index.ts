export const backgroundContent = () => {
    const bgColor = ['bg-red', 'bg-green', 'bg-yellow', 'bg-orange', 'bg-purple']
    const borderColor = ['border-red-1', 'border-purple-2', 'border-orange-4', "border-green-6", "border-pink-8", 'border-t-4', "border-l-4", "border-r-red-4"]

    return `
        <div class="flex ">
${
        bgColor.map((item, index) => {
            const color = item.split('-')[1]
            return `

<div class="p-3 mx-3 cap ${item} ${index} ${color !== 'orange' && color !== 'yellow' ? 'text-white' : ''}">${item.split("-")[1]} Background</div>`
        })
    }
</div>
<!-- Borders-->
<div class="flex">

${
        borderColor.map((item, index) => {
            
            return `<div class="m-2 cap ${index} p-3 border ${item}"> ${item.split('-')[2]}px ${item.split('-')[1]} Border</div>`;
        })
    }
</div>
<div class="d">
    <div class="flex">
    <div class="border-red-2 p-3 m-2"> RED 2px</div>
    <div class="border-red-4 p-3 m-2"> RED 4px</div>
    <div class="border-red-6 p-3 m-2" > RED 6px</div>
    
</div>
<div class="flex">
${
        [{v:1, name: 1}, {v:2, name: 2}].map(item =>{
            return `<div class=" text-xl bg-purple text-white p-3 m-2"> ${item.name}</div>`
        })
    }
</div>
</div>
    `

}