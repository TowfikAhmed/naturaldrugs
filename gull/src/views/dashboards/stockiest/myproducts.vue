<template>
    <div class="container mx-auto overflow-x-hidden">
        <breadcrumbs parentTitle="My Products" subParentTitle="Member Registration" />
        <div class="grid grid-cols-12 gap-5 mb-5">
            <div class="col-span-12">
                <div
                    class="flex justify-center items-center flex-wrap lg:justify-between"
                >
                    <div class="mb-2 flex gap-1">
                        <BaseBtn
                            @click="isOpen = !isOpen"
                            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:hidden block"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </BaseBtn>
                        <BaseBtn
                            rounded
                            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                        </BaseBtn>
                        <BaseBtn
                            rounded
                            class="mr-2 border border-primary text-primary hover:bg-primary hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                            </svg>
                        </BaseBtn>
                    </div>
                    <div class="mb-2">
                        <form class="flex">
                            <input
                                class="rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"
                                placeholder="Search..."
                            />
                            <button
                                role="button"
                                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="ul-ecommerce-wrapper relative" v-if="products">
            <div class="ul-ecommerce-container mr-1 animate__animated animate__fadeInLeft" style="margin-left:0" v-if="!checkout">
                <div class="font-medium p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert" v-if="products.results.length < 1">
                    You do not have any products yet. Please order products.
                </div>
                <div class="flex flex-wrap gap-5 mb-5">
                    <div
                        v-for="(item, index) in products.results"
                        :key="index"
                        class="max-w-[250px]"
                    >
                        <BaseCard noPadding class="overflow-hidden relative">
                            <swiper
                                :slides-per-view="1"
                                :space-between="50"
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
                                :autoplay="{
                                    delay: 2000,
                                }"
                                :loop="true"
                              > 
                                <swiper-slide>
                                    <img :src="baseUrl+ item.product.productimage_set[0].image" class="productImage" />
                                </swiper-slide>

                                <swiper-slide>
                                    <img :src="baseUrl+ item.product.productimage_set[1].image" class="productImage" />
                                </swiper-slide>
                            </swiper>
                            <div class="absolute flex items-center gap-0 top-1 left-1 z-50">
                                <div class="bg-orange-400 border-[3px] border-x-orange-300 border-y-orange-200 text-white text-xs font-bold w-[24px] h-[24px] leading-[18px] rounded-full text-center">BP</div>
                                <p class="text-bold drop-shadow-[0px_0px_2px_black] text-white bg-gray-700 rounded left-[60%] z-[-1] px-4 absolute">{{item.product.point}}</p>
                            </div>
                            <p class="font-semibold mb-1 px-3 py-2 bg-gray-200">{{item.product.title}}</p>
                            <div class="p-3">
                                <div class="mb-1">
                                    <a
                                        class="text-gray-600 dark:text-gray-300 flex justify-between"
                                        href="#"
                                        > 
                                            <span> Trade Price: ৳ <span class="font-bold">{{item.product.trade_price}}</span></span>
                                            <span class="text-gray-400 text-sm"> MRP: ৳ {{item.product.mrp}} </span>
                                    </a>
                                </div>
                                <div class="flex justify-between my-2">
                                    <div class="flex">
                                        <svg
                                            v-for="(i, index) in 5"
                                            :key="index"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-bold text-base mb-5 text-green-600" :class="{'text-rose-600':item.stock<1}">Stock: {{item.stock}}</p>
                                </div>
                                <div class="flex justify-between flex-wrap gap-1" v-if="item.incart">
                                    <input type="number" class="rounded border border-gray-300 text-gray-300 hover:text-white mb-2" v-model="item.qty" min="0" :max="item.stock">
                                    <BaseBtn class="animate__animated animate__fadeInUp bg-gray-300 text-white mb-2 flex-1">
                                        <i class="nav-icon i-Checkout text-base mr-2"></i> Added
                                    </BaseBtn>
                                </div>
                                <div class="flex justify-between flex-wrap gap-1" v-else-if="item.stock == 0">
                                    <input type="number" class="rounded border border-gray-300 text-gray-300 hover:text-white mb-2" v-model="item.qty" min="0" :max="item.stock">
                                    <BaseBtn class="animate__animated animate__fadeInUp bg-gray-300 text-white mb-2 flex-1">
                                        Out Of Stock
                                    </BaseBtn>
                                </div>
                                <div class="flex justify-between flex-wrap gap-1" v-else>
                                    <input type="number" class="rounded border border-primary text-primary hover:bg-primary hover:text-white my-.5" @keyup="qtyChanged(item)" v-model="item.qty" min="0" :max="item.stock">
                                    <BaseBtn @click="addToCart(item)" class="animate__animated animate__fadeInUp animate_faster text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 py-2.5 text-center flex-1">
                                        <i class="nav-icon i-Add-Cart text-base mr-2"></i> Add To Cart
                                    </BaseBtn>
                                </div>
                            </div>
                        </BaseCard>
                    </div>
                </div>
            </div>
            <div class="ul-ecommerce-container mr-1 border border-gray-50 rounded animate__animated animate__fadeInLeft" style="margin-left:0" v-else>
              <BaseCard>
                <form class="space-y-8 divide-y divide-gray-200">
                  <div class="space-y-8 divide-y divide-gray-200">
                    <div class="pt-8">
                      <div>
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                      </div>
                      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                          <label for="full-name" class="block text-sm font-medium text-gray-700">Full name</label>
                          <div class="mt-1">
                            <input v-model="newMember.name" :class="{'border-rose-400':!newMember.name && newMember.error}" type="text" name="full-name" id="first-name" autocomplete="full-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          </div>
                        </div>
                        <div class="sm:col-span-3">
                          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                          <div class="mt-1 relative">
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-green-600" v-if="newMember.usernameValid">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-rose-400" v-else>
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p class="text-sm text-green-600" v-if="newMember.usernameValid">Valid</p>
                                <p class="text-sm text-rose-400" v-else>Invalid</p>
                            </div>
                            <input @keyup="checkUsername" v-model="newMember.username" :class="{'border-rose-400':!newMember.username && newMember.error || newMember.usernameValid == false}" type="text" name="username" id="last-name" autocomplete="user-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          </div>
                        </div>

                        <div class="sm:col-span-3">
                          <label for="first-name" class="block text-sm font-medium text-gray-700">Email</label>
                          <div class="mt-1">
                            <input v-model="newMember.email" :class="{'border-rose-400':!newMember.email && newMember.error}" type="email" name="email" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          </div>
                        </div>
                        <div class="sm:col-span-3">
                          <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                          <div class="mt-1">
                            <input v-model="newMember.phone" :class="{'border-rose-400':!newMember.phone && newMember.error}" id="phone" name="phone" type="text" autocomplete="phone" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          </div>
                        </div>

                        <div class="sm:col-span-3">
                          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                          <div class="mt-1">
                            <input v-model="newMember.passwd" :class="{'border-rose-400':!newMember.passwd && newMember.error}" type="password" name="first-name" id="" autocomplete="password" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          </div>
                        </div>
                        <div class="sm:col-span-3">
                          <label for="password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                          <div class="mt-1">
                            <input v-model="newMember.passwd2" :class="{'border-rose-400':!newMember.passwd2 && newMember.error}" type="password" name="password" id="last-name" autocomplete="password" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          </div>
                        </div>

                      </div>
                    </div>

                    <div class="pt-8">
                      <div>
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
                      </div>
                      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                          <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
                          <div class="mt-1">
                            <select  v-model="newMember.gender" :class="{'border-rose-400':!newMember.gender && newMember.error}" id="gender" name="gender" autocomplete="gender-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option class="male">Male</option>
                                <option class="female">Female</option>
                            </select>
                          </div>
                        </div>
                        <div class="sm:col-span-6">
                          <label for="photo" class="block text-sm font-medium text-gray-700">Profile Photo</label>
                          <div class="mt-1 flex items-center">
                            <span class="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                              <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24" v-if="newMember.gender == 'Male'">
                                <path d="M12.2504 17.1284C9.01581 17.1284 6.38019 13.8745 6.13363 10.9966C5.40599 10.8066 4.75037 10.2488 4.75037 9.54949V7.52845C4.75037 6.89686 5.41036 6.44113 5.84129 6.21073V4.49687C5.84129 2.58092 7.49401 1.01662 9.54711 0.962054C9.98566 0.799367 11.7137 0.202148 13.4777 0.202148C16.2922 0.202148 17.8413 1.72805 17.8413 4.49687V6.05712C18.9322 6.25417 18.9322 7.06561 18.9322 7.52845V9.54949C18.9322 10.2528 18.5875 10.7773 18.0311 10.9763C17.8217 13.9625 15.4184 17.1284 12.2504 17.1284H12.2504ZM13.4776 1.21266C11.7082 1.21266 9.89183 1.92205 9.87436 1.93012C9.80673 1.95639 9.73364 1.97055 9.65946 1.97055C8.15618 1.97055 6.93218 3.10334 6.93218 4.49687V6.51792C6.93218 6.71599 6.80564 6.89686 6.61035 6.97872C6.222 7.1414 5.862 7.42031 5.84016 7.53248L5.84126 9.54949C5.84126 9.77182 6.29944 10.0548 6.65944 10.0548C6.96053 10.0548 7.20489 10.2811 7.20489 10.56C7.20489 13.0621 9.5329 16.1179 12.2503 16.1179C14.9012 16.1179 16.9554 13.1298 16.9554 10.56C16.9554 10.2811 17.2009 10.0548 17.5009 10.0548C17.7289 10.0548 17.8423 9.88498 17.8423 9.54949V7.52845C17.8423 7.0232 17.8423 7.0232 17.2969 7.0232C16.9958 7.0232 16.7514 6.79685 16.7514 6.51794V4.4969C16.7503 2.28688 15.6813 1.21268 13.4776 1.21268L13.4776 1.21266ZM0.932165 24.2021C0.631074 24.2021 0.386719 23.9758 0.386719 23.6969V22.6863C0.386719 19.7598 2.90999 17.6337 6.38673 17.6337H7.73182L9.18382 15.6268C9.3529 15.3954 9.68999 15.3327 9.94092 15.4884C10.1907 15.643 10.2584 15.9573 10.0904 16.1887L8.47691 18.4199C8.37545 18.5604 8.20527 18.6442 8.0231 18.6442H6.38673C3.49691 18.6442 1.47764 20.3066 1.47764 22.6864V23.6969C1.47764 23.9758 1.23328 24.2021 0.932191 24.2021L0.932165 24.2021ZM23.8413 24.2021C23.5413 24.2021 23.2958 23.9758 23.2958 23.6969V22.6863C23.2958 20.3065 21.3147 18.6442 18.4762 18.6442H16.8398C16.6598 18.6442 16.4929 18.5624 16.3904 18.4249L14.6198 16.0401C14.4496 15.8097 14.5118 15.4954 14.7605 15.3388C15.0104 15.1822 15.3496 15.2387 15.5187 15.4702L17.1278 17.6367H18.4762C21.9551 17.6367 24.3867 19.7154 24.3867 22.6893V23.6999C24.3867 23.9758 24.1413 24.2021 23.8413 24.2021V24.2021ZM12.3867 21.1705C12.2864 21.1705 12.186 21.1453 12.0976 21.0937L7.73397 18.5674C7.4787 18.4199 7.40125 18.1076 7.56052 17.8722C7.71978 17.6347 8.0558 17.5599 8.31215 17.7115L12.3889 20.0721L16.554 17.7085C16.8114 17.5609 17.1474 17.6377 17.3045 17.8762C17.4627 18.1117 17.3809 18.4249 17.1245 18.5715L12.6714 21.0978C12.5842 21.1463 12.4849 21.1705 12.3867 21.1705H12.3867Z" fill="#424242"/>
                              </svg>
                              <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24" v-else>
                                <path d="M24.2876 24.7197C23.9876 24.7197 23.7421 24.486 23.7421 24.198V23.1544C23.7421 20.5528 19.7254 19.5833 17.1956 19.5833C17.0265 19.5833 16.8661 19.5082 16.7636 19.3798L14.309 16.3305C14.1258 16.1019 14.1705 15.7753 14.4094 15.599C14.6494 15.4247 14.9908 15.4654 15.1741 15.695L17.4672 18.5428C20.5272 18.6128 24.833 19.8671 24.833 23.1544V24.198C24.833 24.486 24.5876 24.7197 24.2876 24.7197H24.2876ZM1.37845 24.7197C1.07736 24.7197 0.833008 24.486 0.833008 24.198V23.1544C0.833008 19.864 5.14757 18.6107 8.20758 18.5428L10.637 15.6835C10.828 15.4612 11.1716 15.4278 11.405 15.6094C11.6385 15.792 11.6745 16.1186 11.4847 16.342L8.89378 19.3923C8.79015 19.5134 8.63413 19.5864 8.47049 19.5864C5.93957 19.5864 1.92503 20.5559 1.92503 23.1575V24.2011C1.92393 24.486 1.67957 24.7197 1.37848 24.7197H1.37845ZM12.833 16.3712C6.44682 16.3712 4.16465 12.9556 3.6181 11.9089C3.53519 11.7523 3.54283 11.5603 3.63774 11.409C4.15483 10.5825 5.54357 8.24908 5.7563 7.38292C6.8014 3.14813 9.38031 0.719727 12.833 0.719727C16.2858 0.719727 18.8647 3.1481 19.9087 7.38292C20.1236 8.25013 21.5112 10.5836 22.0283 11.409C22.1221 11.5614 22.1309 11.7513 22.048 11.9089C21.5003 12.9556 19.2192 16.3712 12.833 16.3712H12.833ZM4.73191 11.6876C5.40064 12.797 7.517 15.3276 12.833 15.3276C18.149 15.3276 20.2654 12.7938 20.9341 11.6876C20.4465 10.8924 19.0992 8.64147 18.8483 7.62191C18.413 5.86037 16.9567 1.76228 12.833 1.76228C8.70938 1.76228 7.25301 5.86037 6.81884 7.62191C6.56684 8.64147 5.21957 10.8924 4.73193 11.6876H4.73191ZM10.6512 24.7197C10.6185 24.7197 10.5847 24.7166 10.5519 24.7103C10.3752 24.6801 10.2258 24.5663 10.1527 24.4098L7.97084 19.7137C7.87376 19.504 7.93047 19.2566 8.11157 19.1074C8.29374 18.9551 8.55556 18.9384 8.75847 19.0594L13.1221 21.6683C13.2628 21.7529 13.3556 21.8938 13.3741 22.0513C13.3938 22.2068 13.3359 22.3675 13.2181 22.4771L11.0363 24.5642C10.9338 24.6655 10.7941 24.7197 10.6512 24.7197H10.6512ZM9.6923 20.8481L10.8279 23.2921L11.9636 22.2058L9.6923 20.8481ZM15.0138 24.7197C14.8709 24.7197 14.7312 24.6655 14.6276 24.5674L12.4458 22.4802C12.3279 22.3707 12.2701 22.21 12.2898 22.0545C12.3083 21.8969 12.4021 21.756 12.5418 21.6715L16.9054 19.0625C17.1094 18.9404 17.3713 18.9582 17.5534 19.1106C17.7345 19.2629 17.7912 19.5071 17.6942 19.7169L15.5123 24.4129C15.4403 24.5695 15.2898 24.6832 15.1131 24.7135C15.0814 24.7166 15.0465 24.7197 15.0138 24.7197H15.0138ZM13.7025 22.2058L14.8381 23.2921L15.9737 20.8481L13.7025 22.2058Z" fill="#424242"/>
                              </svg>

                            </span>
                            <button type="button" class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Change</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="pt-8">
                        <div>
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Sponsor Information</h3>
                        </div>
                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                              <label for="sponsor" class="block text-sm font-medium text-gray-700">Sponsor</label>
                              <div class="mt-1">
                                <input @keyup="checkSponsor" v-model="newMember.sponsor" :class="{'border-rose-400':!newMember.sponsor && newMember.error}" type="text" name="sponsor" id="sponsor" autocomplete="sponsor" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                              </div>
                            </div>
                            <div class="sm:col-span-3" v-if="newMember && newMember.sponsor.length || newMember.sponsorValid ==false">
                                <template v-if="newMember.sponsorValid">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-green-600 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <label for="last-name" class="block text-sm font-medium text-green-600 inline-block ml-1">{{newMember.sponsorValid}}</label>
                                    <p class="py-2">Sponsor Valid</p>
                                </template>
                                <template v-else>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-rose-400 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <label for="last-name" class="block text-sm font-medium text-rose-700 inline-block ml-1">Invalid</label>
                                    <p class="py-2">Enter Valid Sponsor ID</p>
                                </template>
                            </div>
                        </div>
                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                            <label for="placement" class="block text-sm font-medium text-gray-700">Placement</label>
                            <div class="mt-1">
                                <input @keyup="checkPlacement" v-model="newMember.placement" :class="{'border-rose-400':!newMember.placement && newMember.error}" type="text" name="placement" id="placement" autocomplete="placement" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            </div>
                            </div>
                            <div class="sm:col-span-3" v-if="newMember && newMember.placement.length || newMember.placementValid ==false">
                                <template v-if="newMember.placementValid">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-green-600 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <label for="last-name" class="block text-sm font-medium text-green-600 inline-block ml-1">{{newMember.placementValid}}</label>
                                    <div class="mt-1 flex gap-1 items-center">
                                        <div class="flex gap-1" v-if="newMember.placementValid">
                                            <div class="flex items-center p-2 py-1 border border-gray-200 rounded dark:border-gray-700">
                                                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                <label for="bordered-radio-1" class="w-full py-1 ml-2 text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-300">PLACEMENT A</label>
                                            </div>
                                            <div class="flex items-center p-2 py-1 border border-gray-200 rounded dark:border-gray-700">
                                                <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                <label for="bordered-radio-2" class="w-full py-1 ml-2 text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-300">PLACEMENT B</label>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-rose-400 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <label for="last-name" class="block text-sm font-medium text-rose-700 inline-block ml-1">Invalid</label>
                                    <p class="py-2">Enter Valid Pacement ID</p>
                                </template>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div class="pt-5">
                    <div class="flex justify-end">
                      <p v-if="newMember.error" class="text-rose-700 font-bold py-2 px-4">{{newMember.error}}</p>
                      <button @click="checkout=false" type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
                      <button @click.prevent="register" type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                    </div>
                  </div>
                </form>
              </BaseCard>
            </div>
            <div class="ul-ecommerce-sidebar" :class="isOpen ? 'open' : ''">
                <BaseCard>
                    <p class="text-primary font-bold mb-2">Your Cart </p>
                    <p class="my-3" v-if="cart.length == 0">Your Cart Is Empty!</p>
                    <div class="cart">
                        <div class="animate__animated animate__fadeInRight border-b pt-4 pb-2 rounded  relative" v-for="pr in cart" :key="pr.product.id">
                            <div class="flex gap-2">
                                <img :src="baseUrl+pr.product.productimage_set[0].thumbnail" alt="" class="h-[45px] w-[45px] rounded-sm">
                                <h5 class="font-bold capitalize">{{pr.product.title}}</h5>
                            </div>
                            <div class="flex-1">
                                <div class="flex justify-between items-center text-gray-600">
                                    <div class="flex gap-1">
                                        <p>Price: ৳ {{pr.product.trade_price}}</p>
                                        <p>x</p>
                                        <p>{{pr.qty}}</p>
                                    </div>
                                    <p>৳ {{pr.product.trade_price*pr.qty}}</p>
                                </div>
                                <div class="flex justify-between items-center text-gray-600 my-1">
                                    <div class="flex gap-1">
                                        <p>BP:{{pr.product.point}}</p>
                                        <p>x</p>
                                        <p>{{pr.qty}}</p>
                                    </div>
                                    <p>
                                        <span class="inline-block bg-orange-400 border-[3px] border-x-orange-300 border-y-orange-200 text-white text-xs font-bold w-[24px] h-[24px] leading-[18px] rounded-full text-center">BP</span> 
                                        {{pr.product.point*pr.qty}}
                                    </p>
                                </div>
                                <div class="flex justify-between items-center text-gray-600">
                                    <input type="number" class="py-2 px-1 border rounded border-gray-200 m-0 w-[70px] h-[27px]" min="1" :max="pr.stock"  @keyup="qtyChanged(pr)" v-model="pr.qty">
                                    <div
                                        @click="removeFromCart(pr)" 
                                        class="flex items-center cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-1 py-.5 text-center"
                                        >
                                            <i class="nav-icon i-Remove-Cart text-base mr-2"></i>Remove 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center my-5" v-if="store.state.user">
                        <BaseBtn v-if="cart.length>0 && !checkout" @click="checkout = true" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" block>
                            Confirm & Register
                            <span class="bg-warning px-3 rounded py-3 text-white ml-3" >৳ {{cartTotal}}</span>
                            <span class="ml-1 p-0" >
                                <span class="inline-block bg-orange-400 border-[3px] border-x-orange-300 border-y-orange-200 text-white text-xs font-bold w-[24px] h-[24px] leading-[18px] rounded-full text-center">BP</span>
                                {{pointTotal}}
                            </span>
                        </BaseBtn>
                        <BaseBtn v-if="checkout" @click="checkout = false" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" block>
                            Go Back
                            <span class="bg-warning px-3 rounded py-3 text-white ml-3" >৳ {{cartTotal}}</span>
                            <span class="ml-1 p-0" >
                                <span class="inline-block bg-orange-400 border-[3px] border-x-orange-300 border-y-orange-200 text-white text-xs font-bold w-[24px] h-[24px] leading-[18px] rounded-full text-center">BP</span>
                                {{pointTotal}}
                            </span>
                        </BaseBtn>
                    </div>
                    
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { baseUrl } from '@/config/main.js'
import axios from 'axios'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
import { useStore } from 'vuex'
export default {
    components:{
        breadcrumbs: Breadcrumbs,
        Swiper,
        SwiperSlide,
    },
    data(){
        return {
            isOpen: false,
            products: "",
            cart: [],
            cartTotal: 0.00,
            pointTotal : 0,
            baseUrl: baseUrl,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            store: useStore(),
            checkout: false,
            newMember: {
                name: "",
                username: "",
                email: "",
                phone: "",
                passwd: "",
                passwd2: "",
                gender: "male",
                sponsor: "",
                sponsorValid: null,
                placement: "",
                placementValid: null,
                usernameValid: null,
                error: "",
            },
        }
    },
    mounted(){
        this.getProducts();
    },
    methods: {
        getProducts(){
            axios.get('/api/member/myproducts/').then((response)=>{
                console.log(response);
                this.products = response.data;
                this.products.results.forEach(element => {
                    element.qty = 1;
                    element.incart = false;
                });
            })
        },
        addToCart(pr){
            pr.incart = true;
            this.cart.push(pr)
        },
        qtyChanged(item){
            if(item.qty > item.stock){
                item.qty = item.stock;
            }
            if(item.qty < 1){
                item.qty = 1;
            }
        },
        removeFromCart(pr){
            pr.incart = false;
            this.cart = this.cart.filter((item) => item.id !== pr.id);
        },
        register(){
            console.log(this.newMember);
            if(this.newMember.name == "" || this.newMember.username == "" || this.newMember.email == "" || this.newMember.phone == "" || this.newMember.passwd == "" || this.newMember.passwd2 == "" || this.newMember.sponsor == ""){
                this.newMember.error = "All fields are required";
                return;
            }
            if(this.newMember.sponsorValid == false){
                this.newMember.error = "Sponsor is not valid";
                return;
            }
            if(this.newMember.usernameValid == false){
                this.newMember.error = "Username is not valid";
                return;
            }
            if(this.newMember.passwd != this.newMember.passwd2){
                this.newMember.error = "Password does not match";
                return;
            }
            return;
            var user = this.$store.state.user;
            console.log(this.cart);
            axios.post('/api/member/myproducts/', this.cart).then((response)=>{
                console.log(response);
                this.cart.forEach(element => {
                    user.current_balance -= element.qty * element.trade_price;
                });
                console.log(user.current_balance);
                this.store.commit('setUser', user);
                this.$router.push('/dashboards/stockiest/myorders');
            })
        },
        checkUsername(){
            if(!this.newMember.username){
                this.newMember.usernameValid = false;
                return;
            }
            axios.get(baseUrl + '/api/admin/check-user?username=' + this.newMember.username)
            .then(response => {
                console.log(response.data);
                this.newMember.usernameValid = false;
            })
            .catch(error => {
                console.log(error);
                this.newMember.usernameValid = "Valid";
            });
        },

        checkSponsor(){
            console.log('check user', this.newMember.sponsor);
            axios.get(baseUrl + '/api/admin/check-user?type=MEMBER&username=' + this.newMember.sponsor)
            .then(response => {
                console.log(response.data);
                this.newMember.sponsorValid = response.data.name;
            })
            .catch(error => {
                console.log(error);
                this.newMember.sponsorValid = false;
            });
        },
        checkPlacement(){
            console.log('check user', this.newMember.placement);
            axios.get(baseUrl + '/api/admin/check-user?type=MEMBER&username=' + this.newMember.placement)
            .then(response => {
                console.log(response.data);
                this.newMember.placementValid = response.data.name;
            })
            .catch(error => {
                console.log(error);
                this.newMember.placementValid = false;
            });
        },
    },
    computed: {
        cartTotal(){
            let total = 0;
            this.cart.forEach(element => {
                total += element.qty * element.product.trade_price;
            });
            return total;
        },
        pointTotal(){
            let total = 0;
            this.cart.forEach(element => {
                total += element.qty * element.product.point;
            });
            return total;
        }
    }
}
</script>

<style scoped>
.ul-ecommerce-sidebar{
    width: 360px;
}
.productImage{
    max-height: 220px;
    width: 100%;
    object-fit: cover;
}
</style>