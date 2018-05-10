    $("button").on("click", function () {
        var animal = $(this).attr("class");
        var furcolor = $(this).attr("data-type");
        var feeling = $(this).attr("data-tendance");
        console.log(animal + " " + furcolor + " " + feeling);
        if (furcolor==undefined || feeling ==undefined)
            {
                alert("Il faut suivre un peu!");
            }else{
                alert("type: "+animal+" data-type: "+furcolor+" sentiment: "+feeling);
            }
    });