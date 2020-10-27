<template>
    <div id="myModal1" class="modal1">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="close" @click="close()"><img src="../../assets/img/closer.svg" alt=""></span>
            <div class="row mt-3">
                <div class="col-md-9">
                    <p class="editi__1">Edit Personal Information</p>
                </div>
                <div class="col-md-3">
                    <img src="../../assets/img/img_avatar.png" alt="Avatar" class="avatar" style="margin-left: 10%;">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-md-12">
                    <form @submit.prevent="updateUserProfile()">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-row">
                                    <div class="form-group mr-3">
                                        <label style="color: #2F323A;">First Name</label>
                                        <input type="text" class="form-control" v-model="userData.first_name" aria-describedby="emailHelpName"
                                            placeholder="First Name" id="funkystyling">
                                    </div>
                                    <div class="form-group">
                                        <label style="color: #2F323A;">Last Name</label>
                                        <input type="text" class="form-control" v-model="userData.last_name"
                                            placeholder="Last Name" id="funkystyling">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label style="color: #2F323A;">Address</label>
                                    <input type="text" class="form-control" v-model="userData.address"
                                        placeholder="#25B, Adewole Kolawole Crescent, off Admiralty
                                        way, Lekki, Phase 1, Lagos." id="funkystyling1">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group lamu">
                                    <label>City</label>
                                    <select class="form-control">
                                        <option>city</option>
                                        <option>Epe</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>State</label>
                                    <select class="form-control">
                                        <option>state</option>
                                        <option>Epe</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label style="color: #2F323A;">Email</label>
                                    <input type="text" class="form-control" v-model="userData.email"
                                        placeholder="example@brandname.com" id="funkystyling2">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label style="color: #2F323A;">Phone Number</label>
                                    <input type="text" class="form-control" v-model="userData.phone"
                                        placeholder="+234" id="funkystyling3">
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn--2 mt-4">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'edit-profile-modal',
    data() {
        return {
            userData: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                address: '',
            },
            
        }
    },
    created() {
        this.userData = this.getUserInst
    },
    computed: {
        ...mapGetters({
            getUserInst: 'getUserData'
        })
    },
    methods: {
        close() {
            this.$emit('close')
        },
        updateUserProfile() {
            let data = {
                first_name: this.userData.first_name,
                lastName: this.userData.last_name,
                email: this.userData.email,
                phone: this.userData.phone,
                address: this.userData.address,
            }

            this.$store.commit('editProfile', data)
            this.close()
        }
    },
}
</script>