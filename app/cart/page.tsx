import Link from "next/link";
import OrderSummary from "./OrderSummary";
import Image from "next/image";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

export default function CartPage() {
  return (
    <section className="py-8 mx-auto max-w-screen-xl">
      <h2 className="font-semibold text-2xl">Shopping Cart</h2>

      <div className="mt-8 flex items-start gap-8">
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl space-y-6">
          <div className="rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between gap-6">
              <Link href="#" className="shrink-0 md:order-1">
                <Image src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" width={80} height={80} />
              </Link>

              <div className="w-full min-w-0 flex-1 space-y-4 order-2 max-w-md">
                <Link href="#" className="font-medium hover:underline">
                  PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24&quot; Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard
                  layout INT
                </Link>
              </div>

              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <MinusIcon className="h-3 w-3" />
                  </button>
                  <input
                    type="text"
                    id="counter-input"
                    data-input-counter
                    class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                    placeholder=""
                    value="2"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <PlusIcon className="h-3 w-3" />
                  </button>
                </div>
                <div>
                  <p className="font-bold">$1,499</p>
                  <Button className="text-sm font-medium text-red-600 hover:underline bg-white">
                    <TrashIcon className="me-1.5 h-5 w-5 text-red-600" />
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img
                  class="h-20 w-20 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                  alt="imac image"
                />
                <img
                  class="hidden h-20 w-20 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                  alt="imac image"
                />
              </a>

              <label for="counter-input" class="sr-only">
                Choose quantity:
              </label>
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button
                    type="button"
                    id="decrement-button-2"
                    data-input-counter-decrement="counter-input-2"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="counter-input-2"
                    data-input-counter
                    class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                    placeholder=""
                    value="1"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button-2"
                    data-input-counter-increment="counter-input-2"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 dark:text-white">$598</p>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">
                  Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band
                </a>

                <div class="flex items-center gap-4">
                  <button
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      class="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg
                      class="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img
                  class="h-20 w-20 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                  alt="imac image"
                />
                <img
                  class="hidden h-20 w-20 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                  alt="imac image"
                />
              </a>

              <label for="counter-input" class="sr-only">
                Choose quantity:
              </label>
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button
                    type="button"
                    id="decrement-button-3"
                    data-input-counter-decrement="counter-input-3"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="counter-input-3"
                    data-input-counter
                    class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                    placeholder=""
                    value="1"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button-3"
                    data-input-counter-increment="counter-input-3"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 dark:text-white">$1,799</p>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">
                  Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black
                </a>

                <div class="flex items-center gap-4">
                  <button
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      class="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg
                      class="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="shrink-0 md:order-1">
                <img
                  class="h-20 w-20 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                  alt="imac image"
                />
                <img
                  class="hidden h-20 w-20 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                  alt="imac image"
                />
              </a>

              <label for="counter-input" class="sr-only">
                Choose quantity:
              </label>
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button
                    type="button"
                    id="decrement-button-4"
                    data-input-counter-decrement="counter-input-4"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="counter-input-4"
                    data-input-counter
                    class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                    placeholder=""
                    value="1"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button-4"
                    data-input-counter-increment="counter-input-4"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 dark:text-white">$699</p>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">
                  Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold
                </a>

                <div class="flex items-center gap-4">
                  <button
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      class="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg
                      class="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <a href="#" class="w-20 shrink-0 md:order-1">
                <img
                  class="h-20 w-20 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                  alt="imac image"
                />
                <img
                  class="hidden h-20 w-20 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                  alt="imac image"
                />
              </a>

              <label for="counter-input" class="sr-only">
                Choose quantity:
              </label>
              <div class="flex items-center justify-between md:order-3 md:justify-end">
                <div class="flex items-center">
                  <button
                    type="button"
                    id="decrement-button-5"
                    data-input-counter-decrement="counter-input-5"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="counter-input-5"
                    data-input-counter
                    class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                    placeholder=""
                    value="3"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button-5"
                    data-input-counter-increment="counter-input-5"
                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div class="text-end md:order-4 md:w-32">
                  <p class="text-base font-bold text-gray-900 dark:text-white">$2,997</p>
                </div>
              </div>

              <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">
                  APPLE iPhone 15 5G phone, 256GB, Gold
                </a>

                <div class="flex items-center gap-4">
                  <button
                    type="button"
                    class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      class="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to Favorites
                  </button>

                  <button type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                    <svg
                      class="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OrderSummary />
      </div>
    </section>
  );
}