<template>
    <vue-perfect-scrollbar class="scroll" :settings="{ suppressScrollX: true, wheelPropagation: false }" >
    <div class="pt-0 pr-4 pl-4 pb-0">
        <div class="d-flex flex-row mb-1 border-bottom pb-3" v-for="(conversation,index) in conversations" :key="`conversation${index}`">
            <a class="d-flex" href="#" @click.prevent="selectConversation(conversation)">
                <div  src="/assets/img/profile-pic-l.jpg" alt="Card image cap" class="align-self-center list-thumbnail-letters rounded-circle mr-3" style="width:40px; height: 40px; font-size: 1rem">
                    {{conversation.user.fullName | initials}}
                </div>
                <div class="align-self-center mr-3">{{conversation.user.fullName}}</div>
                <div class="d-flex flex-grow-1 min-width-zero">
                    <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                        <div class="min-width-zero">
                            <!--<p class=" mb-0 truncate">{{otherUser(conversation.users).title}}</p>-->
                            <!--<p class="mb-1 text-muted text-small">-->
                                <!--{{conversation.lastMessageTime}}-->
                            <!--</p>-->
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </vue-perfect-scrollbar>
</template>

<script>
    import messageApi from '../../api/message'
    import { mapGetters, mapMutations,mapActions } from "vuex";
export default {
    props:['conversations','contacts','currentUser'],
    data(){
        return {
            user:null
        }
    },
    methods:{
        ...mapActions(["getMessages"]),
        selectConversation(conversation){
            this.user = conversation.user
            this.getMessages(conversation.user.id);
            if(this.isLoadMessages) this.$emit("select-conversation",conversation.user,this.getUserMessages)

        },
    },
    computed: {
        ...mapGetters(['getUserMessages', 'isLoadMessages']),
    },
    mounted(){
        this.selectConversation(this.conversations[0]);
    },
    filters: {
        initials: function (value) {
            var initials = value.match(/\b\w/g) || [];
            initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
            return initials
        }
    },
    watch:{
        searchKey(val,oldVal){
            this.searchContacts({userId:this.currentUser.id,searchKey:val});

        },
        isLoadMessages(val){
            if(val) this.$emit("select-conversation",this.user,this.getUserMessages)

        }
    }

}
</script>