$(document).ready(function () {
    var timesClicked = 1;

    $("#msg").click(function () {
        timesClicked++;
        if (timesClicked % 2 == 0) {
            $("#msg").text("বাংলা");
            $(".navbar").addClass("bg2")
            $(".navbar").addClass("bg2.ul.li.a")

        } else {
            $("#msg").text("English");
            $(".navbar").removeClass("bg2")
            $(".navbar").removeClass("bg2.ul.li.a")
        }
    })

   
        $("#show").click(function () {
            $("#navbarNav").toggle('fast');

        });
    
});