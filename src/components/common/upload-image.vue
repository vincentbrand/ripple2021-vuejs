<template>
<el-upload
    class="upload-demo"
    style="width: 100%"
    drag
    :action="uploadConfig.action"
    :multiple="multiple"
    :headers="uploadConfig.headers"
    :name="uploadConfig.name"
    :list-type='uploadConfig.upType'
    :on-success="handleSuccess"
    :on-error="handleError"
    >
    <i class="fas fa-5x fa-plus-circle text-gray-300"></i>
    <div class="el-upload__text text-gray-400 my-1">
        {{ $t("common.upload") }}
    </div>
</el-upload>
</template>
<script>
export default {
    name: 'UploadImage',

    props: {
        multiple: {
            type: Boolean,
            default: false  // 是否支持多选
        }
    },

    data: () => ({
        uploadConfig: {
            action: '', // 上传的路径
            headers: {}, // 上传时的请求头
            name: 'image', // 上传文件的字段名
            upType: "picture", // 上传文件的类型
        }
    }),

    methods: {
        // 文件上传成功的函数
        handleSuccess (uri) {
            console.log(uri)
        },
        // 文件上传失败的函数
        handleError () {
            console.log('error')
        }
    }
}
</script>

