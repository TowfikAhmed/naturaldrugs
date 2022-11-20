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
      <div class="form-body">
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i1" class="required form-label">Full Name</label>
            <input type="text" id="i1" class="form-control" placeholder="Example input" v-model="member.name"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid usernamegroup">
            <label for="i1" class="required form-label">Username</label>
            <input type="text" id="i1" class="form-control" placeholder="Example input" v-model="member.username" @keyup="checkUsername"/>
            <div :class="member.usernameAvailable" v-if="member.usernameAvailable == 'yes'">Available</div>
            <div :class="member.usernameAvailable" v-if="member.usernameAvailable == 'no'">Unavailable</div>
            <div :class="member.usernameAvailable" v-if="member.usernameAvailable == 'checking'">checking</div>
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
          <div class="mb-10 min-w-200px flex-row-fluid" v-if="member.sponsorStatus == 'checking'">
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
          <div class="mb-10 min-w-200px flex-row-fluid" v-else-if="member.sponsorStatus == 'error'">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-danger">Sponsor Not Found 
            </button>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-else-if="member.sponsorStatus">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-success">
              {{member.sponsorStatus.name}} 
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
    <div class="form border animate__animated animate__faster animate__fadeInUp p-8 mw-900px mx-auto" v-if="newUserType=='Agent'">
      <div class="title fs-4 mb-6">Add New Agent</div>
      <div class="form-body">
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i1" class="required form-label">Full Name</label>
            <input type="text" id="i1" class="form-control" placeholder="Example input" v-model="agent.name"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid usernamegroup">
            <label for="i1" class="required form-label">Username</label>
            <input type="text" id="i1" class="form-control" placeholder="Example input" v-model="agent.username" @keyup="checkUsername"/>
            <div :class="agent.usernameAvailable" v-if="agent.usernameAvailable == 'yes'">Available</div>
            <div :class="agent.usernameAvailable" v-if="agent.usernameAvailable == 'no'">Unavailable</div>
            <div :class="agent.usernameAvailable" v-if="agent.usernameAvailable == 'checking'">checking</div>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i2" class="required form-label">Gender</label>
            <select class="form-select" aria-label="Select example" id="i2" v-model="agent.gender">
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i3" class="required form-label">Mobile</label>
            <input type="text" id="i3" class="form-control" placeholder="Example input" v-model="agent.mobile"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i4" class="required form-label">Email</label>
            <input type="text" id="i4" class="form-control" placeholder="Example input" v-model="agent.email"/>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i5" class="required form-label">Address</label>
            <input type="text" id="i5" class="form-control" placeholder="Example input" v-model="agent.address"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i6" class="required form-label">Whatsapp</label>
            <input type="text" id="i6" class="form-control" placeholder="Example input" v-model="agent.im"/>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i5" class="required form-label">Sponsor Username</label>
            <input type="text" id="i5" class="form-control" placeholder="Example input" @keyup="sponsorCheck" v-model="agent.sponsor"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-if="agent.sponsorStatus == 'checking'">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-primary" data-kt-indicator="on">
              <span class="indicator-label"> Submit </span>
              <span class="indicator-progress">
                {{agent.sponsorStatus}}...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-else-if="agent.sponsorStatus == 'error'">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-danger">Sponsor Not Found 
            </button>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-else-if="agent.sponsorStatus">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-success">
              {{agent.sponsorStatus.name}} 
            </button>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i7" class="required form-label">Password</label>
            <input type="text" id="i7" class="form-control" placeholder="Example input" v-model="agent.passwd"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i8" class="required form-label">Confirm Password</label>
            <input type="text" id="i8" class="form-control" placeholder="Example input" v-model="agent.passwd2"/>
          </div>
        </div>
      </div>
      <div class="form-bottom">
        <div class="buttons d-flex gap-3">
          <button class="btn btn-primary" @click="addUser">Add agent</button>
          <button class="btn btn-danger" @click="closeForm">Cancel</button>
        </div>
        <p class="my-2 text-danger" v-if="error">{{error}}</p>
      </div>
    </div>
    <div class="form border animate__animated animate__faster animate__fadeInUp p-8 mw-900px mx-auto" v-if="newUserType=='Dealer'">
      <div class="title fs-4 mb-6">Add New Dealer</div>
      <div class="form-body">
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i1" class="required form-label">Full Name</label>
            <input type="text" id="i1" class="form-control" placeholder="Example input" v-model="dealer.name"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid usernamegroup">
            <label for="i1" class="required form-label">Username</label>
            <input type="text" id="i1" class="form-control" placeholder="Example input" v-model="dealer.username" @keyup="checkUsername"/>
            <div :class="dealer.usernameAvailable" v-if="dealer.usernameAvailable == 'yes'">Available</div>
            <div :class="dealer.usernameAvailable" v-if="dealer.usernameAvailable == 'no'">Unavailable</div>
            <div :class="dealer.usernameAvailable" v-if="dealer.usernameAvailable == 'checking'">checking</div>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i2" class="required form-label">Gender</label>
            <select class="form-select" aria-label="Select example" id="i2" v-model="dealer.gender">
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i3" class="required form-label">Mobile</label>
            <input type="text" id="i3" class="form-control" placeholder="Example input" v-model="dealer.mobile"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i4" class="required form-label">Email</label>
            <input type="text" id="i4" class="form-control" placeholder="Example input" v-model="dealer.email"/>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i5" class="required form-label">Address</label>
            <input type="text" id="i5" class="form-control" placeholder="Example input" v-model="dealer.address"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i6" class="required form-label">Whatsapp</label>
            <input type="text" id="i6" class="form-control" placeholder="Example input" v-model="dealer.im"/>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i5" class="required form-label">Sponsor Username</label>
            <input type="text" id="i5" class="form-control" placeholder="Example input" @keyup="sponsorCheck" v-model="dealer.sponsor"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-if="dealer.sponsorStatus == 'checking'">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-primary" data-kt-indicator="on">
              <span class="indicator-label"> Submit </span>
              <span class="indicator-progress">
                {{dealer.sponsorStatus}}...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-else-if="dealer.sponsorStatus == 'error'">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-danger">Sponsor Not Found 
            </button>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-else-if="dealer.sponsorStatus">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-success">
              {{dealer.sponsorStatus.name}} 
            </button>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i7" class="required form-label">Password</label>
            <input type="text" id="i7" class="form-control" placeholder="Example input" v-model="dealer.passwd"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i8" class="required form-label">Confirm Password</label>
            <input type="text" id="i8" class="form-control" placeholder="Example input" v-model="dealer.passwd2"/>
          </div>
        </div>
      </div>
      <div class="form-bottom">
        <div class="buttons d-flex gap-3">
          <button class="btn btn-primary" @click="addUser">Add Dealer</button>
          <button class="btn btn-danger" @click="closeForm">Cancel</button>
        </div>
        <p class="my-2 text-danger" v-if="error">{{error}}</p>
      </div>
    </div>
    <div class="form border animate__animated animate__faster animate__fadeInUp p-8 mw-900px mx-auto" v-if="newUserType=='Depot'">
      <div class="title fs-4 mb-6">Add New Depot</div>
      <div class="form-body">
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i1" class="required form-label">Full Name</label>
            <input type="text" id="i1" class="form-control" placeholder="Example input" v-model="depot.name"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid usernamegroup">
            <label for="i1" class="required form-label">Username</label>
            <input type="text" id="i1" class="form-control" placeholder="Example input" v-model="depot.username" @keyup="checkUsername"/>
            <div :class="depot.usernameAvailable" v-if="depot.usernameAvailable == 'yes'">Available</div>
            <div :class="depot.usernameAvailable" v-if="depot.usernameAvailable == 'no'">Unavailable</div>
            <div :class="depot.usernameAvailable" v-if="depot.usernameAvailable == 'checking'">checking</div>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i2" class="required form-label">Gender</label>
            <select class="form-select" aria-label="Select example" id="i2" v-model="depot.gender">
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i3" class="required form-label">Mobile</label>
            <input type="text" id="i3" class="form-control" placeholder="Example input" v-model="depot.mobile"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i4" class="required form-label">Email</label>
            <input type="text" id="i4" class="form-control" placeholder="Example input" v-model="depot.email"/>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i5" class="required form-label">Address</label>
            <input type="text" id="i5" class="form-control" placeholder="Example input" v-model="depot.address"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i6" class="required form-label">Whatsapp</label>
            <input type="text" id="i6" class="form-control" placeholder="Example input" v-model="depot.im"/>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i5" class="required form-label">Sponsor Username</label>
            <input type="text" id="i5" class="form-control" placeholder="Example input" @keyup="sponsorCheck" v-model="depot.sponsor"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-if="depot.sponsorStatus == 'checking'">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-primary" data-kt-indicator="on">
              <span class="indicator-label"> Submit </span>
              <span class="indicator-progress">
                {{depot.sponsorStatus}}...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-else-if="depot.sponsorStatus == 'error'">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-danger">Sponsor Not Found 
            </button>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid" v-else-if="depot.sponsorStatus">
            <label for="i5" class=" form-label" style="opacity:0">..</label> <br>
            <button type="button" class="btn btn-success">
              {{depot.sponsorStatus.name}} 
            </button>
          </div>
        </div>
        <div class="d-flex flex-wrap gap-1">
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i7" class="required form-label">Password</label>
            <input type="text" id="i7" class="form-control" placeholder="Example input" v-model="depot.passwd"/>
          </div>
          <div class="mb-10 min-w-200px flex-row-fluid">
            <label for="i8" class="required form-label">Confirm Password</label>
            <input type="text" id="i8" class="form-control" placeholder="Example input" v-model="depot.passwd2"/>
          </div>
        </div>
      </div>
      <div class="form-bottom">
        <div class="buttons d-flex gap-3">
          <button class="btn btn-primary" @click="addUser">Add depot</button>
          <button class="btn btn-danger" @click="closeForm">Cancel</button>
        </div>
        <p class="my-2 text-danger" v-if="error">{{error}}</p>
      </div>
    </div>
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
        username: "",
        usernameAvailable:  "",
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
        username: "",
        usernameAvailable:  "",
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
        username: "",
        usernameAvailable:  "",
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
        username: "",
        usernameAvailable:  "",
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
      this.error = "";
      if( data.name == ''){
        this.error = "Name is required";
        return;
      }
      if( data.username == ''){
        this.error = "Username is required";
        return;
      }
      if (data.usernameAvailable != "yes"){
        this.error = "Username is not available";
        return;
      }
      if( data.mobile == ''){
        this.error = "Mobile is required";
        return;
      }
      if( data.email == ''){
        this.error = "Email is required";
        return;
      }
      if( data.address == ''){
        this.error = "Address is required";
        return;
      }
      if( data.sponsorStatus == '' || data.sponsorStatus == 'error' || data.sponsorStatus == 'checking'){
        this.error = "Valid Sponsor is required";
        return;
      }
      if( data.passwd == ''){
        this.error = "Password is required";
        return;
      }
      if( data.passwd2 == ''){
        this.error = "Confirm Password is required";
        return;
      }
      if( data.passwd != data.passwd2){
        this.error = "Password and Confirm Password must be same";
        return;
      }
      ApiService.post("members", {
        data : {
          info: data,
          type: this.newUserType,
        }
      })
        .then((res) => {
          console.log(res);
          Swal.fire({
              title: "Success",
              text: "Member Added Successfully",
              icon: "success",
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                this.closeForm();
              }
            });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Error",
            text: "Something went wrong",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    },
    checkUsername: function(){
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
      data.usernameAvailable = "checking";
      if (data.username == ""){
        data.usernameAvailable = "";
        return;
      }
      ApiService.get("/check-username?username="+data.username)
        .then((res) => {
          data.usernameAvailable = "no";
        })
        .catch((err) => {
          console.log(err);
          data.usernameAvailable = "yes";
        });
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
      if (data.sponsor.length > 1){
        data.sponsorStatus = "checking";
        ApiService.setHeader();
        ApiService.get("/check-user?username="+ data.sponsor).then((res: any) => {
          console.log(res);
          data.sponsorStatus = res.data;
        })
        .catch((err: any) => {
          console.log(err);
          data.sponsorStatus = "error";
        });
      }
    },
    closeForm: function () {
      this.newUserType = "";
      this.error = "";
      this.member = {
        name: "",
        username: "",
        usernameAvailable:  "",
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
        username: "",
        usernameAvailable:  "",
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
        username: "",
        usernameAvailable:  "",
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
        username: "",
        usernameAvailable:  "",
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
.usernamegroup{
  position: relative;
}
.usernamegroup .yes, .usernamegroup .no, .usernamegroup .checking{
  position: absolute;
  right: 10px;
  top: 38px;
}
.usernamegroup .yes{
  color: green;
}
.usernamegroup .no{
  color: red;
}
.usernamegroup .checking{
  color: #000000;
}
</style>
