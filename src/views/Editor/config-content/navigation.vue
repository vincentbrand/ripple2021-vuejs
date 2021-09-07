<template>
<div class="row">
    <div class="col-lg-6">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Navigation Setting</h6>
            </div>
            <div class="card-body">
                Navigation settings go here
            </div>
        </div>
    </div>

    <div class="col-lg-6">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Navigation Setting</h6>
            </div>
            <div class="card-body">
                <div>
                    <div class="form-group">
                        <label>Navigation background color</label>
                        <!-- <input type="text" class="form-control" v-model="navigation.bg"> -->
                        <el-color-picker v-model="navigation.bg" style="width: 100%"></el-color-picker>
                    </div>

                    <div class="form-group">
                        <label>Navigation text color</label>
                        <!-- <input type="text" class="form-control" v-model="navigation.text"> -->
                        <el-color-picker v-model="navigation.text" style="width: 100%"></el-color-picker>
                    </div>

                    <!-- <button class="btn btn-success btn-block mt-4" type="button" style="width: 50%;">
                        <i class="fas fa-save fa-sm mr-2"></i> Save Settings
                    </button> -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        navigation: {
            bg: '',
            text: ''
        }
    }),

    watch: {
        'navigation.bg' (val) {
            this.$store.commit("SET_CONFIG_NAVIGATION_BG", val);
        },

        'navigation.text' (val) {
            this.$store.commit("SET_CONFIG_NAVIGATION_TEXT", val);
        },
    },

    created () {
        this.navigation.bg = this.$store.state.config.navigation.bg
        this.navigation.text = this.$store.state.config.navigation.text
    }
}
</script>

