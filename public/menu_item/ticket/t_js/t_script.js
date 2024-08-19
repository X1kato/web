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



}