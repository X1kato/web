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

//-------------------------------------------------------------------------------------------------------------

//➂スライド
const images = ['img/図1.png','img/図2.jpg','img/図3.png','img/図4.jpg','img/図5.png']

//画像
const slideImg = document.getElementById('slide_img');
//戻る
const prev = document.getElementById('prev');
//ページ
const page = document.getElementById('page');
//次へ
const next =document.getElementById('next');

//★配列の番号
let current = 0;

//ページの母数
page.textContent = `1/${images.length}`;

//次へを押したときの動作
next.addEventListener('click',function(){
    if(current + 1 < images.length){
        current ++;
        //定数：slideImgのsrc属性に、imagesの配列のcurrent番目を代入する
        slideImg.src = images[current];
    }
    page.textContent = `${current + 1}/${images.length}`;
});

//戻るを押したときの動作
prev.addEventListener('click',function(){
    if(current > 0){
        current--;
        slideImg.src = images[current];
    }
    page.textContent = `${current + 1}/${images.length}`;
});

//-------------------------------------------------------------------------------------------------------------

//➄遊び
//➊パンこうじょう:画像の切り替え
const main1 = document.getElementById('main1');
const thumb1 = document.querySelectorAll('.thumb-img1');

//thumb1を1つずつ取り出して引数(thumbnail1)に代入し、中の処理を行わせる。
thumb1.forEach(function(thumbnail1) {

    thumbnail1.addEventListener('click', function() {

        //thumbnail1.getAttribute('属性名')　thumbnail1内の属性を取得する
        let src1 = thumbnail1.getAttribute('src');
        //main1のsrc属性を変数(src1)に代入
        main1.src = src1;
    });
 });


//➊パンこうじょう:メイン画面へ移動
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('main_list1').addEventListener('click',  function() {

        const scroll_1 = document.getElementById('scroll_1');
        //特定の要素までスクロールする
        scroll_1.scrollIntoView();
    });
});


//➊パンこうじょう:フロアマップへ戻る
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('return_mp1').addEventListener('click', function() {
        
        const map = document.getElementById('map');
        //特定の要素までスクロールする
        map.scrollIntoView();
    });
});

//-------------------------------------------------------------------------------------------------------------

//➋みんなのまち:画像の切り替え
const main2 = document.getElementById('main2');
const thumb2 = document.querySelectorAll('.thumb-img2');

//thumb1を1つずつ取り出して引数(thumbnail1)に代入し、中の処理を行わせる。
thumb2.forEach(function(thumbnail2) {

    thumbnail2.addEventListener('click', function() {

        //thumbnail1.getAttribute('属性名')　thumbnail1内の属性を取得する
        let src2 = thumbnail2.getAttribute('src');
        //main1のsrc属性を変数(src1)に代入
        main2.src = src2;
    });
 });

//➋みんなのまち:メイン画面へ移動
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('main_list2').addEventListener('click',  function() {

        const scroll_2 = document.getElementById('scroll_2');
        //特定の要素までスクロールする
        scroll_2.scrollIntoView();
    });
});


//➋みんなのまち:フロアマップへ戻る
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('return_mp2').addEventListener('click', function() {
        
        const map = document.getElementById('map');
        //特定の要素までスクロールする
        map.scrollIntoView();
    });
});

//-------------------------------------------------------------------------------------------------------------

 //➌わんぱくアイランド:画像の切り替え
const main3 = document.getElementById('main3');
const thumb3 = document.querySelectorAll('.thumb-img3');

//thumb1を1つずつ取り出して引数(thumbnail1)に代入し、中の処理を行わせる。
thumb3.forEach(function(thumbnail3) {

    thumbnail3.addEventListener('click', function() {

        //thumbnail1.getAttribute('属性名')　thumbnail1内の属性を取得する
        let src3 = thumbnail3.getAttribute('src');
        //main1のsrc属性を変数(src1)に代入
        main3.src = src3;
    });
 });


//➌わんぱくアイランド:メイン画面へ移動
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('main_list3').addEventListener('click',  function() {

        const scroll_3 = document.getElementById('scroll_3');
        //特定の要素までスクロールする
        scroll_3.scrollIntoView();
    });
});


//➌わんぱくアイランド:フロアマップへ戻る
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('return_mp3').addEventListener('click', function() {
        
        const map = document.getElementById('map');
        //特定の要素までスクロールする
        map.scrollIntoView();
    });
});


//-------------------------------------------------------------------------------------------------------------

//➍ひろば:画像の切り替え
const main4 = document.getElementById('main4');
const thumb4 = document.querySelectorAll('.thumb-img4');

//thumb1を1つずつ取り出して引数(thumbnail1)に代入し、中の処理を行わせる。
thumb4.forEach(function(thumbnail4) {

    thumbnail4.addEventListener('click', function() {

        //thumbnail1.getAttribute('属性名')　thumbnail1内の属性を取得する
        let src4 = thumbnail4.getAttribute('src');
        //main1のsrc属性を変数(src1)に代入
        main4.src = src4;
    });
 });


//➍ひろば:メイン画面へ移動
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('main_list4').addEventListener('click',  function() {

        const scroll_4 = document.getElementById('scroll_4');
        //特定の要素までスクロールする
        scroll_4.scrollIntoView();
    });
});


//➍ひろば:フロアマップへ戻る
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('return_mp4').addEventListener('click', function() {
        
        const map = document.getElementById('map');
        //特定の要素までスクロールする
        map.scrollIntoView();
    });
});

//-------------------------------------------------------------------------------------------------------------


//➎がっこう:画像の切り替え
const main5 = document.getElementById('main5');
const thumb5 = document.querySelectorAll('.thumb-img5');

//thumb1を1つずつ取り出して引数(thumbnail1)に代入し、中の処理を行わせる。
thumb5.forEach(function(thumbnail5) {

    thumbnail5.addEventListener('click', function() {

        //thumbnail1.getAttribute('属性名')　thumbnail1内の属性を取得する
        let src5 = thumbnail5.getAttribute('src');
        //main1のsrc属性を変数(src1)に代入
        main5.src = src5;
    });
 });


//➎がっこう:メイン画面へ移動
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('main_list5').addEventListener('click',  function() {

        const scroll_5 = document.getElementById('scroll_5');
        //特定の要素までスクロールする
        scroll_5.scrollIntoView();
    });
});


//➎がっこう:フロアマップへ戻る
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('return_mp5').addEventListener('click', function() {
        
        const map = document.getElementById('map');
        //特定の要素までスクロールする
        map.scrollIntoView();
    });
}); 

//-------------------------------------------------------------------------------------------------------------

//➏わいわいパーク：画像の切り替え
const main6 = document.getElementById('main6');
const thumb6 = document.querySelectorAll('.thumb-img6');

//thumb1を1つずつ取り出して引数(thumbnail1)に代入し、中の処理を行わせる。
thumb6.forEach(function(thumbnail6) {

    thumbnail6.addEventListener('click', function() {

        //thumbnail1.getAttribute('属性名')　thumbnail1内の属性を取得する
        let src6 = thumbnail6.getAttribute('src');
        //main1のsrc属性を変数(src1)に代入
        main6.src = src6;
    });
 });

//➏わいわいパーク:メイン画面へ移動
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('main_list6').addEventListener('click',  function() {

        const scroll_6 = document.getElementById('scroll_6');
        //特定の要素までスクロールする
        scroll_6.scrollIntoView();
    });
});


//➏わいわいパーク:フロアマップへ戻る
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('return_mp6').addEventListener('click', function() {
        
        const map = document.getElementById('map');
        //特定の要素までスクロールする
        map.scrollIntoView();
    });
}); 

//-------------------------------------------------------------------------------------------------------------


//➐ボールパーク：画像の切り替え
const main7 = document.getElementById('main7');
const thumb7 = document.querySelectorAll('.thumb-img7');

//thumb1を1つずつ取り出して引数(thumbnail1)に代入し、中の処理を行わせる。
thumb7.forEach(function(thumbnail7) {

    thumbnail7.addEventListener('click', function() {

        //thumbnail1.getAttribute('属性名')　thumbnail1内の属性を取得する
        let src7 = thumbnail7.getAttribute('src');
        //main1のsrc属性を変数(src1)に代入
        main7.src = src7;
    });
 });


//➐ボールパーク:メイン画面へ移動
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('main_list7').addEventListener('click',  function() {

        const scroll_7 = document.getElementById('scroll_7');
        //特定の要素までスクロールする
        scroll_7.scrollIntoView();
    });
});


//➐ボールパーク:フロアマップへ戻る
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('return_mp7').addEventListener('click', function() {
        
        const map = document.getElementById('map');
        //特定の要素までスクロールする
        map.scrollIntoView();
    });
}); 


//------------------------------------------------------------------------------------------------------------- 

//➑アンパンマンごう：画像の切り替え
const main8 = document.getElementById('main8');
const thumb8 = document.querySelectorAll('.thumb-img8');

//thumb1を1つずつ取り出して引数(thumbnail1)に代入し、中の処理を行わせる。
thumb8.forEach(function(thumbnail8) {

    thumbnail8.addEventListener('click', function() {

        //thumbnail1.getAttribute('属性名')　thumbnail1内の属性を取得する
        let src8 = thumbnail8.getAttribute('src');
        //main1のsrc属性を変数(src1)に代入
        main8.src = src8;
    });
 });


//➑アンパンマンごう:メイン画面へ移動
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('main_list8').addEventListener('click',  function() {

        const scroll_8 = document.getElementById('scroll_8');
        //特定の要素までスクロールする
        scroll_8.scrollIntoView();
    });
});


//➑アンパンマンごう:フロアマップへ戻る
//ページが完全に読み込まれたとき
window.addEventListener('load', function(event) {

    document.getElementById('return_mp8').addEventListener('click', function() {
        
        const map = document.getElementById('map');
        //特定の要素までスクロールする
        map.scrollIntoView();
    });
});  

//-------------------------------------------------------------------------------------------------------------



}//最後


