/**
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
export const range = (start: number, end: number) => {
    // @ts-ignore
    return (start === end)? [start] : [start, ...range(start+1,end)]
}

// --------------------------------------------------- Generate colums




