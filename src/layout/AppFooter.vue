<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        <img src="img/brand/AntHive-logo.png" >
                        <br>
                        <div style=" width: 20px; padding-bottom: 10px; margin-bottom: 10px; border-bottom: 2px solid #4A5F1C;">
                        </div>
                        Copyright &copy; 2018. All rights reserved.
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.youtube.com/channel/UCx1KBAlciwcRuehIiOfnDVg" class="nav-link" target="_blank">
                                <div class="social-icon yt-icon shadow">

                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="https://facebook.com/AntHiveIO" class="nav-link" target="_blank">
                                <div class="social-icon fb-icon shadow">

                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="https://twitter.com/AntHiveIO" class="nav-link" target="_blank">
                                <div class="social-icon tw-icon shadow">

                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {};
</script>
<style>
.footer.has-cards:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 420px !important;
  height: 200px !important;
  background: transparent !important;
  background-image: url(../img/footer-bg.png) !important;
  -webkit-transform: none !important;
  transform: none !important;
}

.footer.has-cards {
  overflow: hidden;
  padding-top: 500px;
  margin-top: -370px !important;
  position: relative;
  background: transparent;
  pointer-events: none;
}

.social-icon {
  width: 34px;
  height: 34px;
  border-radius: 100%;
}

.yt-icon {
  background-image: url(../img/yt-icon.png);
  background-size: cover;
  background-position: center center;
}

.tw-icon {
  background-image: url(../img/twitter-icon.png);
  background-size: cover;
  background-position: center center;
}

.fb-icon {
  background-image: url(../img/facebook-icon.png);
  background-size: cover;
  background-position: center center;
}
</style>
