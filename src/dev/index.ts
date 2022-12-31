const root: any = document.querySelector(".root")
// background color styles
const bgColor = ['bg-red', 'bg-green', 'bg-yellow', 'bg-orange', 'bg-purple']
const borderColor = ['border-red-1', 'border-purple-2', 'border-orange-4', "border-green-6", "border-pink-8", 'border-t-4', "border-l-4", "border-r-red-4"]
const typographic = ['text-2xl', "text-xl", "text-lg", "text-md", 'text-sm", "text-sml','text-xs', 'text-2xs']
const typographicColors = ['text-red-2xl', "text-gray-xl", "text-pink-lg", "text-yellow-md", 'text-purple-sm", "text-sml','text-xs', 'text-2xs']
const rootElem: any=`
<div class="flex ">
${
    bgColor.map(item => {
        const color = item.split('-')[1]
        return `

<div class="p-3 mx-3 cap ${item} ${color !=='orange' && color !=='yellow' ? 'text-white':''}">${item.split("-")[1]} Background</div>`
    })
}
</div>
<!-- Borders-->
<div class="flex">

${
    borderColor.map(item => {
        return `<div class="m-2 cap p-3 border ${item}"> ${item.split('-')[2]}px ${item.split('-')[1]} Border</div>`;
    })
}
</div>

<!--..TEXT Styling -->
<div class="flex">
<div class="dlex">
${
    typographic.map(item => {
        return `<div class="p-3 mx-3 cap ${item}"> Atoria ${item.split('-')[1]}</div>`
    })
}
</div>

<div class="dlex">
${
    typographicColors.map(item => {
        return `<div class="p-3 mx-3 cap ${item}"> Atoria ${item.split('-')[1]}</div>`
    })
}
</div>
</div>
`;
root.innerHTML = rootElem