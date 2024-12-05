// 푸터 컴포넌트 함수
function createFooter() {
    return `
        <div class="inner">
            <div class="info">
                <div class="info__address">
                    <span>주소: 61436 광주 동구 동계천로 150 I-PLEX 광주 1층 110호</span>
                    <span>법인명(상호): 원위즈</span>
                    <span>대표자: 신다경</span>
                    <span>사업자등록번호: 7594800889</span>
                    <span>통신판매업신고: 제2023-광주북구-1294호</span>
                </div>
                <div class="info__customer">
                    <p class="tel">0507-1368-8392</p>
                    <p>(토,일휴무)</p>
                </div>
            </div>
            <p class="copyright">Copyright © 우리동네 마부장. All rights reserved.</p>
        </div>
    `;
}

// 컴포넌트 삽입 함수
function insertComponents() {
    const footerElement = document.querySelector('#footer');
    if (footerElement) {
        footerElement.innerHTML = createFooter();
    }
}

// DOM 로드 시 실행
document.addEventListener('DOMContentLoaded', insertComponents);