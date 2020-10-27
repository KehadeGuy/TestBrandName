<template>
    <!-- The Modal -->
    <div id="myModal2" class="modal2">
        <!-- Modal content -->
        <div class="modal-content1">
            <span class="close1" @click="close_2()">
                <img src="../../assets/img/closer.svg" alt="">
            </span>
            <div class="text-center">
                <img src="../../assets/img/signs.svg" alt="">
            </div>
            <p class="luka__1 mt-3">You're about to delete this user. <br> Are you sure?</p>
            <div class="d-flex justify-content-center">
                <div class="d-flex flex-row mt-3 mb-3">
                    <button type="button" class="btn btn--6 mr-4" @click="yesDelete()">Yes</button>
                    <button type="button" class="btn btn--6" @click="close_2()">No</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'confirm-delete-modal',
    methods: {
        close_2() {
            this.$emit('close_2')
        },
        yesDelete() {
            this.$emit('yesDelete')
        }
    }
}
</script>