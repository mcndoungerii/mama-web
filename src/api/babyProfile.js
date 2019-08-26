import axios from 'axios'
import { apiHost } from './config'
const config = {
    timeout: 60 * 2 * 1000,
    baseURL: apiHost
}
const instance = axios.create(config)

export default {

    list (url) {
        const token = localStorage.getItem('token')
        Object.assign(instance.defaults, {headers: {Authorization: token}})
        return new Promise(function (resolve, reject) {
            return instance.get('/babyProfiles/'+url)
                .then((response) => {
                    resolve(response)
                }).catch((error) => {
                    if (error.response && error.response.data) reject(error.response.data)
                    reject(error)
                })
        })
    },
    get (id) {
        const token = localStorage.getItem('token')
        Object.assign(instance.defaults, {headers: {Authorization: token}})
        return new Promise(function (resolve, reject) {
            return instance.get('/babyProfile/'+id)
                .then((response) => {
                    resolve(response)
                }).catch((error) => {
                    if (error.response && error.response.data) reject(error.response.data)
                    reject(error)
                })
        })
    },
    create (data) {
        const token = localStorage.getItem('token')
        Object.assign(instance.defaults, {headers: {Authorization: token}})
        return new Promise(function (resolve, reject) {
            return instance.post('/babyProfile', data)
                .then((response) => {
                    resolve(response)
                }).catch((error) => {
                    reject(error.response.data)
                })
        })
    },
   
    update (data) {
        const token = localStorage.getItem('token')
        Object.assign(instance.defaults, {headers: {Authorization: token}})
        return new Promise(function (resolve, reject) {
            return instance.patch(`/babyProfile/${data.id}`, data)
                .then((response) => {
                    resolve(response)
                }).catch((error) => {
                    reject(error.response.data)
                })
        })
    },
    delete (data) {
        const token = localStorage.getItem('token')
        Object.assign(instance.defaults, {headers: {Authorization: token}})
        return new Promise(function (resolve, reject) {
            return instance.post('/babyProfile/delete', data)
                .then((response) => {
                    resolve(response)
                }).catch((error) => {
                    reject(error.response.data)
                })
        })
    },
    
    
}
