$(document).ready(function(){
    $.ajax({
        dataType: "json",
        url: '/df.json',
        success: function(data){
            $.each(data, function (index, element) {
                // console.log(element['chapter']);
                // console.log(element['content']);
                // console.log(element['white']);
                // console.log(element['medi']);
                
                $('.wholecontent').append(
                    "<p class=\"chapter\">" + element['chapter'] + "</p>"
                    +"<p class=\"content\">" + element['content'] + "</p>"
                    +"<p class=\"whitetitle\">白話解釋</p>"
                    +"<p class=\"white\">" + element['white'] + "</p>"
                    +"<p class=\"medititle\">超譯藥方</p>"
                    +"<p class=\"medi\">" + element['medi'] + "</p>"
                );
            
                // $(".whitetitle").on("click", function () {
                //     $(".white").toggleClass('show')
                // })
                // $(".medititle").on("click", function () {
                //     $(".medi").toggleClass('show')
                // })
                $('.whitetitle').click( function () {
                    $(".whitetitle").toggle(function () {
                    $(".white").fadeOut(500, "linear")
                    }) //remove li
                    event.stopPropagation();
                })
                //  $('.medititle').on("click", function () {
                //      $(".medi").fadeOut(500, function () { //this=span
                //          // $(this).remove(); // this=li
                //      }); //remove li
                //      event.stopPropagation();
                //  })
            });
        }
    });
})

