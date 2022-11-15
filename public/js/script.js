if ("serviceWorker" in navigator) {
  // Service workerを登録する
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service worker registered.");
  });
}
