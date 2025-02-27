console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

// 문서가 로드된 후 실행되도록 보장
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bgm");

  window.playMusic = function () {
    audio.play().catch((error) => {
      console.log("음악 재생이 차단되었습니다. 사용자 액션이 필요합니다.", error);
    });
  };

  window.pauseMusic = function () {
    audio.pause();
  };
});

// 댓글 리스트를 화면에 표시하는 함수
function displayComments() {
  const commentList = document.getElementById('commentList');
  commentList.innerHTML = ''; // 기존 댓글 리스트를 비움

  const comments = JSON.parse(localStorage.getItem('comments')) || []; // 로컬스토리지에서 댓글 데이터 가져오기

  // 최신 댓글이 위로 오게 배열을 역순으로 정렬
  comments.reverse().forEach(comment => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">${comment}</div>
      </div>
    `;
    commentList.appendChild(li);
  });
}

// 댓글을 추가하는 함수
function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentText = commentInput.value.trim();

  if (commentText) {
    const comments = JSON.parse(localStorage.getItem('comments')) || []; // 기존 댓글 리스트 가져오기
    comments.push(commentText); // 새 댓글 추가
    localStorage.setItem('comments', JSON.stringify(comments)); // 로컬스토리지에 저장

    commentInput.value = ''; // 입력란 비우기
    alert("댓글이 등록되었습니다!");
    displayComments(); // 댓글 리스트 갱신
  }
}

// 댓글 입력란을 초기화하는 함수
function resetComment() {
  document.getElementById('commentInput').value = ''; // 입력란 비우기
}

// 페이지 로드 시 기존 댓글을 표시
window.onload = function() {
  displayComments();
};
