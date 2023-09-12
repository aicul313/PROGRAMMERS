function solution(d, budget) {
    let answer = 0;

    d.sort((a, b) => a - b);

    d.forEach((over) => {
        if (over > budget) {
            return;
        }

        answer += 1;
        budget -= over;
    });

    return answer;
}
