const toggleRubyBtn = document.getElementById("toggleRubyBtn");
const rubies = document.querySelectorAll("rt");
let rubyHidden = false;

toggleRubyBtn.addEventListener("click", () => {
  rubyHidden = !rubyHidden;
  rubies.forEach((rt) => {
    rt.style.display = rubyHidden ? "none" : "";
  });
  if (rubyHidden) {
    toggleRubyBtn.innerHTML = "ルビを表示する";
  } else {
    toggleRubyBtn.innerHTML =
      "<ruby>ルビ<rt>るび</rt></ruby>を<ruby>非<rt>ひ</rt>表示<rt>ひょうじ</rt></ruby>にする";
  }
});

async function copyToClipboard() {
  const input = document.getElementById("copyTarget");
  try {
    await navigator.clipboard.writeText(input.value); // 新しいAPIを使ってコピー
    showCopyMessage();
  } catch (err) {
    console.error("コピーに失敗しました: ", err);
  }
}

function showCopyMessage() {
  const message = document.getElementById("copyMessage");
  message.style.display = "block"; // メッセージを表示
  setTimeout(() => {
    message.style.display = "none"; // 2秒後に非表示にする
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleElements = (buttonId) => {
    document.getElementById(buttonId).addEventListener("click", function () {
      const bigElements = document.querySelectorAll(".hide-big");
      const portraitElements = document.querySelectorAll(".hide-on-portrait");

      [bigElements, portraitElements].forEach((elements) => {
        elements.forEach((element) => {
          element.style.display =
            window.getComputedStyle(element).display === "none"
              ? "block"
              : "none";
        });
      });
    });
  };

  toggleElements("toggleButton");
  toggleElements("toggleButton2");
  toggleElements("toggleButton3");
});

// サイドバーのボタンとサイドバーの要素を取得
const toggleButton = document.getElementById("toggle-button");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay"); // オーバーレイを取得
let sidebarVisible = false; // サイドバーの状態を管理する変数

// サイドバーの表示・非表示を切り替える
toggleButton.addEventListener("click", () => {
  sidebarVisible = !sidebarVisible; // 状態を切り替え
  sidebar.classList.toggle("hidden", !sidebarVisible); // サイドバーの表示・非表示を切り替え
  overlay.classList.toggle("hidden", !sidebarVisible); // オーバーレイの表示・非表示も切り替え
  updateToggleButtonText(); // ボタンのテキストを更新
});
// ボタンのテキストを更新する関数
function updateToggleButtonText() {
  toggleButton.innerHTML = sidebarVisible
    ? "<ruby>Đóng<rt>（<ruby>閉<rt>と</rt><ruby>じる）</rt></ruby>"
    : "≡"; // 状態に応じてテキストを変更
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sidebarVisible) {
    sidebarVisible = false; // 状態を更新
    sidebar.classList.add("hidden"); // サイドバーを閉じる
    overlay.classList.add("hidden"); // オーバーレイを閉じる
    updateToggleButtonText(); // ボタンのテキストを元に戻す
  }
});
document.addEventListener("click", (event) => {
  if (
    !sidebar.contains(event.target) &&
    !toggleButton.contains(event.target) &&
    sidebarVisible
  ) {
    sidebarVisible = false; // 状態を更新
    sidebar.classList.add("hidden"); // サイドバーを閉じる
    overlay.classList.add("hidden"); // オーバーレイを閉じる
    updateToggleButtonText(); // ボタンのテキストを元に戻す
  }
});
overlay.addEventListener("click", () => {
  sidebarVisible = false; // 状態を更新
  sidebar.classList.add("hidden"); // サイドバーを閉じる
  overlay.classList.add("hidden"); // オーバーレイを閉じる
  updateToggleButtonText(); // ボタンのテキストを元に戻す
});
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var closeBtn = document.getElementsByClassName("close")[0];
var images = document.querySelectorAll(".thumbnail");
images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});
function closeModal() {
  modal.style.display = "none";
}
closeBtn.onclick = function () {
  closeModal();
};
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
document.addEventListener("click", (event) => {
  if (
    !sidebar.contains(event.target) &&
    !toggleButton.contains(event.target) &&
    !sidebar.classList.contains("hidden")
  ) {
    sidebar.classList.add("hidden");
    overlay.classList.add("hidden"); // オーバーレイも隠す
    updateToggleButtonText();
  }
});
overlay.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  overlay.classList.add("hidden"); // オーバーレイも隠す
  updateToggleButtonText();
});
