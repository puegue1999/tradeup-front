<template>
    <div class="div-principal">
        <div class="card-central">
            <div class="card-titulo">
                <h1>Pesquisar endereço a partir do Cep</h1>
                <form @submit.prevent="buscarEndereco">
                    <input type="text" name="cep" placeholder="00000-000" v-mask="mask" v-model="cep">
                    <button type="submit">Pesquisar Endereço</button>
                </form>
            </div>
            <div class="card-input">
                <div class="linha-elementos">
                    <div class="elementos">
                        <label>Cep:</label>
                        <input :disabled="true" :value="endereco?.cep" />
                    </div>
                    <div class="elementos">
                        <label>Unidade Federal:</label>
                        <input :disabled="true" :value="endereco?.uf" />
                    </div>
                    <div class="elementos">
                        <label>Localidade:</label>
                        <input :disabled="true" :value="endereco?.localidade" />
                    </div>
                </div>
                <div class="linha-elementos">
                    <div class="elementos">
                        <label>Bairro:</label>
                        <input :disabled="true" :value="endereco?.bairro" />
                    </div>
                    <div class="elementos">
                        <label>Logradouro:</label>
                        <input :disabled="true" :value="endereco?.logradouro" />
                    </div>
                    <div class="elementos">
                        <label>Complemento:</label>
                        <input :disabled="true" :value="endereco?.complemento" />
                    </div>
                </div>
                <div class="linha-elementos">
                    <div class="elementos">
                        <label>IBGE:</label>
                        <input :disabled="true" :value="endereco?.ibge" />
                    </div>
                    <div class="elementos">
                        <label>GIA:</label>
                        <input :disabled="true" :value="endereco?.gia" />
                    </div>
                    <div class="elementos">
                        <label>DDD:</label>
                        <input :disabled="true" :value="endereco?.ddd" />
                    </div>
                </div>
                <div class="linha-elementos">
                    <div class="elementos">
                        <label>SIAFI:</label>
                        <input :disabled="true" :value="endereco?.siafi" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import './Cep.css';

export default {
    name: 'CepComponent',
    data() {
        return {
            cep: "",
            mask: "#####-###",
            endereco: null
        };
    },
    methods: {
        //
        // Função para a chamada da api feita no back
        //
        buscarEndereco() {
            axios.get('http://127.0.0.1:8000/api/cep/showEndereco', {
                params: {
                    cep: this.cep.replace(/\D/g, '')
                }
            }).then((response) => {
                this.endereco = response.data.data;
                this.cep = '';
                this.$toast.success(response.data.message);
            }).catch((err) => {
                this.endereco = null;
                this.$toast.error(err.message);
            })
        },
    },
}
</script>