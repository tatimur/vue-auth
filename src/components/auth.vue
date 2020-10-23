<template>
    <div class="hello">
        <h1>LeadHit</h1>
        <el-form class="form"
                 :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 @submit="submitForm"
                 :router="true"
        >
            <el-form-item prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Войти</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios';


    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                },
                rules: {
                    name: [
                        {required: true, message: 'Введите id сайта', trigger: 'blur'},
                        {min: 24, max: 24, message: 'id сайта должен содержать 24 символа', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.get(
                            'https://track-api.leadhit.io/client/test_auth',
                            {
                                headers: {
                                    'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
                                    'Leadhit-Site-Id': this.ruleForm.name
                                }
                            }
                        ).then(response => {
                            if (response.data.message === "ok") {
                                localStorage.setItem('leadhit-site-id', this.ruleForm.name)
                                this.$router.push('/analytics')
                            }
                        }).catch(function (error) {
                            alert(error);
                        })
                    }
                })
            }
        }
    }
</script>


<style scoped>
    .form {
        max-width: 600px;
        margin: 0 auto;
    }
</style>
