<template>
    <transition name="modal-fade">
    
        <div class="form">
            <form @submit.prevent="submitForm" class="forma">
                <button class="close" @click="close">
              <router-link to="/" >&times;</router-link>
            </button>
                <input type="text" v-model="name" placeholder="ФИО" id="name" required />
    
                <input type="email" placeholder="email" id="email" v-model="email" required/>
    
                <input type="tel" placeholder="tel" id="tel" v-model="tel" required />
    
                <textarea placeholder="Сообщение" id="message" v-model="message" required></textarea>
    
                <button type="submit" class="contact__buttonF">Отправить</button>
    
            </form>
    
        </div>
    
    </transition>
</template>

<script>
import axios from 'axios'
export default {
    name: 'modal',
    data() {
        return {
            name: '',
            email: '',
            tel: '',
            message: '',
            response: '',
            error: ''
        }
    },
     mounted(){
if(localStorage.name){
  this.name = localStorage.name;
}
if(localStorage.email){
  this.email = localStorage.email;
}
if(localStorage.tel){
  this.tel = localStorage.tel;
}
if(localStorage.message){
  this.message = localStorage.message;
}
  },
   watch: {
name (newName) {
  localStorage.name = newName;
},
email (newEmail) {
  localStorage.email = newEmail;
},
tel (newTel) {
  localStorage.tel = newTel;
},
message (newMessage) {
  localStorage.message = newMessage;
}
  },
    methods: {
        close() {
            this.$emit('close');
        },
        submitForm() {
            axios.post('https://formcarry.com/s/A5kkOWHAhzs', {
                name: this.name,
                email: this.email,
                tel: this.tel,
                message: this.message
            }).then(response => {
                    this.name = '',
                    this.email = '',
                    this.tel = '',
                    this.message = ''
            }).then(function(response){
              alert('Успешно отправлено!')
            })
            .catch(function(error) {
              alert(error)
            });
        }
    }

};
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease
}

.form {
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: visible;
    display: flex;
    /*display: none;*/
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.open {
    left: 0;
}

.form .forma {
    margin: auto;
    background: #ffffff;
    max-width: 600px;
    padding: 40px 20px 30px 20px;
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.form .forma .contact__button,
.form .forma .contact__buttonF {
    width: 150px;
    margin: 0 auto;
}

form textarea {
    margin-bottom: 15px;
    background: #e6e9ee;
    color: #62708c;
    border: none;
    font-size: 15px;
}

input {
    padding: 10px;
}

textarea {
    margin-top: 15px;
    padding: 10px;
    height: 120px;
}

.form .forma .close {
    position: absolute;
    right: 8px;
    top: 0;
    font-size: 38px;
}

.form .forma .close:hover {
    cursor: pointer;
}
</style>