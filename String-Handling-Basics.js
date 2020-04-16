/*
    문제 설명
    문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

    제한 사항
    s는 길이 1 이상, 길이 8 이하인 문자열입니다.

    입출력 예
    s	return
    a234	false

*/

function solution(s) {
    // 아래 2개는 테스트케이스 11번에서 막힘. (지수 표현식때문에 막힘.)
    // return (s.length == 4 || s.length == 6) && isFinite(s) ? true : false;
    // return s.length == 4 || s.length == 6 ? !isNaN(s) : false 
    
    const regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}