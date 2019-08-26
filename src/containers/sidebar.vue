<template>
  <div
    class="sidebar"
    @mouseenter="isMenuOver=true"
    @mouseleave="isMenuOver=false"
    @touchstart="isMenuOver=true"
  >
    <div class="main-menu">
      <vue-perfect-scrollbar
        class="scroll"
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
      >
        <ul class="list-unstyled">
          <router-link tag="li" to="/app/dashboards/default">
            <a>
              <i class="simple-icon-home"></i>
              {{ $t("menu.app") }}
            </a>
          </router-link>
          <li v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" :class="{ active : selectedParentMenu==='user'}">
            <a @click.prevent="openSubMenu($event,'user')" href="#user">
              <i class="simple-icon-people"></i>Users
            </a>
          </li>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/branches">
            <a>
              <i class="simple-icon-organization"></i>
              Branches
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/customers">
            <a>
              <i class="simple-icon-user"></i>
              Customers
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/payments">
            <a>
              <i class="simple-icon-wallet"></i>
              Payments
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/products">
            <a>
              <i class="simple-icon-basket-loaded"></i>
              Products
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/orders">
            <a>
              <i class="simple-icon-basket-loaded"></i>
              Orders
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/sales">
            <a>
              <i class="simple-icon-docs"></i>
              Sales
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/stocks">
            <a>
              <i class="simple-icon-present"></i>
              Stocks
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/suppliers">
            <a>
              <i class="simple-icon-globe"></i>
              Suppliers
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/reports">
            <a>
              <i class="simple-icon-note"></i>
              Reports
            </a>
          </router-link>

          <li :class="{ active : selectedParentMenu==='menu'}">
            <a @click.prevent="openSubMenu($event,'menu')" href="#menu">
              <i class="iconsmind-Three-ArrowFork"></i>
              {{ $t("menu.menu") }}
            </a>
          </li>
        </ul>
      </vue-perfect-scrollbar>
    </div>

    <div class="sub-menu">
      <vue-perfect-scrollbar
        class="scroll"
        :settings="{ suppressScrollX: true, wheelPropagation: false }"
      >
        <ul
          class="list-unstyled"
          data-link="dashboards"
          :class="{'d-block':selectedParentMenu==='dashboards' }"
        >
          <router-link tag="li" to="/app/dashboards/default">
            <a>
              <i class="simple-icon-briefcase"></i>
              {{ $t("menu.default") }}
            </a>
          </router-link>
          <!--<router-link tag="li" to="/app/dashboards/analytics"><a><i class="simple-icon-pie-chart"></i> {{ $t("menu.analytics") }}</a></router-link>-->
          <!--<router-link tag="li" to="/app/dashboards/ecommerce"><a><i class="simple-icon-basket-loaded"></i> {{ $t("menu.ecommerce") }}</a></router-link>-->
          <!--<router-link tag="li" to="/app/dashboards/content"><a><i class="simple-icon-doc"></i> {{ $t("menu.content") }}</a></router-link>-->
        </ul>

        <ul
          class="list-unstyled"
          data-link="layouts"
          :class="{'d-block':selectedParentMenu==='layouts' }"
        >
          <router-link tag="li" to="/app/layouts/data-list">
            <a>
              <i class="simple-icon-credit-card"></i>
              {{ $t("menu.data-list") }}
            </a>
          </router-link>
          <router-link tag="li" to="/app/layouts/thumb-list">
            <a>
              <i class="simple-icon-list"></i>
              {{ $t("menu.thumb-list") }}
            </a>
          </router-link>
          <router-link tag="li" to="/app/layouts/image-list">
            <a>
              <i class="simple-icon-grid"></i>
              {{ $t("menu.image-list") }}
            </a>
          </router-link>
          <router-link tag="li" to="/app/layouts/details">
            <a>
              <i class="simple-icon-book-open"></i>
              {{ $t("menu.details") }}
            </a>
          </router-link>
          <router-link tag="li" to="/app/layouts/search">
            <a>
              <i class="simple-icon-magnifier"></i>
              {{ $t("menu.search") }}
            </a>
          </router-link>
          <router-link tag="li" to="/user/login">
            <a target="_blank">
              <i class="simple-icon-user-following"></i>
              {{ $t("menu.login") }}
            </a>
          </router-link>
          <router-link tag="li" to="/user/register">
            <a target="_blank">
              <i class="simple-icon-user-follow"></i>
              {{ $t("menu.register") }}
            </a>
          </router-link>
          <router-link tag="li" to="/user/forgot-password">
            <a target="_blank">
              <i class="simple-icon-user-unfollow"></i>
              {{ $t("menu.forgot-password") }}
            </a>
          </router-link>
          <router-link tag="li" to="/error">
            <a target="_blank">
              <i class="simple-icon-exclamation"></i>
              {{ $t("menu.error") }}
            </a>
          </router-link>
        </ul>

        <ul
          class="list-unstyled"
          data-link="applications"
          :class="{'d-block':selectedParentMenu==='user' }"
        >
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/users" >
            <a>
              <i class="simple-icon-user-following"></i> All Users
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN'" tag="li" to="/app/users/admin">
            <a>
              <i class="simple-icon-user-following"></i> Administrators
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN' || user.role === 'CUSTOMER'" tag="li" to="/app/users/seller">
            <a>
              <i class="simple-icon-user-following"></i> Sellers
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN'" tag="li" to="/app/users/customer">
            <a>
              <i class="simple-icon-user-following"></i> Customers
            </a>
          </router-link>
          <router-link v-if="user.role ==='ADMIN'" tag="li" to="/app/users/customeradmin">
            <a>
              <i class="simple-icon-user-following"></i> Customer Admin
            </a>
          </router-link>
        </ul>

        <ul
          class="list-unstyled"
          data-link="applications"
          :class="{'d-block':selectedParentMenu==='caregivers' }"
        >
          <router-link tag="li" to="/app/caregivers/favourite">
            <a>
              <i class="simple-icon-heart"></i> Favourite
            </a>
          </router-link>
          <router-link tag="li" to="/app/caregivers/favourite">
            <a>
              <i class="simple-icon-graph"></i> Popular
            </a>
          </router-link>
        </ul>

        <ul
          class="list-unstyled"
          data-link="menu"
          :class="{'d-block':selectedParentMenu==='menu' }"
        >
          <router-link
            tag="li"
            to="#/app/menu/default"
            @click.native.prevent="changeDefaultMenuType('menu-default')"
          >
            <a>
              <i class="simple-icon-control-pause"></i>
              {{ $t("menu.default") }}
            </a>
          </router-link>
          <router-link
            tag="li"
            to="#/app/menu/subhidden"
            @click.native.prevent="changeDefaultMenuType('menu-sub-hidden')"
          >
            <a>
              <i class="simple-icon-arrow-left mi-subhidden"></i>
              {{ $t("menu.subhidden") }}
            </a>
          </router-link>
          <router-link
            tag="li"
            to="#/app/menu/hidden"
            @click.native.prevent="changeDefaultMenuType('menu-hidden')"
          >
            <a>
              <i class="simple-icon-control-start mi-hidden"></i>
              {{ $t("menu.hidden") }}
            </a>
          </router-link>
        </ul>
      </vue-perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { menuHiddenBreakpoint, subHiddenBreakpoint } from "constants/config";

export default {
  data() {
    return {
      selectedParentMenu: "",
      isMenuOver: false,
      user: ""
    };
  },
  mounted() {
    this.selectMenu();
    this.user = this.currentUser.user;

    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedMenu);
    this.handleWindowResize();
  },
  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },

  methods: {
    ...mapMutations([
      "changeSideMenuStatus",
      "addMenuClassname",
      "changeSelectedMenuHasSubItems"
    ]),
    selectMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter(x => x !== "")[1];
      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = this.defaultSelectedMenu;
      }
    },
    changeSelectedParentHasNoSubmenu(parentMenu) {
      this.selectedParentMenu = parentMenu;
      this.changeSelectedMenuHasSubItems(false);
      this.changeSideMenuStatus({ step: 0, classNames: this.menuType });
    },
    openSubMenu(e, selectedParent) {
      this.changeSelectedMenuHasSubItems(true);

      const currentClasses = this.menuType
        ? this.menuType.split(" ").filter(x => x !== "")
        : "";

      if (!currentClasses.includes("menu-mobile")) {
        if (
          currentClasses.includes("menu-sub-hidden") &&
          (this.menuClickCount === 2 || this.menuClickCount === 0)
        ) {
          this.changeSideMenuStatus({ step: 3, classNames: this.menuType });
        } else if (
          currentClasses.includes("menu-hidden") &&
          (this.menuClickCount === 1 || this.menuClickCount === 3)
        ) {
          this.changeSideMenuStatus({ step: 2, classNames: this.menuType });
        } else if (
          currentClasses.includes("menu-default") &&
          !currentClasses.includes("menu-sub-hidden") &&
          (this.menuClickCount === 1 || this.menuClickCount === 3)
        ) {
          this.changeSideMenuStatus({ step: 0, classNames: this.menuType });
        }
      } else {
        this.addMenuClassname({
          classname: "sub-show-temporary",
          currentClasses: this.menuType
        });
      }
      this.selectedParentMenu = selectedParent;
    },
    addEvents() {
      document.addEventListener("click", this.handleDocumentClick);
    },
    removeEvents() {
      document.removeEventListener("click", this.handleDocumentClick);
    },
    returnSelectedMenu() {
      if (!this.isMenuOver) {
        this.selectMenu();
      }
    },
    handleDocumentClick(e) {
      if (!this.isMenuOver) {
        let cont = true;
        e.path.map(p => {
          if (
            p.nodeName !== "svg" &&
            p.className !== undefined &&
            p.className.indexOf("menu-button") > -1
          ) {
            cont = false;
          }
        });
        if (cont) {
          this.toggle();
        }
      }
    },
    toggle() {
      const currentClasses = this.menuType.split(" ").filter(x => x !== "");
      if (
        currentClasses.includes("menu-sub-hidden") &&
        this.menuClickCount === 3
      ) {
        this.changeSideMenuStatus({ step: 2, classNames: this.menuType });
      } else if (
        currentClasses.includes("menu-hidden") ||
        currentClasses.includes("menu-mobile")
      ) {
        this.changeSideMenuStatus({ step: 0, classNames: this.menuType });
      }
    },
    // Resize
    handleWindowResize(event) {
      if (event && !event.isTrusted) {
        return;
      }
      let nextClasses = this.getMenuClassesForResize(this.menuType);
      this.changeSideMenuStatus({ step: 0, classNames: nextClasses.join(" ") });
    },
    getMenuClassesForResize(classes) {
      let nextClasses = classes.split(" ").filter(x => x !== "");
      const windowWidth = window.innerWidth;
      if (windowWidth < menuHiddenBreakpoint) {
        nextClasses.push("menu-mobile");
      } else if (windowWidth < subHiddenBreakpoint) {
        nextClasses = nextClasses.filter(x => x !== "menu-mobile");
        if (
          nextClasses.includes("menu-default") &&
          !nextClasses.includes("menu-sub-hidden")
        ) {
          nextClasses.push("menu-sub-hidden");
        }
      } else {
        nextClasses = nextClasses.filter(x => x !== "menu-mobile");
        if (
          nextClasses.includes("menu-default") &&
          nextClasses.includes("menu-sub-hidden")
        ) {
          nextClasses = nextClasses.filter(x => x !== "menu-sub-hidden");
        }
      }
      return nextClasses;
    },
    // Change Default Menu Type
    changeDefaultMenuType(containerClassnames) {
      let nextClasses = this.getMenuClassesForResize(containerClassnames);
      this.changeSideMenuStatus({ step: 0, classNames: nextClasses.join(" ") });
    }
  },
  computed: {
    ...mapGetters({
      menuType: "getMenuType",
      menuClickCount: "getMenuClickCount",
      currentUser: "currentUser"
    })
  },
  watch: {
    menuType: function(val) {
      if (val.indexOf("show-temporary") > -1) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    },
    $route(to, from) {
      if (to.path !== from.path) {
        this.changeSideMenuStatus({ step: 0, classNames: this.menuType });
        this.selectMenu();
        window.scrollTo(0, top);
      }
    }
  }
};
</script>
