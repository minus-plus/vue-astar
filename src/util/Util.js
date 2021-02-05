export const wait = ms => new Promise(res => setTimeout(res, ms))

export const isInt = num => num === ~~num
