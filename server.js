let servEng = {
    binder: function (url) {

        if(url == "mine"){
            servEng.binderMain();
        } else if(url !="mine"){
            servEng.binderSelected();
        }
    },

    requester: function (url) {
        if(url == "mine"){
            servEng.actualizerMain();
        } else if(url !="mine"){
            servEng.actualizerSelected();
        }
    },

    binderMain: function () {
        //биндятся на майн
    },

    binderSelected: function () {
        //биндятся на селектед
    },

    actualizerMain: function () {
        //запрос
        let data = {app_id : "54654654654"};
        $.ajax({
            type: "POST",
            url: "https://embedded.carddex.konstructor.online/api/dw",
            data: data,
            success: function(msg){
                console.log( "Прибыли данные: " + msg );
            }
        });

        console.log( "готово");
    },

    actualizerSelected: function () {

    }
};


// условия по url, написать запросы, принимать ответы