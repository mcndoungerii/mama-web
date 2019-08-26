<template>
  <b-colxx class>
    <b-row>
      <b-col>
        <b-row>
          <b-colxx xxs="12">
            <h1>{{ $t('menu.baby-profiles') }}</h1>
            <piaf-breadcrumb />
            <div class="float-sm-right">
              <b-button
                style="width: 100%;"
                @click="showAddProfile"
                variant="primary"
                size="lg"
                class="top-right-button"
              >Add Baby Profile</b-button>
            </div>
            <div class="mb-2 mt-2">
              <b-button
                variant="empty"
                class="pt-0 pl-0 d-inline-block d-md-none"
                v-b-toggle.displayOptions
              >
                {{ $t('layouts.display-options') }}
                <i class="simple-icon-arrow-down align-middle" />
              </b-button>
              <b-collapse id="displayOptions" class="d-md-block">
                <span class="mr-3 mb-2 d-inline-block float-md-left">
                  <a
                    :class="{'mr-2 view-icon':true,'active': displayMode==='list'}"
                    @click="changeDisplayMode('list')"
                  >
                    <data-list-icon />
                  </a>
                </span>
                <div class="d-block d-md-inline-block mb-2">
                  <b-dropdown
                    id="ddown1"
                    :text="`${$t('layouts.orderby')} ${sort.label}`"
                    variant="outline-dark"
                    class="mr-1 float-md-left btn-group"
                    size="xs"
                  >
                    <b-dropdown-item
                      v-for="(order,index) in sortOptions"
                      :key="index"
                      @click="changeOrderBy(order)"
                    >{{ order.label }}</b-dropdown-item>
                  </b-dropdown>

                  <div class="search-sm d-inline-block float-md-left mr-1 align-top">
                    <b-input :placeholder="$t('menu.search')" v-model="search" />
                  </div>
                </div>
                <div class="float-md-right">
                  <span class="text-muted text-small mr-1 mb-2">{{from}}-{{to}} of {{ total }}</span>
                  <b-dropdown
                    id="ddown2"
                    right
                    :text="`${perPage}`"
                    variant="outline-dark"
                    class="d-inline-block"
                    size="xs"
                  >
                    <b-dropdown-item
                      v-for="(size,index) in pageSizes"
                      :key="index"
                      @click="changePageSize(size)"
                    >{{ size }}</b-dropdown-item>
                  </b-dropdown>
                </div>
              </b-collapse>
            </div>
            <div class="separator mb-5" />
            <b-modal
              id="modalright"
              ref="modalright"
              :title="'Baby Profile Details'"
              class="modal-right"
            >
              <div v-if="selectedItem">
                <div class="mb-4 d-flex flex-row" no-body>
                  <div v-if="selectedItem.id" class="d-flex flex-grow-1 min-width-zero mt-3 mb-3">
                    <div
                      class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                    >
                      <div class="min-width-zero">
                        <p class="mb-1 text-muted text-small">Profile ID</p>
                        <p class="list-item-heading mb-1">{{selectedItem.id}}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="selectedItem.babyName" class="mb-3 pb-3 border-bottom border-bottom">
                  <div class="pl-0 mb-15 d-flex flex-grow-1 min-width-zero">
                    <div
                      class="p-0 card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
                    >
                      <div class="w-40 w-sm-100">
                        <p class="mb-1 text-muted text-small">Baby Name</p>
                        <p class="list-item-heading mb-1">{{selectedItem.babyName}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="selectedItem.gender" class="mb-3 pb-3 border-bottom border-bottom">
                  <div class="pl-0 mb-15 d-flex flex-grow-1 min-width-zero">
                    <div
                      class="p-0 card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
                    >
                      <div class="w-40 w-sm-100">
                        <p class="mb-1 text-muted text-small">Gender</p>
                        <p class="list-item-heading mb-1">{{selectedItem.gender}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="selectedItem.fatherName" class="mb-3 pb-3 border-bottom border-bottom">
                  <div class="pl-0 mb-15 d-flex flex-grow-1 min-width-zero">
                    <div
                      class="p-0 card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
                    >
                      <div class="w-40 w-sm-100">
                        <p class="mb-1 text-muted text-small">Father Name</p>
                        <p class="list-item-heading mb-1">{{selectedItem.fatherName}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="selectedItem.motherName" class="mb-3 pb-3 border-bottom border-bottom">
                  <div class="pl-0 mb-15 d-flex flex-grow-1 min-width-zero">
                    <div
                      class="p-0 card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
                    >
                      <div class="w-40 w-sm-100">
                        <p class="mb-1 text-muted text-small">Mother Name</p>
                        <p class="list-item-heading mb-1">{{selectedItem.motherName}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="selectedItem.age" class="mb-3 pb-3 border-bottom border-bottom">
                  <div class="pl-0 mb-15 d-flex flex-grow-1 min-width-zero">
                    <div
                      class="p-0 card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
                    >
                      <div class="w-40 w-sm-100">
                        <p class="mb-1 text-muted text-small">Age</p>
                        <p class="list-item-heading mb-1">{{selectedItem.age}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="selectedItem.ageType" class="mb-3 pb-3 border-bottom border-bottom">
                  <div class="pl-0 mb-15 d-flex flex-grow-1 min-width-zero">
                    <div
                      class="p-0 card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
                    >
                      <div class="w-40 w-sm-100">
                        <p class="mb-1 text-muted text-small">Age Type</p>
                        <p class="list-item-heading mb-1">{{selectedItem.ageType}}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="selectedItem.createdAt" class="mb-3 pb-3 border-bottom border-bottom">
                  <div class="pl-0 mb-15 d-flex flex-grow-1 min-width-zero">
                    <div
                      class="p-0 card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
                    >
                      <div class="w-40 w-sm-100">
                        <p class="mb-1 text-muted text-small">Stock Created</p>
                        <p class="list-item-heading mb-1">{{selectedItem.createdAt | humanDate}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <template slot="modal-footer">
                <b-button
                  variant="outline-secondary"
                  @click="hideModal('modalright')"
                >{{ $t('layouts.cancel') }}</b-button>
                <b-button variant="primary" class="mr-1" @click="showEditProfile()">Edit Stock</b-button>
              </template>
            </b-modal>

            <!-- Add Baby Profile Modal -->
            <modal height="auto" :scrollable="true" :adaptive="true" name="addProfileModal">
              <div style="padding:30px">
                <div>
                  <b-row>
                    <b-colxx cols="8">
                      <h1>{{newItem.hasOwnProperty("id")? 'Edit Profile' : 'Add Profile'}}</h1>
                    </b-colxx>
                    <b-colxx cols="4" class="text-right">
                      <a href="#" @click="$modal.hide('addProfileModal')">
                        <h1>
                          <i class="simple-icon-close"></i>
                        </h1>
                      </a>
                    </b-colxx>
                  </b-row>
                </div>

                <b-row>
                  <b-col>
                    <b-form-group label="Baby Name">
                      <b-form-input v-model="newItem.babyName" />
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Gender">
                      <b-form-input v-model="newItem.gender" />
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group label="Age">
                      <b-form-input v-model="newItem.age" />
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Age Type">
                      <b-form-input v-model="newItem.ageType" />
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group label="Father Name">
                      <b-form-input v-model="newItem.fatherName" />
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Mother Name">
                      <b-form-input v-model="newItem.motherName" />
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-form-group>
                  <div class="float-sm-right">
                    <b-button
                      v-if="newItem.id"
                      @click="deleteProfile"
                      variant="danger"
                      size="lg"
                      style="margin:5px"
                    >Delete Profile</b-button>
                    <b-button
                      @click="$modal.hide('addProfileModal')"
                      variant="light"
                      size="lg"
                      style="margin:5px"
                    >Cancel</b-button>
                    <b-button
                      @click="addProfile"
                      variant="primary"
                      :disabled="processing"
                      size="lg"
                      style="margin:5px"
                    >
                      <i v-if="processing" class="loader"></i>
                      <span v-if="!processing">{{newItem.hasOwnProperty("id")? 'Update':'Add'}}</span>
                    </b-button>
                  </div>
                </b-form-group>
              </div>
            </modal>
            <!-- End of Add Baby Profile Modal -->
          </b-colxx>
        </b-row>
        <template v-if="isLoad">
          <b-row key="list">
            <b-colxx xxs="12" class="mb-3" v-for="(item,index) in items" :key="index" :id="item.id">
              <data-list-item
                :key="item.id"
                :data="item"
                :selected-items="selectedItems"
                @toggle-item="toggleItem"
                @click-item="clickItem"
                v-contextmenu:contextmenu
              />
            </b-colxx>
          </b-row>
          <b-row v-if="lastPage>1">
            <b-colxx xxs="12">
              <b-pagination-nav
                :number-of-pages="lastPage"
                :link-gen="linkGen"
                v-model="page"
                :per-page="perPage"
                align="center"
                next-text="<i class='simple-icon-arrow-right' />"
                prev-text="<i class='simple-icon-arrow-left' />"
                first-text="<i class='simple-icon-control-start' />"
                last-text="<i class='simple-icon-control-end' />"
              />
            </b-colxx>
          </b-row>
        </template>
        <template v-else>
          <div class="loading"></div>
        </template>
        <v-contextmenu ref="contextmenu" @contextmenu="handleContextmenu">
          <v-contextmenu-item @click="onContextCopy()">
            <i class="simple-icon-docs" />
            <span>Copy</span>
          </v-contextmenu-item>
          <v-contextmenu-item @click="onContextArchive()">
            <i class="simple-icon-drawer" />
            <span>Move to archive</span>
          </v-contextmenu-item>
          <v-contextmenu-item @click="onContextDelete()">
            <i class="simple-icon-trash" />
            <span>Delete</span>
          </v-contextmenu-item>
        </v-contextmenu>
      </b-col>
    </b-row>
  </b-colxx>
</template>
<script>
import { DataListIcon, ThumbListIcon, ImageListIcon } from "components/Svg";
import vSelect from "vue-select";
import Switches from "vue-switches";
import DataListItem from "components/Listing/BabyProfile/DataListItem";
import profileApi from "../../../api/babyProfile";

let moment = require("moment");
export default {
  components: {
    DataListIcon,
    ThumbListIcon,
    ImageListIcon,
    vSelect,
    Switches,
    DataListItem
  },
  data() {
    return {
      isLoad: false,
      processing: false,
      displayMode: "list",
      sort: { column: "createdAt", label: "Date Added" },
      sortOptions: [{ column: "createdAt", label: "Date Added" }],
      page: 1,
      perPage: 4,
      search: "",
      from: 0,
      to: 0,
      total: 0,
      lastPage: 0,
      items: [],
      pageSizes: [4, 8, 12],

      selectedItems: [],
      selectedItem: null,

      newItem: {}
    };
  },
  methods: {
    loadItems() {
      this.isLoad = false;
      if (this.apiUrl !== undefined)
        profileApi.list(this.apiUrl).then(res => {
          this.total = res.data.total;
          this.lastPage = Math.ceil(
            this.total / this.perPage < 1 ? 1 : this.total / this.perPage
          );
          this.items = res.data.babyprofiles;
          this.selectedItems = [];

          this.isLoad = true;
        });
    },
    showAddProfile() {
      this.newItem = {};
      this.$modal.show("addProfileModal");
    },
    showEditProfile() {
      this.newItem = this.selectedItem;
      this.$modal.show("addProfileModal");
      this.$refs.modalright.hide();
    },

    addProfile() {
      this.processing = true;

      if (this.newItem.hasOwnProperty("id")) {
        profileApi
          .update(this.newItem)
          .then(res => {
            console;
            this.processing = false;
            this.$modal.hide("addProfileModal");
            this.loadItems();
            this.$notify(
              "success",
              "Updated Successfully",
              `Stock updated successfully`,
              { duration: 3000, permanent: false }
            );
          })
          .catch(error => {
            this.processing = false;
            this.$modal.hide("addProfileModal");
            this.$notify("error", "Error!", `Error occurred`, {
              duration: 3000,
              permanent: false
            });
          });
      } else {
        profileApi
          .create(this.newItem)
          .then(res => {
            this.processing = false;
            this.$modal.hide("addProfileModal");
            this.loadItems();
            this.$notify(
              "success",
              "Added Successfully",
              `Stock added successfully`,
              { duration: 3000, permanent: false }
            );
          })
          .catch(error => {
            this.processing = false;
            this.$modal.hide("addProfileModal");
            this.$notify("error", "Error!", `Error occurred`, {
              duration: 3000,
              permanent: false
            });
          });
      }
    },
    deleteProfile() {
      this.processing = true;
      let items = [];
      items.push(this.newItem.id);
      profileApi
        .delete({ items: items })
        .then(res => {
          this.processing = false;
          this.loadItems();
          this.$modal.hide("addProfileModal");
          this.$notify(
            "success",
            "Deleted Successfully",
            `Stock deleted successfully`,
            { duration: 3000, permanent: false }
          );
        })
        .catch(error => {
          this.processing = false;
          console.log(error);
          this.$notify("error", "Error!", error.message, {
            duration: 3000,
            permanent: false
          });
        });
    },

    hideModal(refname) {
      this.$refs[refname].hide();
    },
    changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changePageSize(perPage) {
      this.perPage = perPage;
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },

    selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map(x => x.id);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },
    toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        let itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(
          this.selectedItems[this.selectedItems.length - 1],
          itemsForToggle,
          "id"
        );
        itemsForToggle = itemsForToggle.slice(
          Math.min(start, end),
          Math.max(start, end) + 1
        );
        this.selectedItems.push(
          ...itemsForToggle.map(item => {
            return item.id;
          })
        );
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter(x => x != itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    clickItem(event, item) {
      this.selectedItem = item;
      this.$refs.modalright.show();
    },
    handleContextmenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextCopy() {
      console.log(
        "context menu item clicked - Copy Items: ",
        this.selectedItems
      );
    },
    onContextArchive() {
      console.log(
        "context menu item clicked - Move to Archive Items: ",
        this.selectedItems
      );
    },
    onContextDelete() {
      console.log(
        "context menu item clicked - Delete Items: ",
        this.selectedItems
      );
    },
    linkGen(pageNum) {
      return "#page-" + pageNum;
    }
  },
  computed: {
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    },
    apiUrl() {
      let skip = this.page === 1 ? 0 : (this.page - 1) * this.perPage;
      if (this.perPage !== undefined)
        return `?sortBy='${
          this.sort.column
        }'&sortOrder=DESC&skip=${skip}&limit=${this.perPage}${
          this.search !== "" ? "&contains=" + this.search : ""
        }`;
    }
  },
  watch: {
    search() {
      this.loadItems();
      this.page = 1;
    },
    apiUrl() {
      this.loadItems();
    },
    "$route.params.type"(to, from) {
      this.loadItems();
    }
  },
  mounted() {
    this.loadItems();
  },
  filters: {
    humanDate(val) {
      let date = moment(val).format("MM-DD-YYYY hh:mm a");
      return date;
    }
  }
};
</script>
<style>
.v--modal-overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999999 !important;
  opacity: 1;
}
</style>