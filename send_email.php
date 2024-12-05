<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 폼에서 전송된 데이터 가져오기
    $question_type = $_POST['question'];
    $company = $_POST['title'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $content = $_POST['content'];

    // 질문 유형 매핑
    $question_types = array(
        "1" => "입소문마케팅문의",
        "2" => "집중마케팅문의",
        "3" => "제품판매교육문의",
        "4" => "마케팅견적문의",
        "5" => "그외마케팅문의"
    );

    // 이메일 내용 구성
    $to = "ccw2316@naver.com"; // 받는 사람 이메일 주소
    $subject = "[상담신청] " . $question_types[$question_type];
    
    $message = "
    <html>
    <head>
        <title>새로운 상담신청</title>
    </head>
    <body>
        <h2>상담신청 내용</h2>
        <table>
            <tr>
                <th>질문유형:</th>
                <td>{$question_types[$question_type]}</td>
            </tr>
            <tr>
                <th>업종/상호명:</th>
                <td>{$company}</td>
            </tr>
            <tr>
                <th>연락처:</th>
                <td>{$mobile}</td>
            </tr>
            <tr>
                <th>이메일:</th>
                <td>{$email}</td>
            </tr>
            <tr>
                <th>문의내용:</th>
                <td>{$content}</td>
            </tr>
        </table>
    </body>
    </html>
    ";

    // 이메일 헤더 설정
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: ccw3126@naver.com';

    // 이메일 발송
    if(mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => '상담신청이 완료되었습니다.']);
    } else {
        echo json_encode(['success' => false, 'message' => '전송 중 오류가 발생했습니다.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => '잘못된 접근입니다.']);
}
?> 