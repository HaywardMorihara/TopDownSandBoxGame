window.onload = function() {
    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {
        game.load.spritesheet('link', 'assets/sprites/LinkSpritesheet.png',24,32);

    }

    function create () {

        var link = game.add.sprite(game.world.centerX, game.world.centerY, 'link');

        //  Here we add a new animation called 'walk'
        //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'link' sprite sheet
        var walk = link.animations.add('walk');

        //  And this starts the animation playing by using its key ("walk")
        //  30 is the frame rate (30fps)
        //  true means it will loop when it finishes
        link.animations.play('walk', 45, true);

    }

};