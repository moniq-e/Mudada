import { Util } from "./Util.js"

export class Entity {
    /**
     * @param {import('./Board.js').Board} board 
     * @param {String} type
     */
    constructor(type, board) {
        this.type = type
        this.app = board.app
        this.id = Util.random(0, 1000000)
    }
    createSprite(tint, width, height) {
        let sprite = new PIXI.Sprite(PIXI.Texture.WHITE)
        sprite.tint = tint
        sprite.height = height
        sprite.width = width

        let angle = Util.random(0, 6.3).precise
        let randomDistance = Number(Util.random(0, 60).simple)
        let x = ((200 + randomDistance) * Math.sin(angle))
        let y = ((200 + randomDistance) * Math.cos(angle))

        sprite.position.set((this.app.screen.width) / 2 + x, (this.app.screen.height) / 2 + y)
        
        this.app.stage.addChild(sprite)
        return sprite
    }
    followPlayer(player, entity, speed) {
        let disObj = Util.distance(entity.x, entity.y, player.x, player.y)

        let pos = speed / disObj

        let x = entity.x - pos * (entity.x - player.x)

        let y = entity.y - pos * (entity.y - player.y)

        entity.position.set(x, y)
    }
}