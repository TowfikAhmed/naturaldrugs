<template>
  <section>
    <div v-if="newUserType==''" class="select-type mb-10 d-flex gap-3 justify-content-center py-10 border animate__animated animate__faster animate__fadeInUp" style="background-image: url(static/dashboard/media/stock/900x600/42.png);">
      <button class="btn btn-primary" @click="newUserType='Member'">Add Member</button>
      <button class="btn btn-primary" @click="newUserType='Agent'">Add Agent</button>
      <button class="btn btn-primary" @click="newUserType='Dealer'">Add Dealer</button>
      <button class="btn btn-primary" @click="newUserType='Depot'">Add Depot</button>
    </div>
    <div class="form border animate__animated animate__faster animate__fadeInUp p-8 mw-900px mx-auto" v-if="newUserType=='Member'">
      <div class="title fs-4 mb-6">Add New Member</div>
      <!-- "name": "Test 1",
      "gender": "MALE",
      "mobile": null,
      "email": null,
      "address": null,
      "im": null,
      "passwd": null, -->
      <div class="form-body">
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i1" class="required form-label">Name</label>
            <input type="text" id="i1" class="form-control" placeholder="Example input" v-model="member.name"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i2" class="required form-label">Gender</label>
            <select class="form-select" aria-label="Select example" id="i2" v-model="member.gender">
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i3" class="required form-label">Mobile</label>
            <input type="text" id="i3" class="form-control" placeholder="Example input" v-model="member.mobile"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i4" class="required form-label">Email</label>
            <input type="text" id="i4" class="form-control" placeholder="Example input" v-model="member.email"/>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i5" class="required form-label">Address</label>
            <input type="text" id="i5" class="form-control" placeholder="Example input" v-model="member.address"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i6" class="required form-label">Whatsapp</label>
            <input type="text" id="i6" class="form-control" placeholder="Example input" v-model="member.im"/>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i5" class="required form-label">Sponsor Username</label>
            <input type="text" id="i5" class="form-control" placeholder="Example input" @keyup="sponsorCheck" v-model="member.sponsor"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-primary" data-kt-indicator="on">
              <span class="indicator-label"> Submit </span>
              <span class="indicator-progress">
                {{member.sponsorStatus}}...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i7" class="required form-label">Password</label>
            <input type="text" id="i7" class="form-control" placeholder="Example input" v-model="member.passwd"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i8" class="required form-label">Confirm Password</label>
            <input type="text" id="i8" class="form-control" placeholder="Example input" v-model="member.passwd2"/>
          </div>
        </div>
      </div>
      <div class="form-bottom">
        <div class="buttons d-flex gap-3">
          <button class="btn btn-primary" @click="addUser">Add Member</button>
          <button class="btn btn-danger" @click="closeForm">Cancel</button>
        </div>
        <p class="my-2 text-danger" v-if="error">{{error}}</p>
      </div>
    </div>
    <div class="form border animate__animated animate__faster animate__fadeInUp p-8 mw-900px mx-auto" v-if="newUserType=='Agent'">agent</div>
    <div class="form border animate__animated animate__faster animate__fadeInUp p-8 mw-900px mx-auto" v-if="newUserType=='Dealer'">dealer</div>
    <div class="form border animate__animated animate__faster animate__fadeInUp p-8 mw-900px mx-auto" v-if="newUserType=='Depot'">depot</div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ApiService, { baseUrl } from "@/core/services/ApiService";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2";
interface NewProduct {
  title: "",
  description: "",
  category: "",
  type: "Medical",
  trade_price: number,
  mrp: number,
  code: "",
  point: number,
  imagelist: string[],
  customfunds: object[],
  specifications: object[],
  error: string,
}
export default defineComponent({
  name: "main-dashboard",
  data() {
    return {
      newUserType: "",
      baseUrl: baseUrl,
      error: "",
      member: {
        name: "",
        gender: "MALE",
        mobile: "",
        email: "",
        address: "",
        im: "",
        passwd: "",
        passwd2: "",
        sponsor: "",
        sponsorStatus: "",
      },
      agent: {
        name: "",
        gender: "MALE",
        mobile: "",
        email: "",
        address: "",
        im: "",
        passwd: "",
        passwd2: "",
        sponsor: "",
        sponsorStatus: "",
      },
      dealer: {
        name: "",
        gender: "MALE",
        mobile: "",
        email: "",
        address: "",
        im: "",
        passwd: "",
        passwd2: "",
        sponsor: "",
        sponsorStatus: "",
      },
      depot: {
        name: "",
        gender: "MALE",
        mobile: "",
        email: "",
        address: "",
        im: "",
        passwd: "",
        passwd2: "",
        sponsor: "",
        sponsorStatus: "",
      },
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    addUser: function(){
      console.log(this.newUserType);
      var data = this.member;
      if (this.newUserType == "Agent"){
        data = this.agent;
      }
      if (this.newUserType == "Dealer"){
        data = this.dealer;
      }
      if (this.newUserType == "Depot"){
        data = this.depot;
      }
      console.log(data);
      if( data.name == ''){
        this.error = "Name is required";
        return;
      }
    },
    sponsorCheck: function(){
      var data = this.member;
      if (this.newUserType == "Agent"){
        data = this.agent;
      }
      if (this.newUserType == "Dealer"){
        data = this.dealer;
      }
      if (this.newUserType == "Depot"){
        data = this.depot;
      }
      console.log(data.sponsor);
    },
    closeForm: function () {
      this.newUserType = "";
      this.error = "";
      this.member = {
        name: "",
        gender: "MALE",
        mobile: "",
        email: "",
        address: "",
        im: "",
        passwd: "",
        passwd2: "",
        sponsor: "",
        sponsorStatus: "",
      };
      this.agent = {
        name: "",
        gender: "MALE",
        mobile: "",
        email: "",
        address: "",
        im: "",
        passwd: "",
        passwd2: "",
        sponsor: "",
        sponsorStatus: "",
      };
      this.dealer = {
        name: "",
        gender: "MALE",
        mobile: "",
        email: "",
        address: "",
        im: "",
        passwd: "",
        passwd2: "",
        sponsor: "",
        sponsorStatus: "",
      };
      this.depot = {
        name: "",
        gender: "MALE",
        mobile: "",
        email: "",
        address: "",
        im: "",
        passwd: "",
        passwd2: "",
        sponsor: "",
        sponsorStatus: "",
      }
    },
  },
});
</script>

<style scoped>
.images {
  display: flex;
  flex-wrap: wrap;
}
.images > * {
  width: 130px;
  height: 130px;
  margin: 5px;
  border-radius: 8px;
  position: relative;
  background: #f8e5e5bb;
  box-shadow: 1px 1px 5px #00000033;
}
.images input{
  width: 130px;
  height: 130px;
  border-radius: 8px;
}
.images img{
  width: 130px;
  height: 130px;
  border-radius: 8px;
}
.images .remove{
  position: absolute;
  top: -10px;
  right: -10px;
  background: #f8e5e5f6;
  color: #000000;
  height: 30px;
  width: 30px;
  padding: 3px 7px;
  border-radius: 50%;
  box-shadow: 0 0 15px 0 #fffffff6;
  cursor: pointer;
  border: 3px solid #fffffff6;
}
.images .adder .imageicon{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  height: 50px;
  
}
.images .adder input{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  opacity: 0;
  height: 100%;
  width: 100%;
}
</style>
