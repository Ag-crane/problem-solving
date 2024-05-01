def max_subarray_sum_dp(nums):
    # dp 배열 초기화
    dp = [0] * len(nums)
    dp[0] = nums[0]
    
    # 각 원소에 대해 dp 값을 계산
    for i in range(1, len(nums)):
        dp[i] = max(nums[i], dp[i-1] + nums[i])
    
    # dp 배열에서 최대값을 찾아 반환
    return max(dp)

# 입력 받기
n = int(input().strip())
arr = list(map(int, input().strip().split()))

# 최대 부분합 계산
result = max_subarray_sum_dp(arr)
print(result)
