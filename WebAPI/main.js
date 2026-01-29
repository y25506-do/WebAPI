// 検索されたとき
document.getElementById("button").addEventListener("click", () =>{
  const num = document.getElementById("number").value;
  
  fetch("weapons.json")
    .then(result => result.json())
    .then(weapons => {
      const weapon = weapons[num];
      // 武器が存在しない場合
      if(!weapons[num]){
        alert("武器が見つかりません");
        return;
      }
      // 武器情報を表示
      document.getElementById("name").textContent = weapon.name;
      document.getElementById("image").src = weapon.image;
      document.getElementById("image").alt = weapon.name;
      document.getElementById("syokai").textContent = weapon.syokai;
      document.getElementById("osusume").textContent = "おススメ度：" + "★".repeat(weapon.osusume);
      document.getElementById("result").style.display = "block";
    })
    .catch(err =>{
      console.error(err);
      alert("データ取得に失敗しました");
    });
});
// Enter検索
document.getElementById("number").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // select防止
    document.getElementById("button").click();
  }
});
// リセット
const result = document.getElementById("result");

document.getElementById("reset").addEventListener("click", () => {
  // 初期化
  document.getElementById("number").value = "";
  // 結果エリアを非表示
  result.style.display = "none";
  // クリア
  document.getElementById("name").textContent = "";
  document.getElementById("image").src = "";
  document.getElementById("syokai").textContent = "";
  document.getElementById("osusume").textContent = "";
});
