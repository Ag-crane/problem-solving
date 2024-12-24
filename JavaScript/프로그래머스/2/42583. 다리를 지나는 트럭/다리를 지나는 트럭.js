function solution(bridge_length, weight, truck_weights) {
    const trucks = truck_weights.reverse() // 스택
    const bridge = Array(bridge_length).fill(0) // 큐
    let bridge_weight = 0
    let t = 0
    while (bridge_weight>0 || trucks.length>0) {
        t++
        bridge_weight -= bridge.shift()
        if (trucks.at(-1) + bridge_weight <= weight) {
            let next_truck = trucks.pop()
            bridge.push(next_truck)
            bridge_weight += next_truck
        } else {
            bridge.push(0)
        }
    }
    
    return t
}