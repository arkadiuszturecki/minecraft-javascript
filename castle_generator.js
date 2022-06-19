let position = player.position()

player.onChat(
    "castle", 
    function() {
        generateMoat(position)
        generateBridge(position)
        generateCastle(position)
        generateWindows(position)
        generateGate(position)
    }
)

function generateMoat(position: Position) {
    //moat borders
    blocks.fill(
        SANDSTONE, 
        position
            .add(pos(3, 1, 3))
            .add(pos(0, -5, 0)),
        position
            .add(pos(37, 0, 37)), 
        FillOperation.Hollow
    )

    // type of liquid in the moat
    blocks.fill (
        LAVA, 
        position
            .add(pos(3, 0, 3))
            .add(pos(3, 0, 3)),
        position
            .add(pos(37, 0, 37))
            .add(pos(-3, 0, -3)), 
        FillOperation.Replace
    )
}

function generateBridge(position: Position) {
    blocks.fill(
        MOSS_STONE,
        position
            .add(pos(3, 0, 3))
            .add(pos(17, 0, 0))
            .add(pos(3, 1, 2)),
        position
            .add(pos(3, 0, 3))
            .add(pos(13, 0, 0))
            .add(pos(1, 1, 6)),
        FillOperation.Replace
    )
}

function generateCastle(position: Position) {
    // castle floor
    blocks.fill(
        GOLD_BLOCK, 
        position
            .add(pos(3, 0, 3))
            .add(pos(7, 0, 7)), 
        position
            .add(pos(23, 1, 23))
            .add(pos(7, -5, 7)),
        FillOperation.Replace
    )
    
    // castle walls
    blocks.fill(
        DOUBLE_STONE_SLAB, 
        position
            .add(pos(3, 0, 3))
            .add(pos(7, 0 ,7))
            .add(pos(0, 1, 0)),
        position
            .add(pos(23, 10, 23))
            .add(pos(7, 0, 7)),
        FillOperation.Replace
    )

    // castle top
    blocks.fill(
        QUARTZ_SLAB, 
        position
            .add(pos(3, 0, 3))
            .add(pos(0, 10, 0))
            .add(pos(7, 0, 7))
            .add(pos(0, 1, 0)),
        position
            .add(pos(23, 10, 23))
            .add(pos(7, 0, 7))
            .add(pos(0, 1, 0)), 
        FillOperation.Replace
    )
    
    // castle interior
    blocks.fill(
        AIR, 
        position
            .add(pos(3, 0, 3))
            .add(pos(7, 0, 7))
            .add(pos(1, 1, 1)),
        position
            .add(pos(23, 8, 23))
            .add(pos(7, 0, 7))
            .add(pos(-1, 2, -1)),
        FillOperation.Replace
    )
}

function generateWindows(position: Position) {   
    for(let i = 2; i < 20; i += 5) {
        // front wall
        blocks.fill(
            LIGHT_BLUE_STAINED_GLASS_PANE, 
            position
                .add(pos(3, 0, 3))
                .add(pos(i + 1, 6, 0))
                .add(pos(7, 0, 7)),
            position
                .add(pos(3, 0, 3))
                .add(pos(i, 6, 0))
                .add(pos(7, 3, 7)), 
            FillOperation.Replace
        )

        // back wall
        blocks.fill(
            LIGHT_BLUE_STAINED_GLASS_PANE, 
            position
                .add(pos(3, 0, 3))
                .add(pos(i + 1, 3, 20))
                .add(pos(7, 3, 7)),
            position
                .add(pos(3, 0, 3))
                .add(pos(i, 6, 20))
                .add(pos(7, 3, 7)),
            FillOperation.Replace
        )
    }

    for(let i = 2; i < 20; i += 5) {
        // right wall
        blocks.fill(
            LIGHT_BLUE_STAINED_GLASS_PANE, 
            position
                .add(pos(3, 0, 3))
                .add(pos(0, 6, i + 1))
                .add(pos(7, 0, 7)),
            position
                .add(pos(3, 0, 3))
                .add(pos(0, 6, i))
                .add(pos(7, 3, 7)), 
            FillOperation.Replace
        )

        // left wall
        blocks.fill(
            LIGHT_BLUE_STAINED_GLASS_PANE, 
            position
                .add(pos(3, 0, 3))
                .add(pos(20, 6, i + 1))
                .add(pos(7, 0 ,7)),
            position
                .add(pos(3, 0, 3))
                .add(pos(20, 6, i))
                .add(pos(7, 3 ,7)), 
            FillOperation.Replace
        )
    }
}

function generateGate(position: Position) {
    blocks.fill(
        AIR, 
        position
            .add(pos(3, 0, 3))
            .add(pos(13, 2, 0))
            .add(pos(7, 0, 7)),
        position
            .add(pos(3, 0, 3))
            .add(pos(7, 1, 0))
            .add(pos(7, 3, 7)), 
        FillOperation.Replace
    )
}
