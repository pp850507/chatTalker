
//gotop
$(".gotop").on("click", function(event) {
    $("html, body").animate({ scrollTop: 0 }, 500);
});



// 選擇方案按按鈕時會改變文字
// 預設增加樣式，當點擊到其他按鈕時預設樣式移除
$('.btn1').addClass('current');
$('.btn2 ,.btn3 ,.btn4 ,.btn5').click(function(){
    $('.btn1').removeClass('current');
});

//點擊按鈕顯示不同文字
$('.btn1').click(function(){
    $('.quantity_left_people').html('<p>10000 <sub>位</sub></p>');
    $('.quantity_right_people').html('<p>600 <sub>TWD</sub></p>');
    $('.money').html('<p>1600 <sub>TWD</sub></p>');
});
    $('.btn2').click(function(){
    $('.quantity_left_people').html('<p>15000 <sub>位</sub></p>');
    $('.quantity_right_people').html('<p>500 <sub>TWD</sub></p>');
    $('.money').html('<p>1500 <sub>TWD</sub></p>');
});
    $('.btn3').click(function(){
    $('.quantity_left_people').html('<p>20000 <sub>位</sub></p>');
    $('.quantity_right_people').html('<p>400 <sub>TWD</sub></p>');
    $('.money').html('<p>1400 <sub>TWD</sub></p>');
});
    $('.btn4').click(function(){
    $('.quantity_left_people').html('<p>25000 <sub>位</sub></p>');
    $('.quantity_right_people').html('<p>300 <sub>TWD</sub></p>');
    $('.money').html('<p>1300 <sub>TWD</sub></p>');
});
    $('.btn5').click(function(){
    $('.quantity_left_people').html('<p>>25000 <sub>位</sub></p>');
    $('.quantity_right_people').html('<p>150 <sub>TWD</sub></p>');
    $('.money').html('<p>1150 <sub>TWD</sub></p>');
});



//常見問題
$('.question_a').click(function (e) { 
    // 取消a標籤的預設行為
    e.preventDefault();

    // 指定自身元素.尋找下層問題增加css樣式
    $(this).find('.question_h3').toggleClass('text-green');

    // 指定自身元素.尋找下層icon做關閉開啟變換
    $(this).find('.question_img').toggle();

    //指定自身元素.尋找同層回答做關閉開啟變換
    $(this).siblings('.question_p').slideToggle()

});