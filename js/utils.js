/**
 * Time    : 17-9-20 下午2:51
 * Author  : wxy
 * File    : utils.py
 */
var log = console.log.bind(console)



function imageFromPath(path) {
    var img = new Image()
    img.src = path
    return img
}