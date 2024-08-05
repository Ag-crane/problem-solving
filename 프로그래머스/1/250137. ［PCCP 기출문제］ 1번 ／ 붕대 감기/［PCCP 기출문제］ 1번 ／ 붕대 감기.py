def solution(bandage, health, attacks):
    # bandage : [시전 시간, 1초당 회복량, 추가 회복량]
    # health : 최대 체력
    # attacks: [[공격 시간, 피해량], ...] 
    time = 0
    successive = 0
    current_health = health
    attacks.reverse()
    attack_time, damage = attacks.pop()

    while True:
        time += 1
        if time == attack_time:
            successive = 0
            current_health -= damage
            if current_health <= 0:
                current_health = -1
                break
            if attacks:
                attack_time, damage = attacks.pop()
            else:
                break
        else:
            current_health = min(health, current_health + bandage[1])
            successive += 1
            if successive == bandage[0]:
                current_health = min(health, current_health + bandage[2])
                successive = 0
        
    return current_health