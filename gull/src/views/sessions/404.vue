<template>
    <div class="h-screen w-screen flex justify-center items-center">
        <div class="app-error">
            <div class="flex items-center mb-5">
                <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_jprywobb.json" background="transparent" style="height:400px"  speed="1" autoplay loop></lottie-player>
            </div>
            <p class="text-center mb-5">Opps! Page Not Found</p>
            <div class="flex justify-center">
                <BaseBtn class="mr-2 rounded bg-purple-200 py-1 text-primary font-bold flex justify-center px-3 items-center transition duration-300 ease-in-out hover:bg-primary hover:text-white" >Back To Dashboard </BaseBtn>
                <BaseBtn class="rounded bg-red-200 py-1 text-red-500 font-bold flex justify-center px-3 items-center transition duration-300 ease-in-out hover:bg-danger hover:text-white">Report the problem </BaseBtn>
            </div>
        </div>
    </div>
</template>