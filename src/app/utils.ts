/* returns the list of integers based on the index */
export function range(start: number, end: number) {
    return Array(end - start + 1).fill(end).map((_, idx) => start + idx)
}
