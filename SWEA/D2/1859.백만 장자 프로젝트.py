T = int(input())

for test_case in range(1,T+1):
    
    N = int(input())
    prices = list(map(int, input().split()))
    
    profit = 0
    
    # length = len(prices)
    # for i in range(length-1):
    #     profit += max(prices) - prices[0]
    #     prices.pop(0)
    ## 오답 - 시간초과
    
    max_price = prices[-1]
    for i in range( len(prices)-2,-1,-1):
        if prices[i] <  max_price:
            profit += max_price - prices[i]
        else :
            max_price = prices[i]
            
    
    print(f'#{test_case} {profit}')

        
    