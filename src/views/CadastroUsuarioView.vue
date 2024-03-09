<template>
  
<div class="centralizar surface-card p-4 shadow-2 border-round w-full lg:w-6 mt-6 ">
    <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Cadastro De Usuario 
        </div>
        <span class="text-600 font-medium line-height-3">Você já possui conta?</span>
        <RouterLink to ="/login" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Entrar agora!</RouterLink>
    </div>

    <div>
        <label for="nome1" class="block text-900 font-medium mb-2">Nome</label>
        <InputText id="nome1" type="text" class="w-full mb-3" v-model ="nome"/>

        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" v-model="email"/>

        <label for="Senha1" class="block text-900 font-medium mb-2">Senha</label>
        <InputText id="Senha1" type="password" class="w-full mb-3" v-model="senha" />

        <Button label="Cadastrar" icon="pi pi-user" class="w-full" @click='cadastrarUsuario()'></Button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            nome: '',
            email: '',
            senha: ''
        }
    }, 

    methods:{
        cadastrarUsuario(){
            let usuario = {
                nome: this.nome,
                email: this.email,
                senha: this.senha
            }
            console.log(usuario)
        }
    }
}
</script>

<style scoped>
.centralizar {
    margin: 0 auto;
}
</style>