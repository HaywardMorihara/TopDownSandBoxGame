window.onload = function() {

    var input;

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    var link;

    function preload () {
        linkPreload(game);
    }

    function create () {
        input = inputCreate(game);
        link = linkCreate(game);
    }

    function update() {
        linkUpdate(link,input);
    }

};