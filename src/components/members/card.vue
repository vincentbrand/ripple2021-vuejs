<template>
<div class="row">
    <div class="col-xl-3 col-lg-3" v-for="info in data" :key='info.id'>
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <img class="rounded-circle" style="" :src="info.img" alt="">
                    </div>
                    <div class="col-9" style="padding-left:10px;">
                        <span style="color:#d11083;">{{info.name}}</span><br>
                        <p style="color:#666666;font-size: 0.8rem;">Last appointment:<br><b>{{info.last}}</b></p>

                        <span class="pull-left mb-3 float-left">
                            <h6>{{info.points}}</h6>
                        </span>
                        <span class="pull-right mb-3 float-right">
                            <h6>{{info.wallet}}</h6>
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ["data"]
}
</script>
