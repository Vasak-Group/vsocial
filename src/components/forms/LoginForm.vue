<script lang="ts" setup></script>

<template>
  <form
    class="min-h-[calc(100vh-166px)] py-2 flex flex-col justify-center sm:py-4 common-text"
  >
    <div class="relative py-1 sm:max-w-xl sm:mx-auto">
      <div
        class="relative px-4 py-10 w-[32rem] bg-white dark:bg-gray-900 mx-8 md:mx-0 shadow rounded-xl sm:p-10"
      >
        <div class="mx-auto">
          <div class="flex items-center space-x-5">
            <div
              class="p-4 bg-blue-200 rounded-full flex flex-shrink-0 justify-center items-center text-2xl font-mono text-inherit"
            >
              <font-awesome-icon
                icon="fas fa-right-to-bracket"
                class="text-blue-500"
              />
            </div>
            <div class="block pl-2 font-semibold text-xl self-start">
              <h2 class="leading-relaxed">Login</h2>
              <p class="text-sm font-normal leading-relaxed">
                Access to system
              </p>
            </div>
          </div>
          <div class="divide-y divide-slate-200 dark:divide-gray-600">
            <div
              class="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7"
            >
              <div class="flex flex-col">
                <label class="leading-loose">Email</label>
                <input
                  type="email"
                  class="px-4 py-2 w-full sm:text-sm rounded-xl focus:outline-none"
                  placeholder="Your E-mail"
                  required
                />
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Password</label>
                <input
                  type="password"
                  class="px-4 py-2 w-full sm:text-sm rounded-xl focus:outline-none"
                  placeholder="Your Password"
                />
              </div>
            </div>
            <div class="pt-4 flex items-center space-x-4">
              <button
                class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-xl focus:outline-none"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
