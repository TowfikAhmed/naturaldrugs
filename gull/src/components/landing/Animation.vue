<template>
  <!--  1. Create a lottie player with a reference -->
  <lottie-player id="firstLottie"
                 ref="lottie"
                 autoplay
                 src="https://assets9.lottiefiles.com/packages/lf20_57TxAX.json"
                 style="height: 500px;">
  </lottie-player>
</template>

<script>
  import { create } from '@lottiefiles/lottie-interactivity';

  export default {
  name: 'App',

  mounted() {
    // 2. listen for player load. See lottie player repo for other events
    this.$refs.lottie.addEventListener('load', function() {
      // 3. configure the interactivity library
      create({
        player: '#firstLottie',
        mode: 'chain',
        actions: [
        {
            state: 'autoplay',
            transition: 'onComplete'
        },
        {
            state: 'autoplay',
            transition: 'onComplete',
            path: 'https://assets7.lottiefiles.com/private_files/lf30_x2lzmtdl.json'
        },
        {
            state: 'autoplay',
            transition: 'onComplete',
            path: 'https://assets3.lottiefiles.com/private_files/lf30_9kdbftpx.json',
            reset: true
        }
        ]
      });
    })
  }
}
</script>