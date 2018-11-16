<template>
    <header class="header-global " :class="{ 'sticky-top': scrollPosition > 10, shadow: scrollPosition > 10}">
        <base-nav class="navbar-main " :class="{stuck: scrollPosition > 10}" transparent type="" effect="light" expand>
            <a slot="brand" class="navbar-brand mr-lg-5" href="/">

            <!--AntHive logo-->
                <p class="anthive-logo" style="font-size: 30px;">
                    <span>Ant</span><span>Hive.IO</span>
                </p>
            <!--AntHive logo-->
            </a>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="/">
                        <img src="img/brand/AntHive-logo.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover ml-auto">
                    <a href="/rules" class="nav-link order-2 order-md-1">
                        <span class="nav-link-inner--text">Rules</span>
                    </a>

                    <a href="/leaderboard" class="nav-link order-3 order-md-2">
                        <span class="nav-link-inner--text ">Leaderboards</span>
                    </a>
                <base-dropdown tag="li" class="nav-item order-1 order-md-4" v-if="logged">
                    <a slot="title" href="#" class="nav-item" data-toggle="dropdown" role="button">
                        <img src="img/profile-image.png" class="rounded-circle profile-icon" />
                    </a>
                    <router-link to="https://profile.anthive.io/" class="dropdown-item">Profile</router-link>
                    <router-link to="https://profile.anthive.io/settings" class="dropdown-item">Settings</router-link>
                    <a href="https://profile.anthive.io/logout" @click="logged = !logged" class="dropdown-item">Log out</a>
                </base-dropdown>
                <a href="https://profile.anthive.io/" class="btn btn-primary order-md-4" style="background-color: #719E3B !important; border: 0; height: 38px;margin-top: 5px;" v-if="!logged">Sign In</a>
            </ul>

        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  data() {
    return {
      logged: false,
      stickyOptions: {
        marginTop: 0,
        forName: 0,
        className: "stuck"
      },
      scrollPosition: null
    };
  },
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>
<style>
.anthive-logo {
  text-transform: none !important;
  margin-bottom: 0 !important;
  font-weight: 500;
}
.anthive-logo span:first-child {
  color: #000;
}

.anthive-logo span:last-child {
  color: #db8f39;
}

.dropdown-item.active,
.dropdown-item:active {
  color: #212529 !important;
  text-decoration: none;
  background-color: transparent !important;
}

.profile-icon {
  transform: translateX(20px);
}

.stuck {
  background-color: rgba(255, 255, 255, 0.9) !important;
  color: #000 !important;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
}

.stuck .navbar-nav .nav-link {
  color: #000 !important;
}
.navbar-main {
  padding: 0 !important;
}
.navbar-main .container {
  padding: 1rem !important;
}

@media only screen and (max-width: 400px) {
  .profile-icon {
    transform: translateX(0px);
  }
}
</style>
