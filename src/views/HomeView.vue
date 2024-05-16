<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      Number: "",
    };
  },

  methods: {
    logar() {
      let usuario = {
        name: this.name,
        email: this.email,
        number: this.number,
      };
      console.log(usuario);
    },
  },
};
</script>

<template>
<div>
          <div class="container-menu">
            <img src="../img/logo-Photoroom.png-Photoroom.png" alt="">
            </div>
        </div>

    <div class="container">
        <div class="border">
        <div class="form">
            <div class="formContainer">
                <div class="form-header">
                    <div class="title">
                        <h2>SEJA BEM-VINDO</h2>
                        <p id="dados">Coloque seus dados!</p>
                    </div>
                </div>
                <label for="name1" class="block text-900 font-medium mb-2"><p id="nome">Nome</p></label>
        <InputText id="name1" type="text" class="block text-900 font-medium mb-3" v-model ="name"/>

        <label for="email1" class="block text-900 font-medium mb-2"><p id="email">Email</p></label>
        <InputText id="email1" type="text" class="w-full mb-3" v-model="email"/>

        <label for="number1" class="block text-900 font-medium mb-2"><p id="number">Number</p></label>
        <InputText id="number1" type="tel" class="w-full mb-3" v-model="number" />
                <div class="login-button">
                    <Button label="LOGIN" icon="pi pi-user" class="w-full" @click="logar()"></Button>
                </div>

                <div id="faleConosco">
                    <h5>Fale Conosco <span class="insta"> <a href="https://www.instagram.com/bluetechnology_/"><i class="bi bi-instagram"></i></a></span></h5>
                </div>
                </div>
                
            </div>   
        </div>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
}

body{ /* Corpo da pagina */
    background-image: url(../img/img-7767-1.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    overflow-x: hidden; 
}

#faleConosco{ /* menu fale conosco*/

    color: aliceblue; 
    padding: 10px;
    text-align: center;
    font-size: 18px;
}
.insta{
    margin-left: 1%;
}
.insta a{
    color: white;
}

/* Inicio do menu principal da segunda pagina */
.container-menu{  
    color: white;
    padding: 2.7%;
    text-align: center;
    display: block;
    margin-top: 50px;

}
/*fim menu principal da pagina*/

/*Inicio do formluario (login do aluno)*/

.container{
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    margin-top: 1rem;
    font-size: 10px;
}
.border{
    padding: 60 px;
    border-radius: 30px;
   background-color:#08687e;
   height: 410px;
   width: 330px;
   margin-top: 80px;
   
}
.form{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
}

.form-header{
    font-size: 10px;
}
.form-header h1{
    text-align: center;
    padding: 1.5rem;
    font-family: Bebas Neue;
   
}
.input-group{
    display: flex;
    justify-content: space-between;
    margin-top: 0.62rem;
}
.input-box input{
    border-radius: 6px;
    border: none;
    padding: 1.2rem 1.3rem;
    padding-left: 55px;
}
.login-button button{
    text-align: center;
    width: 100%;
    margin-top: 2rem;
    border: none;
    background-color:#49afc9;
    cursor: pointer;    
    padding: 0.5rem;
    border-radius: 10px;
}
h2{
margin-top: 30px;
    font-size: 18px;
}
#dados{
    font-size: 18px;
    padding: 10px;
    font-weight: bold;
}
#nome{
    color: white;
    font-size: 15px;

}
#email{
    color: white;
    font-size: 15px;
}
#number{
    color: white;
    font-size: 15px;
}
</style>
