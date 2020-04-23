<template>
    <Fragment>
        <div class="p-grid p-align-center p-fluid" >
            <div class="p-md-3 p-lg-3"></div>
            <div class="p-col-12 p-sm-12 p-md-6 p-lg-6">
                <Card id="cardForm" >
                    <template slot="title">
                        <div id="dvTitle">
                            Bem vindo(a) ao WebLib, seu site de reviews de livros, informe seu e-mail para acessar
                        </div>
                    </template>
                    <template slot="content">
                        <div class="p-grid">
                            <div class="p-md-4 p-lg-4"></div>
                            <div class="p-col-12 p-sm-12 p-md-4 p-lg-4">
                                <h3>CPF</h3>
                                <InputMask v-model="cpf" type="text" mask="999.999.999-99" :autoClear="true"/>
                            </div>
                            <div class="p-md-2 p-lg-2"></div>
                        </div>
                    </template>
                    <template slot="footer">
                        <div class="p-grid">
                            <div class="p-col-4 p-offset-4">
                                <Button label="Acessar" @click="access" :disabled="$v.cpf.$invalid"/>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
            <div class="p-md-3 p-lg-3"></div>
        </div>
    </Fragment>
</template>

<script src="./FindCPF.js"></script>

<style src="./FindCPF.css"></style>