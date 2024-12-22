function solution(progresses, speeds) {
  // 1) 각 기능이 완료되기까지 필요한 일수를 구해 '큐'에 담는다.
  const queue = [];
  for (let i = 0; i < progresses.length; i++) {
    const days = Math.ceil((100 - progresses[i]) / speeds[i]);
    queue.push(days);
  }
  
  // 2) 큐를 이용해 배포 작업을 진행한다.
  const answer = [];

  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    // 큐의 맨 앞(첫 번째 기능)이 기준이 된다.
    const current = queue.shift(); 
    let count = 1;  // 기준 기능은 이미 배포할 수 있다고 보고 시작

    // 다음 기능들이 현재 기능과 함께 배포될 수 있는지 확인
    // (= 큐의 맨 앞이 current 이하이면 함께 배포 가능)
    while (queue.length > 0 && queue[0] <= current) {
      queue.shift();
      count++;
    }

    // 함께 배포할 수 있는 기능들 세어 배열에 담는다.
    answer.push(count);
  }

  return answer;
}
