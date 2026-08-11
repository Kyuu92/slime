// 最初のステータス、状態管理
let hunger = 100;
let energy = 100;

// 画面を更新、現在ステータスを反映させる
function updateScreen() {

  // 数字を画面に反映させる
  document.getElementById("hungerText").innerText = hunger;
  document.getElementById("energyText").innerText = energy;
  

  // スライムの様子を変える
  //ステータスによって絵文字を変える
  let pet = document.getElementById("pet");
  


  //０以下はゲームオーバー、３０以下はピンチ、それ以外は元気
  if (hunger <= 0 || energy <= 0) {
    pet.innerText = "👻"; // どっちかが0になったらゲームオーバー
    alert("ゲームオーバー…スライムはいなくなりました。");
  } else if (hunger <= 30 || energy <= 30) {
    pet.innerText = "💦"; // ピンチの時の顔
  } else {
    pet.innerText = "👾"; // 元気な時の顔
  }
}

// 「ごはんをあげる」ボタンを押したとき
function feed() {
  if (hunger <= 0 || energy <= 0) return; // ゲームオーバーなら何もしない
  
  hunger += 20; // おなかが20回復
  if (hunger > 100) hunger = 100; // 上限は100
  

  energy -= 10; // 食べるのも疲れるので、げんきが10減る
  

  updateScreen(); // 画面を更新
}




// 「ねむる」ボタンを押したとき
function sleep() {
  if (hunger <= 0 || energy <= 0) return; // ゲームオーバーなら何もしない
  
  energy += 30; // げんきが30回復
  if (energy > 100) energy = 100; // 上限は100
  

  
  hunger -= 15; // 寝てる間はおなかが15減る
  


  updateScreen(); // 画面を更新
}