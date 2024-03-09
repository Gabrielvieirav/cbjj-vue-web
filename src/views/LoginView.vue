<template>
  <div
    class="centralizar surface-card p-4 shadow-2 border-round w-full lg:w-6 mt-6"
  >
    <div class="text-center mb-5">
      <div class="text-900 text-3xl font-medium mb-3">Login</div>
      <span class="text-600 font-medium line-height-3"
        >Você não possui conta?</span
      >
      <RouterLink
        to="/cadastro-usuario"
        class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >Crie agora!</RouterLink
      >
    </div>

    <div>
      <label for="email1" class="block text-900 font-medium mb-2">Email</label>
      <InputText id="email1" type="text" class="w-full mb-3" v-model="email" />

      <label for="senha1" class="block text-900 font-medium mb-2">Senha</label>
      <InputText
        id="senha1"
        type="password"
        class="w-full mb-3"
        v-model="senha"
      />

      <div class="flex align-items-center justify-content-end mb-6">
        <a
          class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
          >Esqueceu a senha?</a
        >
      </div>

      <Button label="Sign In" icon="pi pi-user" class="w-full" @click="logar()"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      senha: "",
    };
  },

  methods: {
    logar() {
      let usuario = {
        email: this.email,
        senha: this.senha,
      };
      console.log(usuario);
    },
  },
};
</script>

<style scoped>
.centralizar {
  margin: 0 auto;
}
</style>