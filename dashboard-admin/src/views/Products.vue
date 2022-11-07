<template>
<section>

  <!--begin::Tables Widget 10-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">New Products</span>

        <span class="text-muted mt-1 fw-semobold fs-7"
          >Over 500 new products</span
        >
      </h3>
      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-primary text-wrap-nowrap"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_addp"
        >
          Add Product
        </button>
        <!--end::Menu-->
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
          v-if="products"
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
          <tbody>
            <template v-for="item in products.results" :key="item.id">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-45px me-5">
                      <img
                        v-if="item.thumbnail"
                        alt="Pic"
                        :src="item.thumbnail"
                      />
                      <span
                        v-else
                        :class="`bg-light-${item.state} text-${item.state}`"
                        class="symbol-label fw-bold text-capitalize"
                      >
                        {{ item.title.charAt(0) }}
                      </span>
                    </div>
                    <!--end::Avatar-->

                    <!--begin::Name-->
                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bold text-hover-primary mb-1 fs-6 text-capitalize"
                        >{{ item.title }}</a
                      >

                      <a
                        href="#"
                        class="text-muted text-hover-primary fw-semobold text-muted d-block fs-7"
                      >
                        <span class="text-dark">Date</span>:
                        {{ item.date }}
                      </a>
                    </div>
                    <!--end::Name-->
                  </div>
                </td>

                <td class="text-end">
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                    >Trade Price: {{ item.trade_price }}</a
                  >
                  <span class="text-muted fw-semobold text-muted d-block fs-7"
                    >MRP: {{ item.mrp }}</span
                  >
                </td>

                <td class="text-muted fw-semobold text-end">
                  <div href="">Code: {{ item.code }}</div>
                  <div href="">Points: {{ item.point }}</div>
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
                    href="#"
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
                    href="#"
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
            </template>
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
  <div class="modal fade" tabindex="-1" id="kt_modal_addp">
    <div class="modal-dialog w-full min-w-800px">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add new product</h5>

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
          <div class="mb-10">
            <label for="producttitle" class="required form-label">Product Name</label>
            <input type="email" id="producttitle" class="form-control form-control-solid" placeholder=""/>
          </div>
          <div class="mb-10">
            <label for="productDesc" class="required form-label">Product Description</label>
            <textarea class="form-control form-control-solid" id="productDesc" rows="3"></textarea>
          </div>
          <div class="d-flex gap-2">
            <div class="mb-10 flex-1">
              <label for="productCategory" class="required form-label">Category </label>
              <select class="form-select form-select-solid" id="productCategory">
                <option value="1">Category 1</option>
              </select>
            </div>
            <div class="mb-10 flex-1">
              <label for="productType" class="required form-label">Type</label>
              <select class="form-select form-select-solid" id="productType">
                <option value="Medical">Medical</option>
                <option value="Non-Medical">Non-Medical</option>
              </select>
            </div>
          </div>
          <div class="d-flex gap-2">
            <div class="mb-10 flex-1">
              <label for="productTradePrice" class="required form-label">Trade Price</label>
              <input type="email" id="productTradePrice" class="form-control form-control-solid" placeholder=""/>
            </div>
            <div class="mb-10 flex-1">
              <label for="productMRP" class="required form-label">MRP</label>
              <input type="email" id="productMRP" class="form-control form-control-solid" placeholder=""/>
            </div>
          </div>
          <div class="d-flex gap-2">
            <div class="mb-10 flex-1">
              <label for="productCode" class="required form-label">Code</label>
              <input type="email" id="productCode" class="form-control form-control-solid" placeholder=""/>
            </div>
            <div class="mb-10 flex-1">
              <label for="productPoints" class="required form-label">Points</label>
              <input type="email" id="productPoints" class="form-control form-control-solid" placeholder=""/>
            </div>
          </div>
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
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApiService from "@/core/services/ApiService";
export default defineComponent({
  name: "main-dashboard",
  data() {
    return {
      products: "",
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      ApiService.get("productlist/").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
});
</script>
