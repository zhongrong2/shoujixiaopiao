//保存信息
$(".count").click(function () {

    // 获取提交数据
    var infoData = $(".info").serialize();

    var showamount = $(".showamount");
    var showfav = $(".showfav");
    var showpay = $(".showpay");

    // 判断不为空
    var phone = $(".phone").val();
    var gunnum = $(".gunnum").val();
    var gunmoney = $(".gunmoney").val();
    if(phone==""){
        $.myAlert({title:'提示框',message:'请输入手机号/电子会员卡号！'});
    }else{
        if (gunnum==""){
            $.myAlert({title:'提示框',message:'请输入加油枪号！'});
        } else{
            if(gunmoney==""){
                $.myAlert({title:'提示框',message:'请输入加油金额！'})
            }else{
                console.log(infoData);

                // 都不为空提交ajax数据
                $.ajax({
                    url:'',
                    data:'infoData',
                    type:'post',
                    dataType:'json',
                    success:function (data) {
                        alert("提交成功");
                        showamount.val();
                        showfav.val();
                        showpay.val();
                    }
                })
            }
        }
    }

})

//保存金额
$(".btn").click(function () {

    var payData = $(".paybox").serialize();

    console.log(payData);
    $.ajax({
        url:'',
        data:'payData',
        type:'post',
        dataType:'json',
        success:function (data) {
            alert("提交成功");
            // window.location.href="index2.image";
        }
    })
    // window.location.href="index2.image";
})

//选择加油类型显示单价
function showprice() {
    var gasclass = $("#gasclass").val();
    var gasprice = $(".gasprice");
    console.log(gasclass);
    $.post("",gasclass,function (result) {
        gasprice.html();        //返回的单价显示
    })
}
//加油金额和加油升数二选一
function choose() {
    var amount = $(".amount");
    var number = $(".number");
    console.log(amount.val());

    if(amount.val() != ""){
        number.attr("disabled",true);
    }
    else if(number.val() != ""){
        amount.attr("disabled",true);
    }
    else{

    }
}



