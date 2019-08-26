/* eslint-disable */
let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://3.18.27.135/api/v1'
} else {
    baseUrl = 'http://localhost:1337/api/v1'
}
//'http://localhost:1337/api/v1'

export const apiHost = baseUrl
