<template>
<div class="container-fluid">

					<!-- 404 Error Text -->
					<div class="text-center mt-5 pb-5">
						<div class="error mx-auto" data-text="404">404</div>
						<p class="lead text-gray-800 mb-5">{{$t('common.notfound')}}</p>
						<p class="text-gray-500 mb-0">{{$t('common.errhint')}}</p>
						<a href="/" class="text-primary">← {{$t('common.errback')}}</a>
					</div>

					<!-- 502 Error Text --
					<div class="text-center">
						<div class="error mx-auto" data-text="502">502</div>
						<p class="lead text-gray-800 mb-5">Page Not Found</p>
						<p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
						<a href="index.html" class="text-primary">&larr; Back to Dashboard</a>
					</div> -->
					<!-- END OF: 502 Error Text -->


					<!-- Error Text --
					<div class="text-center">
						<div class="error mx-auto" data-text="err0r">error</div>
						<p class="lead text-gray-800 mb-5">System Error</p>
						<p class="text-gray-500 mb-0">Looks like the system has an issue...</p>
						<a href="index.html" class="text-primary">&larr; Back to Dashboard</a>
					</div> -->
					<!-- END OF: Error Text -->

				</div>
	

</template>

<script>
export default {
  name: 'NotFound',
  
}
</script>

<style scoped lang="less">

</style>
