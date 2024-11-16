function solution(sizes) {
    sizes = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)])
    let widths = sizes.map(([w, _]) => w)
    let heights = sizes.map(([_, h]) => h)
    return Math.max(...widths) * Math.max(...heights)
}