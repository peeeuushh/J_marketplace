<template>
  <div>
    <q-card style="text-align: left;">
      <q-card-section>
        <div class="row items-center">
        <div class="col" style="font-size: x-large;text-align: center;">Search Results 1-20</div>
        <div class="col" style="text-align: end;">
        <!-- <q-toggle
        v-model="isGridview"
        checked-icon="apps"
        unchecked-icon="list"
        checked-color="green"
        unchecked-color="blue"
        size="70px" val="70px"/> -->

        <q-btn outline round color="primary" icon="apps" @click="openGrid" v-ripple/>
        </div>
        </div>
      </q-card-section>
    </q-card><br>
    <q-list>
      <q-item v-for="item in items" :key="item.id">
        <q-card class="my-card"  @click="openDescription" v-ripple>
      <q-card-section>
        <q-btn
          fab
          style="top: 20px;bottom:70px ; right: 12px; transform: translateY(-50%);"/>
          <!-- <div class="logo-container"></div> -->
        <div class="row no-wrap items-center"></div>
        <div class="col text-h6 ellipsis">
          APP 1
        </div>
          <div class="col text-h6 ellipsis">
          Public
          </div>
          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>
        <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          1M+ Downloads
        </div>
        <div class="text-caption text-black">
         this is the app1 description.
      </div>


      </q-card-section>

      <!-- <q-separator /> -->
    </q-card>

      </q-item>
      <q-item>
        <q-card class="my-card" @click="openDescription" v-ripple>
      <q-card-section>
        <q-btn
          fab
          style="top: 20px;bottom:70px ; right: 12px; transform: translateY(-50%);"/>
        <div class="row no-wrap items-center"/>
          <div class="col text-h6 ellipsis">
          APP 2
          </div>
          <div class="col text-h6 ellipsis">
          Public
          </div>
          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>
        <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          1M+ Downloads
        </div>
        <div class="text-caption text-black">
         this is the app2 description.
        </div>
      </q-card-section>
      <q-separator />


    </q-card><br>
      </q-item>
      <q-item>
        <q-card class="my-card" @click="openDescription" v-ripple>
      <q-card-section>
        <q-btn
          fab
          style="top: 20px;bottom:70px ; right: 12px; transform: translateY(-50%);"
        />
        <div class="row no-wrap items-center"/>
          <div class="col text-h6 ellipsis">
          APP 3
          </div>
          <div class="col text-h6 ellipsis">
          Public
          </div>
          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>
        <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          1M+ Downloads
        </div>
        <div class="text-caption text-black">
         this is the app3 description.
        </div>
      </q-card-section>
      <q-separator />


    </q-card><br>
      </q-item>
      <q-item>
        <q-card class="my-card" @click="openDescription" v-ripple>
      <q-card-section>
        <q-btn
          fab
          style="top: 20px;bottom:70px ; right: 12px; transform: translateY(-50%);"
        />
        <div class="row no-wrap items-center"/>
          <div class="col text-h6 ellipsis">
          APP 4
          </div>
          <div class="col text-h6 ellipsis">
          Public
          </div>
          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>
        <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          1M+ Downloads
        </div>
        <div class="text-caption text-black">
         this is the app4 description.
        </div>
      </q-card-section>
      <q-separator />


    </q-card>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import MainLayout from 'src/layouts/MainLayout.vue';
import IndexPage from 'src/pages/IndexPage.vue';
import { ref } from 'vue'

export default {
    isGridView: true,
    isListView: true,

    methods: {
      openGrid(){
        this.$router.push('/')
      },
      openDescription() {
			this.$router.push('/description')
		},
    switchView: function() {

                this.isGridView = !this.isGridView;

                  },

                  switchData: function () {

                      this.isListView = !this.isListView;
                  }
    },
  setup () {
    return {
      stars: ref(3),

    }
  }
};

</script>
