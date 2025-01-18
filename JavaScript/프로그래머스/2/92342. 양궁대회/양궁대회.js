function solution(n, info) {
  // 전역적으로 최적 해(배열)과 최대 점수 차이 기록
  let bestArr = null;     // 가장 좋은 분배 상태
  let bestDiff = 0;       // 최대 점수 차이(라이언 - 어피치)

  // 점수 계산 함수
  // cur[i] > info[i] 인 경우 (10 - i) 점수를 라이언 획득
  // info[i] >= cur[i] 인 경우 (10 - i) 점수를 어피치 획득
  // (단, cur[i]와 info[i] 둘 다 0이면 아무도 점수 X)
  function getScoreDiff(cur) {
    let ryanScore = 0;
    let apeachScore = 0;

    for (let i = 0; i < 11; i++) {
      if (cur[i] === 0 && info[i] === 0) {
        continue; // 둘 다 0발이면 점수 없음
      }
      if (cur[i] > info[i]) {
        // 라이언 획득
        ryanScore += (10 - i);
      } else {
        // 어피치 획득
        apeachScore += (10 - i);
      }
    }
    return ryanScore - apeachScore;
  }

  // 배열 비교 함수
  // - 점수 차이가 동일할 때, "가장 낮은 점수를 더 많이 맞힌" 분배를 선택
  // - 문제에서 말하는 기준은 '오른쪽(낮은 점수)부터 비교했을 때 더 큰 값을 갖는 배열'이 더 좋음
  // - 예: [0,0,2] vs [1,0,1] -> 뒤에서부터 비교: 2 vs 1 => 앞쪽 배열이 더 좋음
  //   즉, index=2 -> 2 > 1 => 첫 번째가 더 좋은 분배
  function isBetterArr(cur, best) {
    for (let i = 10; i >= 0; i--) {
      if (cur[i] > best[i]) return true;
      if (cur[i] < best[i]) return false;
    }
    return false; // 완전히 동일하다면 false
  }

  /**
   * 백트래킹 함수
   * @param {number} arrow 남은 화살 수
   * @param {number[]} cur 현재까지의 분배 상태(길이 11)
   * @param {number} depth 현재 과녁 인덱스 (0 ~ 10)
   */
  function backtrack(arrow, cur, depth) {
    // 과녁이 0~10까지 총 11개이므로 depth===11이면 모든 과녁을 처리한 상태
    if (depth === 11) {
      // 화살을 모두 사용한 경우만 점수 계산
      if (arrow === 0) {
        const diff = getScoreDiff(cur);
        if (diff > bestDiff) {
          // 점수 차이가 기존보다 더 크면 갱신
          bestDiff = diff;
          bestArr = cur.slice(); // 복사해서 저장
        } else if (diff === bestDiff && diff > 0) {
          // 점수 차이가 동일하고 0보다 클 때
          // "더 낮은 점수를 많이 맞힌" 분배 체크
          if (isBetterArr(cur, bestArr)) {
            bestArr = cur.slice();
          }
        }
      }
      return;
    }

    // (중요) 마지막 과녁(= depth===10)에서는 남은 arrow를 전부 사용해야 함
    // 왜냐하면 n발을 전부 사용해야 한다는 조건이 있기 때문
    if (depth === 10) {
      cur[depth] = arrow;        // 남은 화살 전부 사용
      backtrack(0, cur, depth+1);
      cur[depth] = 0;           // 복구
      return;
    }

    // 0발 ~ arrow발 쏠 수 있음
    // cur[depth] = shoot
    for (let shoot = 0; shoot <= arrow; shoot++) {
      cur[depth] = shoot;
      backtrack(arrow - shoot, cur, depth + 1);
      cur[depth] = 0; // 백트래킹 복구
    }
  }

  // 백트래킹 시작
  backtrack(n, Array(11).fill(0), 0);

  // 만약 bestDiff가 0 이하라면(즉, 이길 수 있는 경우의 수가 없다면) [-1]
  if (bestDiff <= 0) {
    return [-1];
  }
  return bestArr;
}
