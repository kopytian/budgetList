<template>
  <el-card class="form-card">
    <el-form :model="formData" label-position="top" :rules="rules" ref="addItemForm">
      <el-form-item label="Type" prop="type">
        <el-select class="type-select" v-model="formData.type" placeholder="Choose type">
          <el-option label="Income" value="income"></el-option>
          <el-option label="Outcome" value="outcome"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Comments" prop="comment">
        <el-input v-model="formData.comment" placeholder="Comment"></el-input>
      </el-form-item>
      <el-form-item label="Value" prop="value">
        <el-input v-model.number="formData.value" placeholder="Value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    formData: {
      type: 'income',
      comment: '',
      value: 0
    },
    rules: {
      type: [{ required: true, message: 'Please, select type', trigger: 'blur', }],
      comment: [{ required: true, message: 'Please, input comment', trigger: 'change', }],
      value: [{ required: true, message: 'Please, input value', trigger: 'change', },
        { type: 'number', message: 'Value must be a number', trigger: 'change', },
        {
          validator(rule, value) {
            return value !== 0;
          },
          message: 'Value must not be equal to 0.',
        }],
    }
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.formData.value = ((this.formData.type === 'OUTCOME') && (this.formData.value > 0)) ? -this.formData.value : this.formData.value;
          this.$emit('submitForm', { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    }
  }
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin:  auto;
}
.type-select {
  width: 100%;
}
</style>