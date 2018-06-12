<template>
    <div class='box'>
        <el-form ref='form' label-position='top' :model='config'>
            <el-form-item size='medium' label='Base de Datos'>
                <el-radio-group v-model='config.options.database'>
                    <el-radio size='medium' label='SmartPharma'></el-radio>
                    <el-radio size='medium' label='Efficasis'></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label='IP'>
                <el-input v-model='config.server'></el-input>
            </el-form-item>
            <el-form-item label='Usuario'>
                <el-input v-model='config.userName'></el-input>
            </el-form-item>
            <el-form-item label='Contraseña'>
                <el-input v-model='config.password'></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :disabled='connectSuccessful' type='primary' @click='connectDatabase'>Conectarse</el-button>
                <el-button @click='testConnection'>Probar Conexion</el-button>
            </el-form-item>
        </el-form>
        <ul>
          <li :v-for="(todo,index) in dataBaseQuantity">></li>
          <span>{{ todo }}</span>
        </ul>
        <div>{{dataBaseQuantity}}</div>
    </div>
</template>

<script>
import { mssqlTestConnection } from '@/utils/server/mssql'

export default {
  data () {
    return {
      connectSuccessful: true,
      dataBaseQuantity: [],
      item: undefined,
      index: undefined,
      config: {
        userName: 'sa',
        password: '^DpYGW2ukEspaHZ7',
        server: '159.203.86.203',
        options: {
          database: '',
          rowCollectionOnDone: true
        }
      }
    }
  },
  methods: {
    connectDatabase () {},
    testConnection () {
      this.connectSuccessful = true
      mssqlTestConnection(this.config).then(response => {
        response.forEach(tuple => {
          this.dataBaseQuantity.push(tuple)
        })
        console.log(this.dataBaseQuantity)
      })
    }
  }
}
</script>

<style scoped>
.box {
  padding: 2rem;
}
</style>
