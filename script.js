function fetchCat() {
    const catBox = document.getElementById('cat-box');
    catBox.innerHTML = "<p>데이터를 불러오는 중입니다...</p>";

    // Open API 호출 (fetch 함수 사용)
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catUrl = data[0].url;
            // 화면에 이미지 태그 동적으로 꽂아넣기
            catBox.innerHTML = `<img src="${catUrl}" alt="랜덤 고양이">`;
        })
        .catch(error => {
            console.error('에러 발생:', error);
            catBox.innerHTML = "<p>데이터를 불러오는 데 실패했습니다.</p>";
        });
}