  <section class="loadingState">
    <style>
      * {
        /*visibility: hidden*/
      }

      .loadingState,
      .loadingState .middle,
      .loadingState .inner,
      .loadingState img {
        visibility: visible;
        position: fixed;
        width: 100%;
        max-width: 1440px;
        max-height: 900px;
        top: 58%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
      }

      .loadingState {
        max-width: 100%;
        max-height: 100%;
        width:100%;
        height: 100%;
        top: 50%;
        background: white;
        display: none;
      }
    </style>
    <section class="middle">
      <section class="inner" style="margin-top: -10vh;">
        <img src="pages/0-loading/assets/loading.gif">
      </section>
    </section>
  </section>

  <script type="text/javascript" src="pages/0-loading/scripts/load.js"></script>
