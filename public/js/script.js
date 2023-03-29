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

  button?.addEventListener("click", () => {
    console.log("click");
    eventPrompt.prompt();
  });

  // バッジ表示
  const number = 2;

  if (navigator.setAppBadge) {
    navigator.setAppBadge(number);
  } else if (navigator.setExperimentalAppBadge) {
    navigator.setExperimentalAppBadge(number);
  } else if (window.ExperimentalBadge) {
    window.ExperimentalBadge.set(number);
  }

  // バッジを消す
  const clearButton = document.querySelector("#clear");

  clearButton?.addEventListener("click", () => {
    if (navigator.setAppBadge) {
      navigator.clearAppBadge();
    } else if (navigator.setExperimentalAppBadge) {
      navigator.clearExperimentalAppBadge();
    } else if (window.ExperimentalBadge) {
      window.ExperimentalBadge.clear();
    }

    clearButton.disabled = true;
  });
}

window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "0e24b5e3-24ec-453b-aff6-e85b4bf575f8",
  });
});
