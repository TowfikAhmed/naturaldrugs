
<template>
  <!--begin::details View-->
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
      <!--begin: Pic-->
      <div class="me-7 mb-4">
        <div
          class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
        >
          <img src="/static/dashboard/media/avatars/300-1.jpg" alt="image" />
          <div
            class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"
          ></div>
        </div>
      </div>
      <!--end::Pic-->

      <!--begin::Info-->
      <div class="flex-grow-1">
        <!--begin::Title-->
        <div
          class="d-flex justify-content-between align-items-start flex-wrap mb-2"
        >
          <!--begin::User-->
          <div class="d-flex flex-column">
            <!--begin::Name-->
            <div class="d-flex align-items-center mb-2">
              <a
                href="#"
                class="text-gray-800 text-hover-primary fs-2 fw-bold me-1"
                >{{store.state.AuthModule.user.name}}</a
              >
              <a href="#">
                <span class="svg-icon svg-icon-1 svg-icon-primary">
                  <inline-svg src="/static/dashboard/media/icons/duotune/general/gen026.svg" />
                </span>
              </a>

              <a
                href="#"
                class="btn btn-sm btn-light-success fw-bold ms-2 fs-8 py-1 px-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_upgrade_plan"
                >{{store.state.AuthModule.user.type}}</a
              >
            </div>
            <!--end::Name-->

            <!--begin::Info-->
            <div class="d-flex flex-wrap fw-semobold fs-6 mb-4 pe-2">
              <a
                href="#"
                class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
              >
                <span class="svg-icon svg-icon-4 me-1">
                  <inline-svg
                    src="/static/dashboard/media/icons/duotune/communication/com006.svg"
                  />
                </span>
                {{store.state.AuthModule.user.username}}
              </a>
            </div>
            <!--end::Info-->
          </div>
          <!--end::User-->

          <!--begin::Actions-->
          <div class="d-flex my-4">
            <a
              href="#"
              class="btn btn-sm btn-light me-2"
              id="kt_user_follow_button"
            >
              <span class="svg-icon svg-icon-3 d-none">
                <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr012.svg" />
              </span>
              Settings
            </a>

            <!--begin::Menu-->
            <div class="me-0">
              <button
                class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                data-kt-menu-flip="top-end"
              >
                <i class="bi bi-three-dots fs-3"></i>
              </button>
              <Dropdown3></Dropdown3>
            </div>
            <!--end::Menu-->
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Title-->

        <!--begin::Stats-->
        <div class="d-flex flex-wrap flex-stack">
          <!--begin::Wrapper-->
          <div class="d-flex flex-column flex-grow-1 pe-8">
            <!--begin::Stats-->
            <div class="d-flex flex-wrap">
              <!--begin::Stat-->
              <div
                class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
              >
                <!--begin::Number-->
                <div class="d-flex align-items-center">
                  <span class="svg-icon svg-icon-success me-2">
                    <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr066.svg" />
                  </span>
                  <div
                    class="fs-2 fw-bold"
                    data-kt-countup="true"
                    data-kt-countup-value="4500"
                    data-kt-countup-prefix="$"
                  >
                    4500$
                  </div>
                </div>
                <!--end::Number-->

                <!--begin::Label-->
                <div class="fw-semobold fs-6 text-gray-400">Balance</div>
                <!--end::Label-->
              </div>
              <!--end::Stat-->

              <!--begin::Stat-->
              <div
                class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
              >
                <!--begin::Number-->
                <div class="d-flex align-items-center">
                  <span class="svg-icon svg-icon-3 svg-icon-danger me-2">
                    <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr065.svg" />
                  </span>
                  <div
                    class="fs-2 fw-bold"
                    data-kt-countup="true"
                    data-kt-countup-value="75"
                  >
                    75
                  </div>
                </div>
                <!--end::Number-->

                <!--begin::Label-->
                <div class="fw-semobold fs-6 text-gray-400">Products</div>
                <!--end::Label-->
              </div>
              <!--end::Stat-->

              <!--begin::Stat-->
              <div
                class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
              >
                <!--begin::Number-->
                <div class="d-flex align-items-center">
                  <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                    <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr066.svg" />
                  </span>
                  <div
                    class="fs-2 fw-bold"
                    data-kt-countup="true"
                    data-kt-countup-value="60"
                    data-kt-countup-prefix="%"
                  >
                    60%
                  </div>
                </div>
                <!--end::Number-->

                <!--begin::Label-->
                <div class="fw-semobold fs-6 text-gray-400">Rate</div>
                <!--end::Label-->
              </div>
              <!--end::Stat-->
            </div>
            <!--end::Stats-->
          </div>
          <!--end::Wrapper-->

          <!--begin::Progress-->
          <div
            class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3"
          >
            <div class="d-flex justify-content-between w-100 mt-auto mb-2">
              <span class="fw-semobold fs-6 text-gray-400"
                >{{store.state.AuthModule.user.created_at}}</span
              >
              <span class="fw-bold fs-6">50%</span>
            </div>

            <div class="h-5px mx-3 w-100 bg-light mb-3">
              <div
                class="bg-success rounded h-5px"
                role="progressbar"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <!--end::Progress-->
        </div>
        <!--end::Stats-->
      </div>
      <!--end::Info-->
    </div>
    <!--end::Details-->
    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">Full Name</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-dark">{{store.state.AuthModule.user.name}}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">Address</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-semobold fs-6">{{store.state.AuthModule.user.address}}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">
          Contact Phone
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Phone number must be active"
          ></i>
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 d-flex align-items-center">
          <span class="fw-bold fs-6 me-2">{{store.state.AuthModule.user.mobile}}</span>

          <span class="badge badge-success">Verified</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">Email</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <a href="#" class="fw-semobold fs-6 text-dark text-hover-primary"
            >{{store.state.AuthModule.user.email}}</a
          >
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">
          Country
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Country of origination"
          ></i>
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-dark">Germany</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">Communication</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-dark">Email, Phone</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-10">
        <!--begin::Label-->
        <label class="col-lg-4 fw-semobold text-muted">Allow Changes</label>
        <!--begin::Label-->

        <!--begin::Label-->
        <div class="col-lg-8">
          <span class="fw-semobold fs-6">Yes</span>
        </div>
        <!--begin::Label-->
      </div>
      <!--end::Input group-->

      <div
        class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
      >
        <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
          <inline-svg src="/static/dashboard/media/icons/duotune/general/gen044.svg" />
        </span>
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack flex-grow-1">
          <!--begin::Content-->
          <div class="fw-semobold">
            <h4 class="text-gray-800 fw-bold">We need your attention!</h4>

            <div class="fs-6 text-gray-600">
              Your payment was declined. To start using tools, please
              <a class="fw-bold" href="#">Add Payment Method</a>.
            </div>
          </div>
          <!--end::Content-->
        </div>
        <!--end::Wrapper-->
      </div>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::details View-->

  <!--begin::Row-->
  <div class="row gy-10 gx-xl-10">
    <!--begin::Col-->
    <div class="col-xl-6">
      <KTChartWidget1
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></KTChartWidget1>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <KTListWidget1
        widget-classes="card-xxl-stretch mb-5 mb-xl-10'"
      ></KTListWidget1>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row gy-10 gx-xl-10">
    <!--begin::Col-->
    <div class="col-xl-6">
      <KTListWidget5
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></KTListWidget5>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <KTTableWidget5
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></KTTableWidget5>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import KTListWidget5 from "@/components/widgets/lists/Widget5.vue";
import KTTableWidget5 from "@/components/widgets/tables/Widget5.vue";
import KTListWidget1 from "@/components/widgets/lists/Widget1.vue";

export default defineComponent({
  name: "main-dashboard",
  setup() {
    const store = useStore();
    return { store };
  },
  components: {
    KTChartWidget1,
    KTListWidget5,
    KTTableWidget5,
    KTListWidget1,
  },
});
</script>
