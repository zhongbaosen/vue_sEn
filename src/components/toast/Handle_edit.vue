<template>
<div class="Handleedit">
  <div>{{dialogFormVisible}}</div>
<div>{{ $store.state.row}}</div>
<el-dialog title="编辑窗口" :visible.sync="$store.state.opentoast">
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
    <el-button @click="$store.state.opentoast = false">取 消</el-button>
    <el-button type="primary" @click="$store.state.opentoast = false">确 定</el-button>
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
      dialogTableVisible: this.$store.state.opentoast,
      dialogFormVisible: true,
      form: {
        id: this.$store.state.row.id,
        paytype: this.$store.state.row.交易类别,
        jifen: this.$store.state.row.积分,
        payuser: this.$store.state.row.交易账户,
        lessmoney: this.$store.state.row.余额,
        time: this.$store.state.row.录入时间,
        readme: this.$store.state.row.说明
      },
      formLabelWidth: "120px"
    };
  },
  computed: mapGetters({
    msg: "GET_MSG"
  })
};
</script>