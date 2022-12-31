export const textContent = () => {
    const typographic = ['text-2xl', "text-xl", "text-lg", "text-md", 'text-sm", "text-sml', 'text-xs', 'text-2xs']

    const typographicColors = ['text-red-2xl', "text-gray-xl", "text-pink-lg", "text-yellow-md", 'text-purple-sm", "text-sml', 'text-xs', 'text-2xs']

    return `

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
`

}