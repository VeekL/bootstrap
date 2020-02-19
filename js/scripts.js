<script>
$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $("#reserveButton").click(function(){
        $("#reserveModal").modal();
    });
    $("#reserveClose").click(function(){
        $("#reserveModal").modal("hide");
    });
    $("#reserveCancel").click(function(){
        $("#reserveModal").modal("hide");
    });
    $("#loginModalButton").click(function(){
        $("#loginModal").modal();
    });
    $("#loginClose").click(function(){
        $("#loginModal").modal("hide");
    });
    $("#loginCancel").click(function(){
        $("#loginModal").modal("hide");
    });
});
</script>