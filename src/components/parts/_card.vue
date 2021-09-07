<template>
<div class>
    <div class="row">

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Campaign
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                ROI (Campaign)
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                            4,01
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Goals</div>
                    <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                    </div>
                    <div class="col">
                        <div class="progress progress-sm mr-2">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
                </div>
            </div>
            </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    interaction
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                    18 Comments
                    </div>
                </div>
                <div class="col-auto">
                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <!-- success -->
    <div class="row">
        <div class="col-xl-6 col-lg-12">
            <div class="card shadow mb-4">
            <div class="card-header bg-success py-3">
                <h6 class="m-0 font-weight-bold text-white">
                {{$t('card.title')}}
                </h6>
            </div>
            <div class="card-body">
                {{$t('card.content')}}
            </div>
            </div>
        </div>

        <!-- default -->
        <div class="col-xl-6 col-lg-12">
            <!-- Collapsable Card Example -->
            <div class="card shadow mb-4">
            <!-- Card Header - Accordion -->
            <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                <h6 class="m-0 font-weight-bold text-primary">{{$t('card.title')}}</h6>
            </a>
            <!-- Card Content - Collapse -->
            <div class="collapse show" id="collapseCardExample">
                <div class="card-body">
                    {{$t('card.content')}}
                </div>
            </div>
            </div>
        </div>
    </div>
    <!-- warning -->
    <div class="row">
        <div class="col-xl-12 col-lg-12">
            <div class="card shadow mb-4">
            <div class="card-header bg-warning py-3">
                <h6 class="m-0 font-weight-bold text-white">
                <i class="fas fa-info-circle"></i> {{$t('card.title')}}
                </h6>
            </div>
            <div class="card-body">
                {{$t('card.content')}}
            </div>
            </div>
        </div>
    </div>
    <!-- info -->
    <div class="row">
        <div class="col-xl-12 col-lg-12">
            <div class="card shadow mb-4">
            <div class="card-header bg-info py-3">
                <h6 class="m-0 font-weight-bold text-white">
                <i class="fas fa-info-circle"></i> {{$t('card.title')}}
                </h6>
            </div>
            <div class="card-body">
                {{$t('card.content')}}
            </div>
            </div>
        </div>
    </div>
    <!-- danger -->
    <div class="row">
        
        <div class="col-xl-12 col-lg-12">
            <div class="card shadow mb-4">
            <div class="card-header bg-danger py-3">
                <h6 class="m-0 font-weight-bold text-white">
                <i class="fas fa-exclamation-triangle"></i> {{$t('card.title')}}
                </h6>
            </div>
            <div class="card-body">
                {{$t('card.content')}}
            </div>
            </div>
        </div>
        
    </div>

</div>
</template>

<script>
export default {
  name: 'card',
  components: {
  }
}
</script>
