<template>
    <div id="miwersetting">
     <div class="miwersetting_a">
       <div class="add">
           <div class="miwer">what are you choice miner node</div>
           <div>Add miner:<input type="text" class="inp" v-model="miwera"><button class="btnn" @click="btn">OK</button></div>
       </div>
       <div class="miwera">
           <div>Miner</div>
           <div>t05735</div>
           <div>t02782</div>
           <div v-for="str in strjson" :key="str.id">{{str}}</div>
       </div> 
    </div>
    </div>
</template>
<script>
export default {
    name:'MiwerSettivg',
    data(){
        return{
            strjson:[],
            getUser:"",
            miwera:""
        }
    },
 
    methods:{
        btn(){
            this.strjson.push(this.miwera)
            this.miwera=""
            //  localStorage.setItem("users", JSON.stringify(this.strjson))
            //  this.getUser = localStorage.getItem("users");
            //   console.log("zzz",this.getUser);
        }
    },
    
    //    created:function(){
        //    this.miwera="11"
        //    this.miwera = JSON.parse(this.getUser)
          
    // },
}
</script>
<style scoped>
div{
    color: #ffffff;
}
#miwersetting{
    width: 1280px;
    margin: 0 auto;
    font-size: 20px;
}
.miwersetting_a{
    width: 60%;
    margin: 0 auto;
}
.inp{
    width: 180px;
    height: 28px;
    margin-right: 20px;
    margin-left: 50px;
    outline: none;
}
.btnn{
    width: 40px;
    height: 32px;
}
.add{
    width: 100%;
    height: 100px;
    border-bottom: solid 1px #ffffff;
}
.miwer{
    height: 40px;
    margin-left: 200px;
    /* margin-bottom: 20px; */
}
.miwera{
    width: 100%;
    height: 400px;
    margin-top: 20px;
}
.miwera div:nth-child(1){
    width: 80px;
    font-size: 28px;
    border-bottom: solid 1px #ffffff;
}
@media screen and (max-width:600px){
    #miwersetting{
        width: 100%;
    }
    .miwersetting_a{
        /* display: none; */
        width: 100%;
    }
    .miwer{
        margin-left: 60px;
        font-size: 16px;
    }
    .inp{
        width: 150px;
    }
    .add div:nth-child(2){
        font-size: 14px;
        margin-left: 20px;
    }
    .miwera{
        margin-left: 40px;
    }
    .miwera div{
        font-size: 14px;
    }
    .miwera div:nth-child(1){
        font-size: 18px;
        font-weight: 700;
    }
}
</style>