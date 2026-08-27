$(function() {
 // セルをマウスオーバー
 $("td").hover(function() {
   /***  マウスオーバー時の処理 ***/


   // 親要素（tr）にtargetクラスを追加
   $(this).parent().addClass("target");


   // 親要素から見て、自分が何番目の子要素なのか調べる
   let myIndex = $(this).index();
   // console.log(myIndex);
  
   // myIndexに1プラス
   myIndex++;


   // 各行の「myIndex番目の子要素」にtargetクラスを追加する
   $("td:nth-child(" + myIndex + ")").addClass("target");


 }, function() {
   /*** マウスアウト時の処理 ***/


   // targetクラスを削除
   $(".target").removeClass("target");
 });
});
