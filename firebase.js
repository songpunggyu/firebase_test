const firebaseConfig = {
    apiKey: "AIzaSyAMZUh50MMJF55XWz1ACp23OadRAz0lAAI",
    authDomain: "project-spg-30e9e.firebaseapp.com",
    databaseURL: "https://project-spg-30e9e-default-rtdb.firebaseio.com",
    projectId: "project-spg-30e9e",
    storageBucket: "project-spg-30e9e.appspot.com",
    messagingSenderId: "449120659910",
    appId: "1:449120659910:web:bc6daf5b2e94983e95aac7",
    measurementId: "G-49HRK6FQT4"
};

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

// 데이터 저장 실습
function writeUserData(userId, email, nick) {
    database.ref("users/" + userId).set({
        email: email,
        nick: nick
    });
}

// 데이터 읽기 실습
// 1. 전체 조회된 결과 출력
// - 테이블 태그 or 목록 태그를 활용해서 출력



// 2. 특정 사용자 조회
// - id값 입력받은 후 해당 사용자의 email, nick 출력



// 데이터 읽기 실습
function readUserData() {
    database.ref("users/").on('value',(snapshot) => {
        // 실시간 데이터베이스 값 접근
        console.log(snapshot.val());

        let data = snapshot.val();
        let keys = Object.keys(data);

        console.log(Object.keys(data));
        console.log(data["vndrb123"]);
        console.log(data[keys[0]]);

        const result = document.getElementById("result");

        // 데이터베이스 웹 파이지 출력
        result.innerText = `${data[keys[0]].email} / ${data[keys[0]].nick}`;

    })
}


/////////////////////////////////////////////////////////////////////////////////////

const btn = document.frm.btn;
const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", () => {
    readUserData();
});

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const idinput = document.frm.id.value;
    const emailinput = document.frm.email.value;
    const nickinput = document.frm.nick.value;

    console.log("아이디:", idinput);
    console.log("이메일:", emailinput);
    console.log("닉네임:", nickinput);

    // console.log(id, email, nick);

    writeUserData(idinput, emailinput, nickinput);
});

