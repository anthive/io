<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <a slot="brand" class="navbar-brand mr-lg-5" href="/">
                <img src="img/brand/AntHive-logo.png">
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
                    <a href="/#rules" class="nav-link order-2 order-md-1">
                        <span class="nav-link-inner--text">Rules</span>
                    </a>

                    <a href="/#leaderboard" class="nav-link order-3 order-md-2">
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
                <a href="https://profile.anthive.io/" class="btn btn-primary order-md-4" style="background-color: #719E3B !important; border: 0; height: 45px;margin-top: 5px;" @click="logged = !logged" v-if="!logged">Sign In</a>
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
      logged: false
    };
  },
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
.dropdown-item.active,
.dropdown-item:active {
  color: #212529 !important;
  text-decoration: none;
  background-color: transparent !important;
}

.profile-icon {
  transform: translateX(20px);
}

@media only screen and (max-width: 400px) {
  .profile-icon {
    transform: translateX(0px);
  }
}
</style>
