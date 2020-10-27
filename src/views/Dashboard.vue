<template>
    
    <div class="dashboard" style="z-index: 1">
        <div class="wrapper-dash">
            <!-- Sidebar  -->
            <app-sidebar></app-sidebar>
            <!-- Page Content  -->
            <div id="content" class="main" style="background: #E5E5E5;">
                <div class="conty" style="
                mix-blend-mode: normal; padding: 0 0 1.4rem 0;">
                    <nav class="navbar navbar-expand-lg navbar-transparent">
                        <div class="container-fluid">
                            <button type="button" id="sidebarCollapse" @click="toggleSideBarMenu()" class="btn btn-info d-md-none d-sm-block"
                                style="background-color: #2F323A; border-color: white;">
                                <!-- <i class="fas fa-align-left"></i> -->
                                <font-awesome-icon icon="align-left" />
                                <span>Toggle Sidebar</span>
                            </button>
                        </div>
                    </nav>
                    <div class="container-fluid">
                        <div class="container" style="margin-top: -1%; padding-left: 2rem;">
                            <div class="row">
                                <div class="col-md-8">
                                    <img src="../assets/img/Notificationnot.svg" alt=""><span class="afri__2 ml-2">Updated 29mins
                                        ago</span>
                                </div>
                                <div class="col-md-4">
                                    <div class="row ml-5">
                                        <div class="col-md-6">
                                            <img src="../assets/img/user.svg" alt="user"><span class="afri__2_1 ml-2">Hi,
                                                Moshood</span>
                                        </div>
                                        <div class="col-md-6"><img src="../assets/img/question-2.svg" alt="user"><span
                                                class="afri__2_1 ml-2">Help</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="container" style="padding-left: 3rem; margin-top: 9%; padding-right: 2rem;">
                        <div class="row">
                            <div class="col-md-4 mt-4">
                                <div class="d-flex flex-row">
                                    <div>
                                        <img src="../assets/img/img_avatar.png" alt="Avatar" class="avatar mr-3 mt-3">
                                    </div>
                                    <p class="ml-1 names__1">{{ getUserInstance.first_name }} {{ getUserInstance.last_name }}</p>
                                    <div @click="showModal()">
                                        <div class="mt-4 ml-3">
                                            <img src="../assets/img/edit.svg" alt="" class="spacen" id="myBtn1">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-md-12">
                                        <div class="media">
                                            <img src="../assets/img/mail.svg" class="mr-3" alt="...">
                                            <div class="media-body">
                                                <h5 class="spacen__1 mt-0">{{ getUserInstance.email }}</h5>
                                            </div>
                                        </div>
                                        <div class="media dakasa">
                                            <img src="../assets/img/phone.svg" class="mr-3" alt="...">
                                            <div class="media-body">
                                                <h5 class="spacen__1 mt-0">{{ getUserInstance.phone }}</h5>
                                            </div>
                                        </div>
                                        <div class="media dakasa">
                                            <img src="../assets/img/pin.svg" class="mr-3" alt="...">
                                            <div class="media-body">
                                                <h5 class="spacen__2 mt-0">{{ getUserInstance.address }}</h5>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="media dakasa" style="cursor: pointer;" @click="showChangePasswordForm()" v-if="!isChangePasswordFormVisible">
                                                <img src="../assets/img/lock.svg" class="mr-3" alt="...">
                                                <div class="media-body">
                                                    <h5 class="spacen__3 mt-1">Change Password</h5>
                                                </div>
                                            </div>
                                            <div class="" v-if="isChangePasswordFormVisible">
                                                <form action="">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="media dakasa">
                                                                <img src="../assets/img/lock.svg" class="mr-3" alt="...">
                                                                <div class="media-body">
                                                                    <div class="form__group field">
                                                                        <input type="password" class="form__field"
                                                                            placeholder="Old Password" 
                                                                            required />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="media mt-5">
                                                                <img src="../assets/img/lock.svg" class="mr-3" alt="...">
                                                                <div class="media-body">
                                                                    <div class="form__group field">
                                                                        <input type="password" class="form__field"
                                                                            placeholder="New Password" 
                                                                            required />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="media mt-5">
                                                                <img src="../assets/img/lock.svg" class="mr-3" alt="...">
                                                                <div class="media-body">
                                                                    <div class="form__group field">
                                                                        <input type="password" class="form__field"
                                                                            placeholder="Confirm Password" 
                                                                            required />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="button" class="btn btn--2 mt-4"
                                                        style="margin-left: 50%;">Update Password</button>
                                                </form>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div v-if="!isInviteUser">
                                    <div class="d-flex justify-content-end">
                                        <div class="d-flex flex-row">
                                            <div>
                                                <button type="button" class="btn btn--1">Resend Invitation<img
                                                        src="../assets/img/sent.svg" alt="" class="ml-2"></button>
                                            </div>
                                            <div class="ml-3">
                                                <!-- <button type="button" class="btn btn--1">Invite User</button> -->
                                                <button type="button" class="btn btn--2" @click="SwitchUser()">Invite User<img src="../assets/img/more.svg"
                                                        class="ml-3" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <div class="scalina">
                                            <p class="selina pl-3 mt-2">Users</p>
                                            <div v-if="loading" class="text-center">Loading...</div>
                                            <div v-else class="mt-2 table-responsive" style="overflow-x: hidden;">
                                                <table id="lendeba" class="table liky table-striped" style="width:100%;">
                                                    <tbody class="eru">
                                                        <tr v-for="(sub_user, index) in sub_users" :key="index">
                                                            <td><img src="../assets/img/userss.svg" :alt="sub_user.first_name"></td>
                                                            <td :class="(sub_user.has_activated === false) ? 'infi__1_3' : 'infi__1_2'">{{ sub_user.first_name }}</td>
                                                            <td :class="(sub_user.has_activated === false) ? 'infi__1_3' : 'infi__1_2'">{{ sub_user.email }}</td>
                                                            <td :class="['infi__td-role',(sub_user.has_activated === false) ? 'infi__1_3' : 'infi__1_2']">
                                                                {{sub_user.role.name | capitalize}}
                                                            </td>
                                                            <td>
                                                                <div class="" v-if="sub_user.has_activated === true">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <a href="#">
                                                                                <img src="../assets/img/block.svg" alt="blook">
                                                                            </a>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div @click="showModal_2()" style="cursor: pointer;">
                                                                                <img src="../assets/img/trash.svg" alt="trash" id="myBtn2" >
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="" v-else>
                                                                    <div class="row">
                                                                        <button type="button" class="btn btn--4">Resend
                                                                            Invite</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end mt-3">
                                            <button type="button" class="btn btn--5">Save</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-no" v-if="isInviteUser">
                                    <div class="d-flex justify-content-end seww">
                                        <img src="../assets/img/mores.svg" alt="moree" @click="SwitchUser()">
                                    </div>
                                    <div class="mt-2 seww">
                                        <div class="scalina">
                                            <div>
                                                <p class="selina pl-3 mt-2">Users</p>
                                                <form action="" @submit.prevent="createNewSUbUser()">
                                                    <div class="row mt-4 ml-5">
                                                        <div class="col-md-5">
                                                            <div class="form__group2 field">
                                                                <input type="email" class="form__field"
                                                                    placeholder="Type Email Address" v-model="emailAddress" required />
                                                                <!-- <label for="email" class="form__label"
                                                                    style="font-style: italic;">Type Email Address</label> -->
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <div class="form-group">
                                                                <select class="form-control" v-model="role" @change="changeUserRole($event)" id="exampleFormControlSelect1"
                                                                    style="border: none;">
                                                                    <option value selected disabled>Choose User Type</option>
                                                                    <option v-for="role in roles" :key="role.id" :value="role.id">{{role.name | capitalize}}</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <button type="submit" class="btn btn--4">Invite User</button>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                            <div v-if="loading" class="text-center">Loading...</div>
                                            <div v-else class="mt-3 table-responsive" style="overflow-x: hidden;">
                                                <table id="lendeba" class="table liky table-striped" style="width:100%;">
                                                    <tbody class="eru">
                                                        
                                                        <tr v-for="(sub_user, index) in sub_users" :key="index">
                                                            <td><img src="../assets/img/userss.svg" :alt="sub_user.first_name"></td>
                                                            <td :class="(sub_user.has_activated === false) ? 'infi__1_3' : 'infi__1_2'">{{ sub_user.first_name }}</td>
                                                            <td :class="(sub_user.has_activated === false) ? 'infi__1_3' : 'infi__1_2'">{{ sub_user.email }}</td>
                                                            <td :class="['infi__td-role',(sub_user.has_activated === false) ? 'infi__1_3' : 'infi__1_2']">
                                                                {{sub_user.role.name | capitalize}}
                                                            </td>
                                                            <td>
                                                                <div class="" v-if="sub_user.has_activated === true">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <a href="#">
                                                                                <img src="../assets/img/block.svg" alt="blook">
                                                                            </a>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div @click="showModal_2()" style="cursor: pointer;">
                                                                                <img src="../assets/img/trash.svg" alt="trash" id="myBtn2" >
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="" v-else>
                                                                    <div class="row">
                                                                        <button type="button" class="btn btn--4">Resend
                                                                            Invite</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end mt-3">
                                            <button type="button" class="btn btn--5">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <edit-profile-modal @close="closeModal()" v-if="isModalVisible_1"></edit-profile-modal>

            <confirm-delete-modal @close_2="closeModal_2()" v-if="isModalVisible_2" @yesDelete="deleteSubUser()"></confirm-delete-modal>

        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import EditProfileModal from '@/components/modals/EditProfileModal'
import ConfirmDeleteModal from '@/components/modals/ConfirmDeleteModal'
import axios from 'axios'
import {mapGetters} from 'vuex'

let endpoint = 'https://5f95cff82de5f50016ca23f3.mockapi.io/api/v1'

export default {
    name: 'dashboard',
    components: {
        'app-sidebar': Sidebar,
        'edit-profile-modal': EditProfileModal,
        'confirm-delete-modal': ConfirmDeleteModal
        
    },
    data() {
        return {
            isModalVisible_1: false,
            isModalVisible_2: false,
            isChangePasswordFormVisible: false,
            isInviteUser: false,
            sub_users: [],
            loading: false,
            emailAddress: '',
            role: '',
            roles: [
                {id: 'MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo', name: 'user'},
                {id: 'MXTi9FjpyQKxfEsqQjbtGtZvjEuvBMSW', name: 'admin'},
            ],
            role_id: '',
            role_name: '',
            userDataProfile: {}
        }
    },
    filters: {
        // function to capitalize first letter in the role name
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    computed: {
        ...mapGetters({
            getUserInstance: 'getUserData'
        })
    },
    methods: {
        // toggle sidebar menu
        toggleSideBarMenu() {
            let sideMenu = document.getElementById('sidebar')
            sideMenu.classList.toggle('active')
        },

        // show "edit profile" modal
        showModal() {
            this.isModalVisible_1 = true
            // console.log("click");
        },

        // close "edit profile" modal
        closeModal() {
            this.isModalVisible_1 = false
        },

        // show "delete sub user" modal
        showModal_2() {
            this.isModalVisible_2 = true
            // console.log("click");
        },

        // close "delete sub user" modal
        closeModal_2() {
            this.isModalVisible_2 = false
        },

        // show "change password" form
        showChangePasswordForm() {
            this.isChangePasswordFormVisible = true
        },

        // show "invite user" card
        SwitchUser(){
            this.isInviteUser = !this.isInviteUser
        },

        // fetch all subusers
        async getSubUsers() {
            try {
                this.loading = true
                const response = await axios.get(endpoint + '/sub_users')
                this.sub_users = response.data
                console.log(this.sub_users);
                this.loading = false
                console.log(response);
            } catch (error) {
                this.loading = false
                console.log(error.response);
            }
        },
        async fetchUserData(){
            try {
                const response = await axios.get(endpoint + '/user_profile')
                this.userDataProfile = response.data
                localStorage.setItem('userObj', JSON.stringify(response.data))
                console.log(this.userDataProfile);
                
            } catch (error) {
                console.log(error.response);
                
            }
        },
        deleteSubUser(sub_user) {
            this.sub_users.splice(sub_user, 1)
            this.closeModal_2()
        },

        changeUserRole(role) {
            this.roles.forEach(role__ => {
                if (role__.id === role.target.value) {
                    this.role_id = role__.id;
                    this.role_name = role__.name;
                    console.log(this.role_id);
                    console.log(this.role_name);
                }
            })
        },

        // create new "sub user"
        async createNewSUbUser() {
            let data = {
                user_id: "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                first_name: "Another User 3",
                image_url: "https://avatars.dicebear.com/api/male/.svg?r=1&w=1&mood[]=happy",
                email: this.emailAddress,
                is_active: true,
                has_activated: false,
                role: {
                    role_id: this.role_id,
                    name: this.role_name
                },
            }

            try {
                if (data.role.role_id === '' || data.role.role_name === '') {
                    alert("User Role is Compulsory!!!")
                } else {
                    this.loading = true
                    const response = await axios.post(endpoint + '/sub_users', data)
                    this.loading = false
                    console.log(response);
                    this.sub_users.unshift(response.data)
                    console.log(this.sub_users);
                }
            } catch (error) {
                this.loading = false
                console.log(error.response);
            }
        }

    },
    mounted() {
        this.getSubUsers()
        this.fetchUserData()
    }
}
</script>