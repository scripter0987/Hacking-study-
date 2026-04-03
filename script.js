function attack() {
    document.getElementById("result").innerText = "⚠️ 공격 시뮬레이션: 취약점이 발견되었습니다!";
    document.getElementById("result").style.color = "red";
}

function secure() {
    document.getElementById("result").innerText = "✅ 보안 적용: 방어막이 활성화되었습니다.";
    document.getElementById("result").style.color = "green";
}
