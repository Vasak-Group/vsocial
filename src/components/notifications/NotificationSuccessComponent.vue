<script setup lang="ts">
defineProps({
  title: String,
  info: String,
})
</script>

<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 mt-20"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <div
        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black ring-opacity-5"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <font-awesome-icon
                icon="fas fa-check-circle"
                class="h-10 w-10 text-green-500"
              />
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-green-500">
                {{ title }}
              </p>
              <p class="mt-1 text-sm text-green-500">
                {{ info }}
              </p>
            </div>
            <div class="ml-4 flex flex-shrink-0">
              <button
                type="button"
                class="inline-flex common-text"
                @click="$emit('close')"
              >
                <span class="sr-only">Close</span>
                <font-awesome-icon icon="fas fa-xmark" class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
