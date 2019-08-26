import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

import { apiHost } from '../../api/config'
const config = {
    timeout: 60 * 2 * 1000,
    baseURL: apiHost
}
const instance = axios.create(config)

import {apiUrl} from 'constants/config'

import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';
let io = sailsIOClient(socketIOClient);
io.sails.url = 'http://localhost:1337';
let socket = io.socket;
// Attach a listener which fires when a connection is established:


const state = {
    isLoadContacts: false,
    isLoadConversations: false,
    isLoadContent: false,
    error: '',
	contacts: null,
	contactsSearchResult: null,
    conversations: null,
    newContent:{},
    content:null,
    contentEdited:null
};

const getters = {
    isLoadContacts : state =>state.isLoadContacts,
    isLoadConversations : state =>state.isLoadConversations,
    isLoadContent : state =>state.isLoadContent,
    error : state =>state.error,
    getNewContent : state =>state.newContent,
    getContentData : state =>state.getContent,
    contentData : state =>state.content,
    currentContentEdited:state =>state.contentEdited
    
};

const mutations = {
    getNewContent(state,payload){
       state.newContent = payload
    },
    getEditedContent(state,payload){
        state.contentEdited = payload
    },
    getContent(state,payload){
        state.isLoadContent=true;
        state.content = payload
    },
    getError(state,error){
        state.isLoadConversations=false;
        state.error=error;
    }
};

const actions = {
    getContent({commit}, url){
        const token = localStorage.getItem('token');
        const userStr = localStorage.getItem('user');
        const user = JSON.parse(userStr).user;
        if(user.id !== undefined) socket.get('/api/v1/content/subscribe/1');
        // socket.on('connect', function socketConnected() {
        //
        // });
        socket.request({
            method: 'get',
            url: '/api/v1/contents/'+url,
            headers: {
                'Authorization': token
            }
        }, function (resData, jwres) {
            if (jwres.error) {
                commit('getError', "error:getConversations"); // => e.g. 403
                return;
            }
            // console.log(resData)
            commit('getContent', resData)

        });
        // socket.get("/api/v1/messages", function (response) { console.log(response); })

        // Attach a listener which fires every time the server publishes a message:
        socket.on('content', function newContentFromSails ( content ) {
            // state.conversations.push(message)
            // console.log(content)
            commit('getNewContent', content)
            // typeof console !== 'undefined' &&
            // console.log('New message received from Sails ::\n', message);

        });
        socket.on('editing', function newContentFromSails ( content ) {
            // state.conversations.push(message)
            console.log(content);
            commit('getEditedContent', content)
            // typeof console !== 'undefined' &&
            // console.log('New message received from Sails ::\n', message);

        });
    },
 
};

export default {
  state,
  getters,
  mutations,
  actions
};
