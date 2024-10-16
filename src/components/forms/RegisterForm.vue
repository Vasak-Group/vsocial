<script lang="ts" setup>
import { computed, ref } from "vue";
import NotificationErrorComponent from "@/components/notifications/NotificationErrorComponent.vue";
import NotificationSuccessComponent from "@/components/notifications/NotificationSuccessComponent.vue";
import VSocialConnector from "@/services/vsocial.connector";

const formData = ref({
  email: "",
  username: "",
  password: "",
  repeatPassword: "",
});
const authSuccess = ref(false);
const authError = ref(false);
const errorTitle = ref("");
const errorInfo = ref("");

const validEmail = computed(() => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return regex.exec(formData.value.email);
});

const validPassword = computed(() => {
  const regex = new RegExp(/^(?=.*\d)(?=.*[a-z]).{6,20}$/);
  return (
    formData.value.password === formData.value.repeatPassword &&
    regex.exec(formData.value.password)
  );
});

const register = async () => {
  if (validEmail.value && validPassword.value) {
    try {
      const user = {
        name: formData.value.username,
        email: formData.value.email,
        password: formData.value.password,
      };
      const response = await VSocialConnector.POST("/user", user);
      authSuccess.value = true;
      console.trace(response);
      formData.value.email = "";
      formData.value.username = "";
      formData.value.password = "";
      formData.value.repeatPassword = "";
    } catch (error: any) {
      authError.value = true;
      errorTitle.value = "Error registering user";
      errorInfo.value = error.response.data.message;
    }
  } else {
    authError.value = true;
    errorTitle.value = "Error registering user";
    errorInfo.value = "Please check the fields and try again.";
  }
};

const closeAuthSuccess = () => {
  authSuccess.value = false;
};

const closeAuthError = () => {
  authError.value = false;
  errorInfo.value = "";
  errorTitle.value = "";
};
</script>

<template>
  <NotificationSuccessComponent
    @close="closeAuthSuccess"
    v-if="authSuccess"
    title="Your account has been created successfully"
    info="You can log in and enter your administration panel"
  />
  <NotificationErrorComponent
    @close="closeAuthError"
    v-if="authError"
    :title="errorTitle"
    :info="errorInfo"
  />
  <form
    class="min-h-[calc(100vh-166px)] py-2 flex flex-col justify-center sm:py-4 common-text"
    @submit.prevent="register"
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
                icon="fas fa-user-plus"
                class="text-blue-500"
              />
            </div>
            <div class="block pl-2 font-semibold text-xl self-start">
              <h2 class="leading-relaxed">Register</h2>
              <p class="text-sm font-normal leading-relaxed">
                Create a new account
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
                  v-model="formData.email"
                  type="email"
                  id="email"
                  class="px-4 py-2 w-full sm:text-sm rounded-xl focus:outline-none"
                  placeholder="Your E-mail"
                  required
                />
                <div
                  v-if="!validEmail"
                  class="text-red-500 text-xs text-center"
                >
                  Invalid email format
                </div>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Username</label>
                <input
                  v-model="formData.username"
                  type="text"
                  id="username"
                  class="px-4 py-2 w-full sm:text-sm rounded-xl focus:outline-none"
                  placeholder="Your username"
                  required
                />
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Password</label>
                <input
                  v-model="formData.password"
                  type="password"
                  id="password"
                  class="px-4 py-2 w-full sm:text-sm rounded-xl focus:outline-none"
                  placeholder="Your Password"
                />
                <div
                  v-if="!validPassword"
                  class="text-red-500 text-xs text-center"
                >
                  Invalid password format or not match
                </div>
              </div>
              <div class="flex flex-col">
                <label class="leading-loose">Repeat Password</label>
                <input
                  v-model="formData.repeatPassword"
                  type="password"
                  id="repeatPassword"
                  class="px-4 py-2 w-full sm:text-sm rounded-xl focus:outline-none"
                  placeholder="Repeat Your Password"
                />
              </div>
            </div>
            <div class="flex items-center space-x-5 bg-blue-200 rounded-xl p-3">
              <div
                class="flex flex-shrink-0 justify-center items-center text-5xl font-mono text-inherit"
              >
                <font-awesome-icon
                  icon="fas fa-info-circle"
                  class="text-blue-500"
                />
              </div>
              <div class="block pl-2 text-xl self-start">
                <p class="text-sm font-normal leading-relaxed text-blue-500">
                  The password must contain more than 6 characters and at least
                  one letter and one number.
                </p>
              </div>
            </div>
            <div class="pt-4 flex items-center space-x-4">
              <button
                class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-xl focus:outline-none"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
