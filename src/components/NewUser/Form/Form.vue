<template>
    <Fragment>
        <div class="p-grid" >
            <div class="p-md-3 p-lg-3"></div>
            <div class="p-col-12 p-sm-12 p-md-6 p-lg-6">

                <Card id="cardForm" >
                    <template slot="title">
                        <div id="dvTitle">
                            Preencha o formulário abaixo para iniciar seu acesso
                        </div>
                    </template>
                    <template slot="content">
                        <div class="p-grid p-align-center p-fluid">

                            <div class="p-md-2 p-lg-2"></div>
                            <div class="p-col-12 p-sm-12 p-md-8 p-lg-8">
                                <h3>Nome</h3>
                                <InputText v-model="$v.user.name.$model" type="text" 
                                    v-bind:class="{'p-error': $v.user.name.$error}"/>
                                <Fragment v-if="!$v.user.name.required && $v.user.name.$error">
                                    <Message severity="error" 
                                        :closable="false" >{{userContraint.name.Required}}
                                    </Message>
                                </Fragment>
                                <Fragment v-else-if="!$v.user.name.minLength  && $v.user.name.$error">
                                    <Message severity="error" :closable="false">{{userContraint.name.MinLength}}</Message>
                                </Fragment>
                                <Fragment v-else-if="!$v.user.name.maxLength  && $v.user.name.$error">
                                    <Message severity="error" :closable="false">{{userContraint.name.MaxLength}}</Message>
                                </Fragment>
                            </div>
                            <div class="p-md-2 p-lg-2"></div>

                            <div class="p-md-2 p-lg-2"></div>
                            <div class="p-col-12 p-sm-12 p-md-8 p-lg-8">
                                <h3>E-mail</h3>
                                <InputText v-model="$v.user.email.$model" type="text" v-bind:class="{'p-error': $v.user.email.$error}"/>
                                <Fragment v-if="!$v.user.email.required && $v.user.email.$error">
                                    <Message severity="error" :closable="false">{{userContraint.email.Required}}</Message>
                                </Fragment>
                                <Fragment v-else-if="!$v.user.email.email && $v.user.email.$error">
                                    <Message severity="error" :closable="false">{{userContraint.email.Email}}</Message>
                                </Fragment>
                            </div>
                            <div class="p-md-2 p-lg-2"></div>

                            <div class="p-md-2 p-lg-2"></div>
                            <div class="p-col-12 p-sm-12 p-md-8 p-lg-8">
                                <h3>CPF</h3>
                                <InputMask v-model="user.cpf" type="text" mask="999.999.999-99" :autoClear="true"/>
                            </div>
                            <div class="p-md-2 p-lg-2"></div>

                        </div>
                    </template>
                    <template slot="footer">
                        <div class="p-grid">
                            <div class="p-col-4 p-offset-4">
                                <Button label="Cadastrar" @click="create" :disabled="$v.user.$invalid"/>
                            </div>
                        </div>
                    </template>
                </Card>

            </div>
            <div class="p-md-3 p-lg-3"></div>
        </div>
    </Fragment>
</template>

<script src="./Form.js"></script>

<style src="./Form.css"></style>