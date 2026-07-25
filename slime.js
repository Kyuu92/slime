// 最初のステータス（変数といいます）
let hunger = 100;
let energy = 100;

// 画面を更新する命令
function updateScreen() {
  // 数字を画面に反映させる
  document.getElementById("hungerText").innerText = hunger;
  document.getElementById("energyText").innerText = energy;
  
  // スライムの様子を変えるルール
  let pet = document.getElementById("pet");
  
  if (hunger <= 0 || energy <= 0) {
    pet.innerText = "👻"; // どっちかが0になったらゲームオーバー
    alert("ゲームオーバー…スライムはいなくなりました。");
  } else if (hunger <= 30 || energy <= 30) {
    pet.innerText = "💦"; // ピンチの時の顔
  } else {
    pet.innerText = "👾"; // 元気な時の顔
  }
}

// 「ごはんをあげる」ボタンを押したときの命令
function feed() {
  if (hunger <= 0 || energy <= 0) return; // ゲームオーバーなら何もしない
  
  hunger += 20; // おなかが20回復
  if (hunger > 100) hunger = 100; // 100を超えないようにする
  
  energy -= 10; // 食べるのも疲れるので、げんきが10減る
  
  updateScreen(); // 画面を更新！
}

// 「ねむらせる」ボタンを押したときの命令
function sleep() {
  if (hunger <= 0 || energy <= 0) return; // ゲームオーバーなら何もしない
  
  energy += 30; // げんきが30回復
  if (energy > 100) energy = 100; // 100を超えないようにする
  
  hunger -= 15; // 寝てる間におなかが15減る
  
  updateScreen(); // 画面を更新！
}