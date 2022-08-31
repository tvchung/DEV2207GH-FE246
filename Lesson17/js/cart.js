

$(document).ready(function(){
    // xử lý onchange trên số lượng
    $('.cart-list input[type="number"]').change(function(){
        //alert($(this).val());
        let sl = $(this).val();
        // Lấy đơn giá
        let dg = $(this).parent().siblings().children('p.price').attr("data-value");
        // alert(dg);
        let tt = parseInt(sl)*parseFloat(dg);
        // cập nhật thành tiền
        $(this).parent().siblings().children('p.thanh-tien').attr("data-value",tt);
        $(this).parent().siblings().children('p.thanh-tien').text(tt);

        tongThanhTien();
    });

    // tính tổng thành tiền
    var tongThanhTien = ()=>{
        let tong=0;
        $('p.thanh-tien').each(function(){
            let t = $(this).attr("data-value");
            tong += parseFloat(t);
        });

        // hiển thị
        $('.cart-list tfoot p.tong-cong').text(tong);
    }
});