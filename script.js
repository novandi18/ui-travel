$(() => {
    $("#next").click(() => {
        $("#next").css({"color":"#0C1358","cursor":"pointer", "pointer-events":"auto"});
        $("#back").css({"color":"#0C1358","cursor":"pointer", "pointer-events":"auto"});
        
        // Manipulate translateX
        let e = document.querySelectorAll(".box");
        let i = 0;
        let length = e.length;
        
        function getTranslateX() {
            for(i; i < length; i++) {
                let style = window.getComputedStyle(e[i]);
                let matrix = new WebKitCSSMatrix(style.transform);
                
                e[i].style.transform = "translateX(" + (matrix.m41 - 165) + "px)";
            }
        }
        
        // Counter id value of list Class
        let list = document.querySelector('.list').id;
        let numId = parseInt(list) + 1;
        let x = length - 4;
        
        if(parseInt(list) > x) {
            $("#next").css({"color":"#ccc","cursor":"auto"});
            return false;
        } else {
            getTranslateX();
            $("#next").css({"color":"#0C1358","cursor":"pointer"});
            $('.list').attr('id', numId.toString());
        }
            let model = window.getComputedStyle(document.querySelector('.box'));
            let math = new WebKitCSSMatrix(model.transform);
            let m = math.m41 * (length - 3);
            let trans = "translateX(" + m + "px)";
            
            if(document.querySelector('.box').style.transform === trans) {
                $("#next").css({"color":"#ccc","cursor":"auto", "pointer-events":"none"});
            } else {
                $("#next").css({"color":"#0C1358","cursor":"pointer", "pointer-events":"auto"});
            }

        console.log(list);
    });
    
    $("#back").click(() => {
        $("#next").css({"color":"#0C1358","cursor":"pointer", "pointer-events":"auto"});
        $("#back").css({"color":"#0C1358","cursor":"pointer", "pointer-events":"auto"});
        
        // Manipulate translateX
        let e = document.querySelectorAll(".box");
        let i = 0;
        let length = e.length;
        
        function getTranslateX() {
            for(i; i < length; i++) {
                let style = window.getComputedStyle(e[i]);
                let matrix = new WebKitCSSMatrix(style.transform);
                
                e[i].style.transform = "translateX(" + (matrix.m41 + 165) + "px)";
            }
        }
        
        // Counter id value of list Class
        let list = document.querySelector('.list').id;
        let numId = parseInt(list) - 1;
        let x = length - 4;
        
        if(parseInt(list) < x) {
            return false;
        } else {
            getTranslateX();
            $('.list').attr('id', numId.toString());
        }
        
        if(document.querySelector('.box').style.transform === 'translateX(0px)') {
            $("#back").css({"color":"#ccc","cursor":"auto", "pointer-events":"none"});
        } else {
            $("#back").css({"color":"#0C1358","cursor":"pointer", "pointer-events":"auto"});
        }

        console.log(list);
    });

    $("#btnfilter").click(() => {
        $(".container .sidemenu .inputsearch .filter").toggleClass("showfilter");
        if(!$(".container .sidemenu .inputsearch .filter").hasClass("showfilter")) {
            setTimeout(() => {
                $(".container .sidemenu .inputsearch .filter").css({"display":"none"});
            }, 300);
        } else {
            $(".container .sidemenu .inputsearch .filter").css({"display":"block"});
        }
    });

    $("#showsearch").click(() => {
        $(".container .sidemenu .inputsearch").toggleClass("showinp");
    });

    if(localStorage.getItem("welcome") === null) {
        setTimeout(() => {
            $(".splash").css({"animation":"backgroundsplash .8s"});
        }, 500);
        
        setTimeout(() => {
            $(".splash").css({"backdrop-filter":"brightness(50%)"});
            $(".splash-scroll").css({"animation":"showsplash .4s"});
        }, 1300);
        
        setTimeout(() => {
            $(".splash").css({"backdrop-filter":"brightness(50%)"});
            $(".splash-scroll").css({"animation":"showsplash .5s"});
        }, 1300);
        
        setTimeout(() => {
            $(".splash-scroll").css({"max-height":"80vh","padding":"15px 10px"});
        }, 1800);
    } else {
        $(".splash").css({"display":"none"});
    }
    
    // Welcome Screen
    $("#btnaccept").click(function() {
        localStorage.setItem("welcome","accept");
        
        $(".splash-scroll").css({"animation":"hidesplash .4s"});
        
        setTimeout(() => {
            $(".splash").css({"animation":"hidebackgroundsplash .8s"});
        }, 400);
        
        setTimeout(() => {
            $(".splash").css({"display":"none"});
        }, 1200);
    });
});