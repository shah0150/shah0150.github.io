var counter = 0;
    function startProcess(){
            var cssList = [
            "css/themes/indigo-white.css",
            "css/themes/green-white.css",
            "css/themes/red-white.css",
            "css/themes/grey-white.css",
            "css/themes/white-indigo.css",
            "css/themes/white-blue.css",
            "css/themes/white-grey.css",
            "css/themes/white-red.css",
            "css/themes/yellow-black.css"
            ]
            setInterval(function(){
                document.getElementById('theme').setAttribute('href', cssList[counter]);
                if (counter == cssList.length - 1){
                counter = 0;
                }
                else{
                    counter++;
                }
            }, 3000);
    } 