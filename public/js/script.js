if ("serviceWorker" in navigator) {
  // Service workerを登録する
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service worker registered.");
  });

  // インストールイベントを再利用するために変数に格納する
  let eventPrompt = "";

  // インストール前のイベント
  window.addEventListener("beforeinstallprompt", (event) => {
    // インストールイベントを格納
    eventPrompt = event;

    // デフォルトのmini-infobarは非表示にする
    eventPrompt.preventDefault();

    // インストールしたかキャンセルしたかを確認する
    eventPrompt.userChoice.then((choiceResult) => {
      console.log(choiceResult.outcome); // "accepted" or "dismissed"
    });
  });

  // インストールボタンを押したら、installメニューを表示する
  const button = document.querySelector("#installButton");

  button.addEventListener("click", () => {
    console.log("click");
    eventPrompt.prompt();
  });

  // バッジ表示
  const unread = 2;
  navigator.setAppBadge(unread);
}
