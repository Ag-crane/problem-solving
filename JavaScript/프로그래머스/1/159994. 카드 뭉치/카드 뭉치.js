function solution(cards1, cards2, goal) {
    cards1.reverse()
    cards2.reverse()
    for (const e of goal) {
        if (cards1.at(-1) === e) {
            cards1.pop()
        } else if (cards2.at(-1) === e) {
            cards2.pop()
        } else {
            return "No"
        }
    }
    return "Yes"
}