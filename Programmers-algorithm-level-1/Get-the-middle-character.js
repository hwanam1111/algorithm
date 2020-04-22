/*
    문제 설명
    단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

    재한사항
    s는 길이가 1 이상, 100이하인 스트링입니다.
    입출력 예

    s	return
    abcde	c
*/


// substr function
// Warning: Although String.prototype.substr(…) is not strictly deprecated (as in "removed from the Web standards"), it is considered a legacy function and should be avoided when possible. It is not part of the core JavaScript language and may be removed in the future. If at all possible, use the substring() method instead.
function solution(s) {
    var answer = '';
    
    if ( s.length % 2 == 0 ) {
        answer = answer.concat(s[s.length / 2 - 1]);
        answer = answer.concat(s[s.length / 2]);
    }
    else {
        answer = answer.concat(s[parseInt(s.length/2)]);
    }
    
    return answer;
}