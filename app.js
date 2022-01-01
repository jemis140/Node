const { O_DIRECT } = require('constants')
const os = require('os')

const currentOS = {upTime: os.uptime(),release: os.release(),freemem: os.freemem()}
console.log(currentOS)
