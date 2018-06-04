<style>
  .nav {
    height: 5vw;
    position: fixed;
    width: 100%;
  }

  .nav--top {
    top: 20px;
  }

  .nav--bottom {
    bottom: 20px;
  }

  .top--text,
  .bottom--text {
    position: absolute;
  }

  .top--text-left,
  .bottom--text-left {
    left: 20px;
  }

  .top--text-mid,
  .bottom--text-mid {
    left: 50%;
    transform: translate(-50%,0);
  }

  .top--text-right {
    right: 20px;
  }

  .bottom--text,
  .bottom--text-mid,
  .bottom--text-left {
    bottom: 0;
  }

  .bottom--text-right {
    right: 20px;
  }

</style>

  <div class ="nav nav--top" id="topBar">
    <div class="top--text top--text-mid" id="title">Sincerely,</div>
    <div class="top--text top--text-left">
      <a id="about" href="#" target="_blank"><arrows1>→</arrows1> About</a>
    </div>
    <!-- <div class="top--text top--text-left" id="students">Students</div> -->
    <div class="top--text top--text-right">
      <a id="showcase" href="#" target="_blank"><arrows>→</arrows> Showcase</a>
      <!-- </br> -->
      <!-- <a id="about" href="#" target="_blank"><arrows1>→</arrows1> About</a> -->
    </div>
    <!-- <div class="top--text top--text-right">Tags</div> -->
  </div>

  <div class="nav nav--bottom" id="bottomBar">
    <div class="bottom--text bottom--text-mid" id="subTitle">Central Saint Martins BA Graphic Design 2018</div>
    <div class="bottom--text bottom--text-left">
      <a id="visit" href="#" target="_blank">→ <moveText1>Visit</moveText1></a>
      <!-- </br> -->
      <!-- <a id="press" href="#" target="_blank">→ <moveText>Press</moveText></a> -->
    </div>
    <!-- <div class="bottom--text bottom--text-right">
      <a id="showcase" href="#" target="_blank"><arrows>→</arrows> Showcase</a>
      </br>
      <a id="about" href="#" target="_blank"><arrows1>→</arrows1> About</a>
    </div> -->
    <!-- <div class="bottom--text bottom--text-right" id="tags">Tags</div> -->
    <div class="bottom--text bottom--text-right">
      <a id="press" href="#" target="_blank">→ <moveText>Press</moveText></a>
    </div>
  </div>
