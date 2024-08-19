'use strict'

{

//➁メニュー
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
    
//btn.classList.toggle('active');
//btnにactiveが付いていなければ付ける。付いていれば外す。
    
btn.addEventListener('click' ,function(){
    btn.classList.toggle('active');
    container.classList.toggle('active');
});

//➂選択ボタン
const food_btn = document.getElementById('food_btn');
const shop_btn = document.getElementById('shop_btn');

//中身
const food = document.querySelector('.food');
const shop = document.querySelector('.shop');

food_btn.addEventListener('click',function(){
    food_btn.classList.remove('active');
    shop_btn.classList.remove('active');
    food.classList.remove('active');
    shop.classList.remove('active');
});

shop_btn.addEventListener('click',function(){
    food_btn.classList.add('active');
    shop_btn.classList.add('active');
    food.classList.add('active');
    shop.classList.add('active');
});


// 絞り込み検索

// ➉グッズボタン単体 全てを配列で取得する
const buttons = document.querySelectorAll(".food_button");
// (12)グッズアイテム 全てを配列で取得する
const items = document.querySelectorAll(".food_item");


// ボタン
const filterContent = (e) => {
  // class="food_active" が付いているものを探し、"goods_active"　を外す
  document.querySelector(".food_active").classList.remove("food_active");
  // e.target(クリックしたもの)に "food_active" を追加
  e.target.classList.add("food_active");

  // 画像
  items.forEach((item) => {
    // class="hide"を追加
    item.classList.add("hide");

    // e.target.dataset.name = クリックしたデータ属性の名前
    if (item.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      // class="hide"を外す
      item.classList.remove("hide");
    }
  });
};

// filterContent をクリックした時に処理
buttons.forEach((data) => data.addEventListener("click", filterContent));



}//最後