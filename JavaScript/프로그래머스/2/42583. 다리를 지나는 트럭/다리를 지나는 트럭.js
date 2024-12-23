function solution(bridge_length, weight, truck_weights) {
    const trucks = truck_weights.reverse() // 스택
    const bridge = Array(bridge_length).fill(0) // 큐
    
    let t = 0
    while (bridge.some(e=>e!==0) || trucks.length>0) {
        t++
        bridge.shift()
        const sum = bridge.reduce((a,c) => a+c)
        if (trucks.at(-1) + sum <= weight) {
            bridge.push(trucks.pop())
        } else {
            bridge.push(0)
        }
    }
    
    return t
}