export class Util {
    static random(min, max) {
        let resul = Math.floor((Math.random() * max) + min)
        return resul
    }

    static distance(x, y, x2, y2) {
        let dis = Math.abs(Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)))
        return dis
    }

    static knockback(firstObj, secondObj, distance) {
        let disObj = this.distance(firstObj.x, firstObj.y, secondObj.x, secondObj.y)
        
        let pos = distance / disObj
    
        let x = secondObj.x + pos * (secondObj.x - firstObj.x)
    
        let y = secondObj.y + pos * (secondObj.y - firstObj.y,2)
    
        return {x: x, y: y}
    }
}