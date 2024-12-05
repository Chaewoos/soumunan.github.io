document.addEventListener('DOMContentLoaded', function() {
    // 로고 클릭 이벤트 수정
    document.querySelector('.logo a').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '소문난 마케팅 홈페이지.html';
    });

    // Swiper 슬라이더 초기화 수정
    const mainSwiper = new Swiper('.mainVisual .swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    // 섹션 표시 함수
    function showSections() {
        const sections = [
            document.querySelector('.event'),
            document.querySelector('.urgency'),
            document.querySelector('#footer')
        ];

        sections.forEach((section, index) => {
            if (section) {
                setTimeout(() => {
                    section.classList.add('visible');
                }, index * 300);
            }
        });
    }

    // 스크롤 기반 표시
    window.addEventListener('scroll', function() {
        const sections = [
            document.querySelector('.event'),
            document.querySelector('.urgency'),
            document.querySelector('#footer')
        ];

        sections.forEach(section => {
            if (section) {
                const position = section.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if(position < screenPosition) {
                    section.classList.add('visible');
                }
            }
        });
    });

    // 헤더 스크롤 효과
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        });
    }

    // 상담신청 폼 제출
    const consultForm = document.getElementById('consultForm');
    if (consultForm) {
        consultForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 필수 입력 확인
            const required = consultForm.querySelectorAll('[required]');
            let isValid = true;
            
            required.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                // 폼 데이터 수집
                const formData = new FormData(consultForm);
                
                // AJAX 요청
                fetch('send_email.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert(data.message);
                        consultForm.reset();
                    } else {
                        alert(data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('전송 중 오류가 발생했습니다.');
                });
            } else {
                alert('필수 항목을 모두 입력해주세요.');
            }
        });
    }

    // 이미지 지연 로딩
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// 스크롤 애니메이션
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);