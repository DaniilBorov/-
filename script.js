const tg = window.Telegram.WebApp;
tg.expand();

function buy(product) {
  tg.sendData(JSON.stringify({ action: "buy", item: product }));
  alert(`Вы выбрали: ${product}`);
}
