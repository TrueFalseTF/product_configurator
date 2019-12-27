let server = {
    url: "mine",
    init: function () {
        servEng.binder(server.url);
        servEng.requester(server.url);
        return 1;
    }
};

$(document).ready(function(){
    server.init();
});