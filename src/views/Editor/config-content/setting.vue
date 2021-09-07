<template>
<div class="row">
    <div class="col-4">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Basic Setting</h6>
            </div>
            <div class="card-body">
                <p>Set MP Title</p>
                <p>Enable MultiLanguage</p>
                <p>Auto-Translate</p>
            </div>
        </div>
    </div>
    <div class="col-4">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Set Share Image</h6>
            </div>
            <div class="card-body">
                <div class="card mb-4 border-dashed bg-transparent">
                    <div class="card-body text-center">
                        <h6 class="text-gray-400">Click or drag image</h6>
                            <a href="#" data-toggle="modal" data-target="#addPageModal">
                                <i class="fas fa-5x fa-plus-circle text-gray-300 my-2"></i>
                            </a>
                        <h6 class="text-gray-400">to upload</h6>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <div class="col-4">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">QR Code</h6>
            </div>
            <div class="card-body">
                <img src="/img/qr.jpg" class="img-fluid">
                <a href="#" class="btn btn-block btn-primary">
                    <i class="fas fa-fw fa-download"></i>
                    Download
                </a>
            </div>
        </div>
    </div>																		
</div>
</template>
