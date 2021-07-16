<template>
  <div class="resume">
    <h2>Resume</h2>
    <div id="adobe-dc-view" style="width:75%;"></div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
    document.body.appendChild(script);
    document.addEventListener('adobe_dc_view_sdk.ready', function() {
      var adobeDCView = new AdobeDC.View({
        clientId: '236d5f6beca14873be82f7c736aaf7bc',
        divId: 'adobe-dc-view',
      });
      adobeDCView.previewFile(
        {
          content: {
            location: {
              url: './assets/resume.pdf',
            },
          },
          metaData: { fileName: 'CMS Resume' },
        },
        { embedMode: 'SIZED_CONTAINER' }
      );
    });
  },
};
</script>

<style lang="scss">
.resume {
  padding: 5rem 10rem;
  height: 80%;
  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: rgba(108, 32, 156, 0.6);
  }
}
</style>
