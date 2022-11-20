<template>
<section>

  <!--begin::Tables Widget 10-->
  <div class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">New members</span>

        <span class="text-muted mt-1 fw-semobold fs-7"
          >Over 500 new members</span
        >
      </h3>
      <div class="card-toolbar">
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
          v-if="members"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="border-0">
              <th class="p-0"></th>
              <th class="p-0 min-w-150px"></th>
              <th class="p-0 min-w-200px"></th>
              <th class="p-0 min-w-150px"></th>
              <th class="p-0 min-w-100px text-end"></th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody class="stagger">
            <tr class="animate__animated animate__faster animate__backInUp" :id="'id-'+item.id" v-for="item in members.results" :key="item.id">
              <td>
                <div class="d-flex align-items-center">
                  <!--begin::Avatar-->
                  <div class="symbol symbol-45px me-5">
                    <div>
                      <div class="carousel-inner pt-0">
                        <img class="carousel-item active w-50px h-50px" :src="baseUrl+item.image" alt="" v-if="item.image">
                        <img class="carousel-item active w-50px h-50px" src="/static/dashboard/media/avatars/male.jpg" alt="" v-else-if="item.gender == 'FEMALE'">
                        <img class="carousel-item active w-50px h-50px" src="/static/dashboard/media/avatars/female.jpg" alt="" v-else>
                      </div>
                    </div>
                  </div>
                  <!--end::Avatar-->

                  <!--begin::Name-->
                  <div class="d-flex justify-content-start flex-column">
                    <a
                      href="#"
                      class="text-dark fw-bold text-hover-primary mb-1 fs-6 text-capitalize"
                      >Name: {{ item.name }} | UID: {{item.username}}</a
                    >

                    <a
                      href="#"
                      class="text-muted text-hover-primary fw-semobold text-muted d-block fs-7"
                    >
                      <span class="text-dark">Joined on</span>:
                      {{ item.created_at }}
                    </a>
                  </div>
                  <!--end::Name-->
                </div>
              </td>

              <td class="text-end" v-if="item.sponsor_member">
                <a
                  href="#"
                  class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                  >Sponsor: {{ item.sponsor_member.name }}</a
                >
                <span class="text-muted fw-semobold text-muted d-block fs-7"
                  >UID: {{ item.sponsor_member.username }}</span
                >
              </td>

              <td class="text-muted fw-semobold text-end">
                <div href="">Current balance: {{ item.current_balance }}</div>
                <div href="">Total Earned: {{ item.total_earned }}</div>
              </td>

              <td class="text-end">
                <span
                  :class="`badge-light-${item.color}`"
                  class="badge"
                  >{{ item.label }}</span
                >
              </td>

              <td class="text-end">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_preview"
                  @click="preview = item"
                  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                >
                  <span class="svg-icon svg-icon-3">
                    <inline-svg
                      src="/static/dashboard/media/icons/duotune/general/gen019.svg"
                    />
                  </span>
                </a>

                <a
                  href="#"
                  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                >
                  <span class="svg-icon svg-icon-3">
                    <inline-svg src="/static/dashboard/media/icons/duotune/art/art005.svg" />
                  </span>
                </a>

                <a
                  @click="delMember(item.id)"
                  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                >
                  <span class="svg-icon svg-icon-3">
                    <inline-svg
                      src="/static/dashboard/media/icons/duotune/general/gen027.svg"
                    />
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 10-->

  <div class="modal modal-fullscreen fade" tabindex="-1" id="kt_modal_preview">
    <div class="modal-dialog w-95 mw-700px">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-capitalize">Name: {{preview.name}}</h5>

          <!--begin::Close-->
          <div
            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span class="svg-icon svg-icon-2x"></span>
          </div>
          <!--end::Close-->
        </div>

        <div class="modal-body">
          <p class="p-1"> <b>UID:</b> {{preview.username}}</p>
          <p class="p-1"> <b>Mobile:</b> {{preview.mobile}}</p>
          <p class="p-1"> <b>Email:</b> {{preview.email}}</p>
          <p class="p-1"> <b>Address:</b> {{preview.address}}</p>
          <p class="p-1"> <b>Whatsapp:</b> {{preview.im}}</p>
          <p class="p-1" v-if="preview.sponsor_member"> <b>Sponsor:</b> {{preview.sponsor_member.name}}</p>
          <p class="p-1" v-if="preview.sponsor_member"> <b>Sponsor UID:</b> {{preview.sponsor_member.username}}</p>
          <p class="p-1"> <b>Created at:</b> {{preview.created_at}}</p>
          <p class="p-1"> <b>Updated at:</b> {{preview.updated_at}}</p>
          <p class="p-1"> <b>Current balance:</b> {{preview.current_balance}}</p>
          <p class="p-1"> <b>Total Earned:</b> {{preview.total_earned}}</p>
          <p class="p-1"> <b>Blocked:</b> {{preview.blocked}}</p>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
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
      members: "",
      preview: "",
      baseUrl: baseUrl,
    };
  },
  mounted() {
    this.getMembers();
  },
  methods: {
    getMembers() {
      ApiService.get("members?type=DEALER").then((response) => {
        console.log(response.data);
        this.members = response.data;
      });
    },
    delMember(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete("members?id=" + id).then((response) => {
            document.getElementById("id-" + id)!.classList.add("animate__lightSpeedOutRight");
            setTimeout(() => {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              document.getElementById("id-" + id)!.remove();
            }, 500);
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
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
