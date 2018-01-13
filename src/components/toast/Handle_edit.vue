<template>
<div class="Handleedit">
  {{ $store.state.row }}
<el-dialog title="编辑窗口" :visible.sync="$store.state.opentoast">
  <el-form :model="form">
    <el-form-item label="id" :label-width="formLabelWidth">
      <el-input v-model="form.id" v-bind:value="$store.state.row.id"  clearable></el-input>
    </el-form-item>
    <el-form-item label="交易类别" :label-width="formLabelWidth">
      <el-input v-model="form.paytype" v-bind:value="$store.state.row.id" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="积分" :label-width="formLabelWidth">
      <el-input v-model="form.jifen" v-bind:value="$store.state.row.id" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="交易账户" :label-width="formLabelWidth">
      <el-input v-model="form.payuser" v-bind:value="form.payuser" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="余额" :label-width="formLabelWidth">
      <el-input v-model="form.lessmoney" v-bind:value="form.lessmoney" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="录入时间" :label-width="formLabelWidth">
      <el-input v-model="form.time"  v-bind:value="form.time" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="说明" :label-width="formLabelWidth">
      <el-input v-model="form.readme"  v-bind:value="form.readme"  auto-complete="off" clearable></el-input>
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
  }),
  watch: {
    value(val, oldValue) {
      console.log(val);
    }
  }
};
</script>