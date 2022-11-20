<template>
<section>

  <!--begin::Tables Widget 10-->
  <div class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">All Products</span>

        <span class="text-muted mt-1 fw-semobold fs-7"
          >Add products to cart</span
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
          <tbody class="stagger">
            <template v-for="item in products.results" :key="item.id">
              <tr class="animate__animated animate__faster animate__backInUp" :id="'id-'+item.id">
                <td>
                  <div class="d-flex align-items-center">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-45px me-5">
                      <div
                        id="kt_carousel_1_carousel"
                        class="carousel carousel-custom slide w-50px"
                        data-bs-ride="carousel"
                        data-bs-interval="1500"
                        v-if="item.productimage_set.length"
                      >
                        <div class="carousel-inner pt-0">
                          <img class="carousel-item active w-50px h-50px" :src="baseUrl+img.thumbnail" alt="" v-for="img in item.productimage_set" :key="img">
                        </div>
                      </div>
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
                    >In-stock: {{ item.stock }}</span
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
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_preview"
                    @click="preview = item"
                    class="btn btn-icon btn-info px-6 btn-active-color-primary btn-sm me-1"
                  >
                    View
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-info px-6 btn-active-color-primary btn-sm me-1"
                  >
                    Cart
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
            <input type="email" id="producttitle" class="form-control" placeholder="" v-model="newProduct.title"/>
          </div>
          <div class="mb-10">
            <label for="productDesc" class="required form-label">Product Description</label>
            <textarea class="form-control" id="productDesc" rows="3" v-model="newProduct.description"></textarea>
          </div>
          <div class="d-flex gap-2">
            <div class="mb-10 flex-1" v-if="categories">
              <label for="productCategory" class="required form-label">Category </label>
              <select class="form-select" id="productCategory" @change="catChanged" v-model="newProduct.category">
                <option value="">Select Category</option>
                <option v-for="category in categories" :value="category.name" :key="category.id">{{ category.name }}</option>
              </select>
            </div>
            <div class="mb-10 flex-1">
              <label for="productType" class="required form-label">Type</label>
              <select class="form-select" id="productType" v-model="newProduct.type">
                <option value="Medical">Medical</option>
                <option value="Non-Medical">Non-Medical</option>
              </select>
            </div>
          </div>
          <div class="d-flex gap-2">
            <div class="mb-10 flex-1">
              <label for="productTradePrice" class="required form-label">Trade Price</label>
              <input type="number" id="productTradePrice" class="form-control" placeholder="" v-model="newProduct.trade_price"/>
            </div>
            <div class="mb-10 flex-1">
              <label for="productMRP" class="required form-label">MRP</label>
              <input type="number" id="productMRP" class="form-control" placeholder="" v-model="newProduct.mrp"/>
            </div>
          </div>
          <div class="d-flex gap-2">
            <div class="mb-10 flex-1">
              <label for="productCode" class="required form-label">Code</label>
              <input type="email" id="productCode" class="form-control" placeholder="" v-model="newProduct.code"/>
            </div>
            <div class="mb-10 flex-1">
              <label for="productPoints" class="required form-label">Points</label>
              <input type="number" step="2" id="productPoints" class="form-control" placeholder="" v-model="newProduct.point"/>
            </div>
          </div>
          <label for="productTradePrice" class="required form-label">Product Images</label>
          <div class="mb-10 images">
            <div v-for="image in newProduct.imagelist" :key="image" class="image animate__animated animate__faster animate__lightSpeedInRight">
              <img :src="image" alt="" />
              <span class="remove" @click="removeImage(image)">X</span>
            </div>
            <div class="adder">
              <inline-svg
                src="/static/dashboard/media/icons/duotune/general/gen006.svg" class="imageicon" height="50px" width="50px"
              />
              <input type="file" id="productImage" class="form-control" @change="imageAdded($event)" placeholder=""/>
            </div>
          </div>

          <div class="customfunding" v-if="funds">
            <label for="productTradePrice" class="required form-label">Custom Fund Management</label>
            <div class="d-flex gap-5 p-4 bg-secondary animate__animated animate__faster animate__lightSpeedInRight" v-for="cf in newProduct.customfunds" :key="cf">
              <b>{{cf.name}}</b>
              <span>-</span>
              <span>{{cf.percentage}}%</span>
              <button class="badge badge-danger border-0" @click="removeFund(cf)">x</button>
            </div>
            <div class="adder d-flex gap-1 my-3">
              <select name="" id="" class="form-select mw-325px" v-model="customfundname">
                <option value="">Select Fund</option>
                <option :value="fn.name" v-for="fn in funds.cm" :key="fn.id">CM - {{fn.name}} ({{fn.percentage}}%)</option>
                <option :value="fn.name" v-for="fn in funds.pm" :key="fn.id">PM - {{fn.name}} ({{fn.percentage}}%)</option>
              </select>
              <input type="number" class="form-control mw-100px" placeholder="%" v-model="customFundPer" />
              <button class="btn btn-primary" @click="setCustomFund">Set</button>
            </div>
          </div>

          <div class="specifications">
            <label for="productTradePrice" class="required form-label">Product Specifications</label>
            <div class="d-flex gap-5 p-4 bg-secondary animate__animated animate__faster animate__lightSpeedInRight" v-for="sp in newProduct.specifications" :key="sp">
              <b>{{sp.name}}</b>
              <span>:</span>
              <span>{{sp.value}}</span>
              <button class="badge badge-danger border-0" @click="removeSpec(sp)">x</button>
            </div>
            <div class="adder d-flex gap-1 my-3">
              <input type="text" class="form-control mw-325px" placeholder="Name" v-model="specname" />
              <input type="text" class="form-control mw-325px" placeholder="Value" v-model="specvalue" />
              <button class="btn btn-primary" @click="addSpec">Set</button>
            </div>
          </div>

        </div>

        <p class="text-danger text-center px-7 fs-4 animate__animated animate__faster animate__backInUp" v-if="newProduct.error">{{newProduct.error}}</p>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="submitProduct">
            Submit Product
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal modal-fullscreen fade" tabindex="-1" id="kt_modal_preview">
    <div class="modal-dialog w-95 mw-900px">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-capitalize">Name: {{preview.title}}</h5>

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
          <p class="p-1 mb-0"> <b>Product Images:</b></p>
          <div class="images">
            <div v-for="image in preview.productimage_set" :key="image.id" class="image">
              <img :src="baseUrl+image.thumbnail" alt="" />
            </div>
          </div>
          <p class="p-1"> <b>Description:</b> {{preview.description}}</p>
          <p class="p-1"> <b>Trade Price:</b> {{preview.trade_price}}</p>
          <p class="p-1"> <b>M.R.P:</b> {{preview.mrp}}</p>
          <p class="p-1"> <b>Points:</b> {{preview.points}}</p>
          <p class="p-1"> <b>Code:</b> {{preview.code}}</p>
          <p class="p-1"> <b>Category:</b> {{preview.category}}</p>
          <p class="p-1"> <b>Brand:</b> {{preview.brand}}</p>
          <p class="p-1"> <b>Type:</b> {{preview.type}}</p>
          <p class="p-1"> <b>Stock:</b> {{preview.stock}}</p>
          <p class="p-1"> <b>Date Added:</b> {{preview.date}}</p>
          <p class="p-1"> <b>Specifications:</b></p>
          <div class="d-flex gap-5 p-4 bg-secondary" v-for="sp in preview.specifications" :key="sp">
            <b>{{sp.name}}</b>
            <span>:</span>
            <span>{{sp.value}}</span>
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
      products: "",
      categories: "",
      funds: "",
      customfundname: "",
      customFundPer: "",
      specname: "",
      specvalue: "",
      preview: "",
      baseUrl: baseUrl,
    };
  },
  setup() {
    const newProduct = ref<NewProduct>({
      title: "",
      description: "",
      category: "",
      type: "Medical",
      trade_price: 0,
      mrp: 0,
      code: "",
      point: 0,
      imagelist: [],
      customfunds: [],
      specifications: [],
      error: "",
    });
    return {
      newProduct,
    };
  },
  mounted() {
    this.getProducts();
    this.getCategories();
    this.getFunds();
  },
  methods: {
    getProducts() {
      ApiService.get("productlist/").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    getCategories() {
      ApiService.get("categorylist/").then((response) => {
        console.log(response.data);
        this.categories = response.data;
      });
    },
    catChanged() {
      console.log(this.newProduct.category);
    },
    getFunds() {
      ApiService.get("fundlist/").then((response) => {
        console.log(response.data);
        this.funds = response.data;
      });
    },
    setCustomFund() {
      console.log(this.customfundname, this.customFundPer);
      var data = {
        name: this.customfundname,
        percentage: this.customFundPer,
      }; 
      this.newProduct.customfunds.push({
        name: this.customfundname,
        percentage: this.customFundPer,
      });
      this.customfundname = "";
      this.customFundPer = "";
    },
    removeFund(fund) {
      console.log(fund);
      this.newProduct.customfunds = this.newProduct.customfunds.filter((f) => f != fund);
    },
    addSpec() {
      console.log(this.specname, this.specvalue);
      this.newProduct.specifications.push({
        name: this.specname,
        value: this.specvalue,
      });
      this.specname = "";
      this.specvalue = "";
    },
    removeSpec(spec) {
      console.log(spec);
      this.newProduct.specifications = this.newProduct.specifications.filter((s) => s != spec);
    },
    imageAdded (event: any) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newProduct.imagelist.push(reader.result as string);
      };
      console.log(this.newProduct);
    },
    removeImage (image: string) {
      this.newProduct.imagelist = this.newProduct.imagelist.filter((item) => item !== image);
    },
    submitProduct() {
      if (this.newProduct.title == "") {
        this.newProduct.error = "Title is required";
        return;
      }
      if (this.newProduct.description == "") {
        this.newProduct.error = "Description is required";
        return;
      }
      if (this.newProduct.category == "") {
        this.newProduct.error = "Category is required";
        return;
      }
      if (this.newProduct.imagelist.length == 0) {
        this.newProduct.error = "Atleast one image is required";
        return;
      }
      console.log(this.newProduct);
      ApiService.post("productlist/", {data: this.newProduct}).then((response) => {
        console.log(response.data);
        var modal = document.getElementById("kt_modal_addp");
        hideModal(modal);
        this.newProduct = {
          title: "",
          description: "",
          category: "",
          type: "Medical",
          trade_price: 0,
          mrp: 0,
          code: "",
          point: 0,
          imagelist: [],
          customfunds: [],
          specifications: [],
          error: "",
        };
        this.getProducts();
      });
    },
    delProduct(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete("productlist/?id=" + id + "&r=1").then((response) => {
            document.getElementById("id-" + id)!.classList.add("animate__lightSpeedOutRight");
            setTimeout(() => {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              document.getElementById("id-" + id)!.remove();
            }, 500);
          });
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
