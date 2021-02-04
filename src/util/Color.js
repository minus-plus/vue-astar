/**
 * convert r, g, b to hex
 * @param {String | Number} color 
 * @returns {String} hex
 */
const hex = (rgbColor) => {
  const code = '0123456789abcdef'
  rgbColor = parseInt(rgbColor)
  if (rgbColor === 0 || isNaN(rgbColor)) {
    return '00'
  }
  rgbColor = ~~(Math.min(Math.max(0, rgbColor), 255))
  return code.charAt((rgbColor - rgbColor % 16) / 16) + code.charAt(rgbColor % 16)
}

const toHex = (rgb) => {
  return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2])
}

/**
 * convert hex to [r, g, b]
 * @param {String} hex 
 * @returns [r, g, b]
 */
const toRGB = (hexColor) => {
  hexColor = hexColor.charAt(0) === '#' ? hexColor.substring(1) : hexColor
  const rgb = []
  rgb[0] = parseInt(hexColor.substring (0, 2), 16);
  rgb[1] = parseInt(hexColor.substring (2, 4), 16);
  rgb[2] = parseInt(hexColor.substring (4, 6), 16);
  return rgb
}

/**
 * generate a color(hex) based on the distance from source
 * @param {String} startColor
 * @param {String} endColor
 * @param {Number} dist
 * @returns {String} hex
 */
export const generateColor = (startColor, endColor, dist) => {
  let start = toRGB(startColor)
  let end = toRGB(endColor)
  let alpha = dist / 50
  if (alpha > 1 && (~~alpha) & 1 === 1) {
    let temp = start
    start = end
    end = temp
    alpha -= 1
  }
  const rgb = [0, 0, 0]
  rgb[0] = start[0] * (1 - alpha) + alpha * end[0]
  rgb[1] = start[1] * (1 - alpha) + alpha * end[1];
	rgb[2] = start[2] * (1 - alpha) + alpha * end[2];
  return toHex(rgb)
}