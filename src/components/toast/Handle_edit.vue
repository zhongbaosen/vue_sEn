<template>
<div class="Handleedit">
<el-dialog title="编辑窗口" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="id" :label-width="formLabelWidth">
      <el-input v-model="form.id" clearable></el-input>
    </el-form-item>
    <el-form-item label="交易类别" :label-width="formLabelWidth">
      <el-input v-model="form.paytype" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="积分" :label-width="formLabelWidth">
      <el-input v-model="form.jifen" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="交易账户" :label-width="formLabelWidth">
      <el-input v-model="form.payuser" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="余额" :label-width="formLabelWidth">
      <el-input v-model="form.lessmoney" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="录入时间" :label-width="formLabelWidth">
      <el-input v-model="form.time" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="说明" :label-width="formLabelWidth">
      <el-input v-model="form.readme"  auto-complete="off" clearable></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  name: "Handleedit",
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        id: "",
        paytype: "",
        jifen: "",
        payuser: "",
        lessmoney: "",
        time: "",
        readme: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods:{
    openit(){
      this.dialogFormVisible = true;
      this.form.id = this.$store.state.editor.row.id;
      this.form.paytype = this.$store.state.editor.row.交易类别;
      this.form.jifen = this.$store.state.editor.row.积分;
      this.form.payuser = this.$store.state.editor.row.交易账户;
      this.form.lessmoney = this.$store.state.editor.row.余额;
      this.form.time = this.$store.state.editor.row.录入时间;
      this.form.readme = this.$store.state.editor.row.说明;
    }
  }
};
</script>