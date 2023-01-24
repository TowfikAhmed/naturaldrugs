<template>
<section v-if="funds">

  <div class="mb-5 cardgrid stagger">
    <div class="card card-flush animate__animated animate__faster animate__backInUp" v-for="fund in funds.cm" :key="fund.id">
      <!--begin::Header-->
      <div class="card-header pt-5 p-4">
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex flex-col">
          <span class="card-label fw-bold text-dark">{{fund.name}}</span>
          <span class="text-gray-400 mt-1 fw-semibold fs-7"
            >Company Management - {{fund.percentage}}% on {{fund.calculate_on}}</span
          >
        </h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">
          <!--begin::Menu-->
          <button
            class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/static/dashboard/media/icons/duotune/general/gen023.svg" />
            </span>
          </button>
          <div class="py-3 menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold w-200px" data-kt-menu="true" >
            <!--begin::Menu separator-->
            <div class="menu-item px-3">
              <a class="menu-link px-3" @click="transferMode=true"> Tranfer Fund </a>
            </div>
          </div>

          <!--end::Menu-->
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body pt-0 p-4">
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Cash In: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-success me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr065.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.cash_in}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
        <div class="separator separator-dashed my-3"></div>
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Expense: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-danger me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr066.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.expense}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
        <div class="separator separator-dashed my-3"></div>
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Recieved: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-success me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr093.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.recieved}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
        <div class="separator separator-dashed my-3"></div>
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Transferred: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-danger me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr094.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.transferred}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
        <div class="separator separator-dashed my-3"></div>
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Reserve: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-danger me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/finance/fin010.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.reserve}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
      </div>
      <!--end::Body-->
    </div>
  </div>

  <div class="separator separator-dashed my-8"></div>

  <div class="mb-5 cardgrid">
    <div class="card card-flush" v-for="fund in funds.pm" :key="fund.id">
      <!--begin::Header-->
      <div class="card-header pt-5 p-4">
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex flex-col">
          <span class="card-label fw-bold text-dark">{{fund.name}}</span>
          <span class="text-gray-400 mt-1 fw-semibold fs-6"
            >Company Management - {{fund.percentage}}% on {{fund.calculate_on}}</span
          >
        </h3>
        <!--end::Title-->

        <!--begin::Toolbar-->
        <div class="card-toolbar">
          <!--begin::Menu-->
          <button
            class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-overflow="true"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/static/dashboard/media/icons/duotune/general/gen023.svg" />
            </span>
          </button>
          <div class="py-3 menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold w-200px" data-kt-menu="true" >
            <!--begin::Menu separator-->
            <div class="menu-item px-3">
              <a class="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_transfer"> Tranfer Fund </a>
            </div>
            <!-- <div class="separator mb-3 opacity-75"></div> -->
          </div>

          <!--end::Menu-->
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body pt-0 p-4">
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Cash In: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-success me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr065.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.cash_in}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
        <div class="separator separator-dashed my-3"></div>
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Expense: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-danger me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr066.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.expense}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
        <div class="separator separator-dashed my-3"></div>
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Recieved: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-success me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr093.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.recieved}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
        <div class="separator separator-dashed my-3"></div>
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Transferred: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-danger me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/arrows/arr094.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.transferred}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
        <div class="separator separator-dashed my-3"></div>
        <!--begin::Item-->
        <div class="flex justify-between items-center">
          <div class="text-gray-700 fw-semibold fs-6 me-2">
            Reserve: 
          </div>
          <div class="flex align-items-senter">
            <span class="svg-icon svg-icon-2 svg-icon-danger me-2">
              <inline-svg src="/static/dashboard/media/icons/duotune/finance/fin010.svg" />
            </span>
            <span class="text-gray-900 fw-bolder fs-6">
              {{fund.reserve}}
            </span>
            <span class="svg-icon svg-icon-2 svg-icon-success ms-4 cursor-pointer" @click="showTransaction(fund.id, 'cash_in')" data-bs-toggle="modal" data-bs-target="#kt_modal_transaction_viewer">
              <inline-svg src="/static/dashboard/media/icons/duotune/abstract/abs015.svg" />
            </span>
          </div>
        </div>
        <!--end::Item-->
      </div>
      <!--end::Body-->
    </div>
  </div>


  <div class="modal fade" tabindex="-1" id="kt_modal_transaction_viewer">
    <div class="modal-dialog min-w-800px w-full">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Transactions</h5>

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
          <p>No Transactions found.</p>
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
  <div class="modal fade" tabindex="-1" id="kt_modal_transfer">
    <div class="modal-dialog min-w-600px w-full">
      <div class="modal-content p-8">
        <div class="modal-header">
          <h5 class="modal-title">Transfer</h5>

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
        <div class="my-10">
          <label for="exampleFormControlInput1" class="required form-label">Transfer To</label>
          <select class="form-select" aria-label="Select example">
            <option>Select fund</option>
            <option :value="fund.id" v-for="fund in funds.cm" :key="fund.id">{{fund.name}}</option>
          </select>
        </div>
        <div class="mb-10">
          <label for="exampleFormControlInput1" class="required form-label">Amount</label>
          <input type="text" class="form-control" placeholder="Amount"/>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Transfer
          </button>
        </div>
      </div>
    </div>
  </div>


</section>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            funds: "",
        };
    },
    mounted() {
        axios.get('/api/admin/fundlist/').then((response) => {
            console.log(response.data);
            this.funds = response.data;
        });
    },
    methods: {
        showTransaction(id, type) {
            console.log(id, type);
        },
    },
}
</script>

<style scoped>
.cardgrid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}
.card{
    min-width: 185px;
    max-width: 220px;
    flex: 1;
    font-size: 14px;
    position: relative;
}
.card-title{
    font-size: 14px;
}
.menu-item{
    position: absolute;
    top: 0;
    right: 0;
    white-space: nowrap;
    background: rgb(190, 190, 190);
    padding: 2px 5px;
    border-radius: 5px;
}
.card.card-flush{
  min-width: 295px;
  max-width: 320px;
  flex: 1;
}
.card-header{
  position: relative;
}
.card-toolbar{
  position: absolute;
  right: 10px;
  top: 12px;
}
.card-toolbar:hover .menu-sub-dropdown{
  display: block !important;
  position: absolute;
  top: 100%;
  right: 5px;
}
</style>
