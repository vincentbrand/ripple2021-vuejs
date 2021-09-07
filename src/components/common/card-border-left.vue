<template>
<div :class="'card  shadow h-100 py-2 border-left-' + color">
    <div class="card-body">
        <div class="row no-gutters align-items-center">
            <div class="col mr-2">
                <div :class="'text-xs font-weight-bold text-uppercase mb-1 text-' + color">
                    {{title}}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{text}}</div>
            </div>
            <div class="col-auto">
                <i :class="'fas fa-2x text-gray-300 ' + font"></i>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'color',
        'font',
        'title',
        'text',
    ]
}
</script>

