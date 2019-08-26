<template>
<div>
  <div class="d-flex flex-row chat-heading">
        <div class="d-flex">
            <div  src="/assets/img/profile-pic-l.jpg" alt="Card image cap" class="align-self-center list-thumbnail-letters rounded-circle mr-3" style="width:40px; height: 40px; font-size: 1rem">
                {{otherUser.fullName | initials}}
            </div>
        </div>
        <div class=" d-flex min-width-zero">
          <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
            <div class="min-width-zero">
              <div>
                <p class="list-item-heading mb-1 truncate ">{{otherUser.fullName}}</p>
              </div>
              <p class="mb-0 text-muted text-small">{{otherUser.date}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator mb-5" />
      <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }" ref="chatArea" >
        <div  v-for="(message,index) in messages" :key="index">
          <b-card no-body

           :class="{'d-inline-block mb-3' : true, 'float-left':message.fromUser.id==otherUser.id, 'float-right':message.fromUser.id==currentUser.user.id}">

            <div class="position-absolute  pt-1 pr-2 r-0"><span class="text-extra-small text-muted">{{message.createdAt | humanTime}}</span></div>

            <b-card-body>
              <div class="d-flex flex-row pb-1" v-if="message.fromUser.id==currentUser.user.id">
                  <div  src="/assets/img/profile-pic-l.jpg" alt="Card image cap" class="align-self-center list-thumbnail-letters rounded-circle mr-3" style="width:40px; height: 40px; font-size: 1rem">
                      {{currentUser.user.fullName | initials}}
                  </div>
                <div class=" d-flex flex-grow-1 min-width-zero">
                  <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                    <div class="min-width-zero">
                      <p class="mb-0 truncate list-item-heading">{{currentUser.user.fullName}}</p>
                    </div>
                  </div>
                </div>
              </div>
               <div class="d-flex flex-row pb-1" v-else>
                   <div  src="/assets/img/profile-pic-l.jpg" alt="Card image cap" class="align-self-center list-thumbnail-letters rounded-circle mr-3" style="width:40px; height: 40px; font-size: 1rem">
                       {{otherUser.fullName | initials}}
                   </div>
                <div class=" d-flex flex-grow-1 min-width-zero">
                  <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                    <div class="min-width-zero">
                      <p class="mb-0 truncate list-item-heading">{{otherUser.fullName}}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="chat-text-left">
                <p class="mb-0 text-semi-muted">{{message.content}}</p>
              </div>
            </b-card-body>
          </b-card>
          <div class="clearfix" />
          </div>
      </vue-perfect-scrollbar>
</div>
</template>
<script>
    let moment = require('moment')
export default {
  props:['currentUser','otherUser','messages'],
  methods:{
    scrollToEnd() {
      setTimeout(() => {
        const container = this.$refs.chatArea.$el;
        container.scrollTop = container.scrollHeight;
        }, 0);
      }
  },
  mounted(){
    this.scrollToEnd();
  },
  updated(){
    this.scrollToEnd();
  },
    filters:{
      humanTime(val){
          let time = moment(val).fromNow()
          return time;
      },
        initials: function (value) {
            var initials = value.match(/\b\w/g) || [];
            initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
            return initials
        }

    }
}
</script>