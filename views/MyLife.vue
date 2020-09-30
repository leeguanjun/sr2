<template>
  <div class="home" id="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="mylife">  
        <table border="1px" cellspacing="0">
          <tr>
            <th></th>
            <th>File</th>
            <th>Hashcode</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
          <tr>
            <td style="font-size:28px;"><i class="el-icon-s-order"></i></td>
            <td>aa.mp4</td>
            <td style="width:250px;">QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</td>
            <td></td>
            <td>2020-09-22</td>
          </tr>
          <tr>
            <td style="font-size:28px;"><i class="el-icon-s-order"></i></td>
            <td>bb.mp4</td>
            <td>QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</td>
            <td></td>
            <td>2020-09-22</td>
          </tr>
          <tr>
            <td style="font-size:28px;"><i class="el-icon-s-order"></i></td>
            <td>cc.mp4</td>
            <td>QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</td>
            <td></td>
            <td>2020-09-22</td>  
          </tr>
        </table>
    </div>
    
    <div class="mylifes">
      <div class="file">
        <div>
          <span>File:</span>
          <span>aa.mp4</span>
        </div>
        <div>
          <span>Hashcode:</span>
          <span>QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</span>
        </div>
        <div>
          <span>Description:</span>
          <span></span>
        </div>
        <div>
          <span>Date:</span>
          <span>2020-09-22</span>
        </div>
      </div>
      <div class="file">
        <div>
          <span>File:</span>
          <span>bb.mp4</span>
        </div>
        <div>
          <span>Hashcode:</span>
          <span>QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</span>
        </div>
        <div>
          <span>Description:</span>
          <span></span>
        </div>
        <div>
          <span>Date:</span>
          <span>2020-09-22</span>
        </div>
      </div>
      <div class="file">
        <div>
          <span>File:</span>
          <span>cc.mp4</span>
        </div>
        <div>
          <span>Hashcode:</span>
          <span>QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</span>
        </div>
        <div>
          <span>Description:</span>
          <span></span>
        </div>
        <div>
          <span>Date:</span>
          <span>2020-09-22</span>
        </div>
      </div>
      <div class="file">
        <div>
          <span>File:</span>
          <span>cc.mp4</span>
        </div>
        <div>
          <span>Hashcode:</span>
          <span>QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</span>
        </div>
        <div>
          <span>Description:</span>
          <span></span>
        </div>
        <div>
          <span>Date:</span>
          <span>2020-09-22</span>
        </div>
      </div>
      <div class="file">
        <div>
          <span>File:</span>
          <span>cc.mp4</span>
        </div>
        <div>
          <span>Hashcode:</span>
          <span>QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</span>
        </div>
        <div>
          <span>Description:</span>
          <span></span>
        </div>
        <div>
          <span>Date:</span>
          <span>2020-09-22</span>
        </div>
      </div>
      <div class="file">
        <div>
          <span>File:</span>
          <span>cc.mp4</span>
        </div>
        <div>
          <span>Hashcode:</span>
          <span>QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</span>
        </div>
        <div>
          <span>Description:</span>
          <span></span>
        </div>
        <div>
          <span>Date:</span>
          <span>2020-09-22</span>
        </div>
      </div>
  
      <div class="file">
        <div>
          <span>File:</span>
          <span>cc.mp4</span>
        </div>
        <div>
          <span>Hashcode:</span>
          <span>QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv</span>
        </div>
        <div>
          <span>Description:</span>
          <span></span>
        </div>
        <div>
          <span>Date:</span>
          <span>2020-09-22</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Myvideo',
  components: {
  
  }
}
</script>
<style lang="scss" scoped>
div{
    color: #ffffff;
}
.trs td{
  width: 400px;
}
.mylife{
  width: 73%;
  margin:0 auto;
  margin-right: 385px;
}
table{
  width: 100%;
  height: 180px;
  text-align: center;
}
.mylifes{
  display: none;
}
.home{
  width: 1280px;
  overflow-y: hidden;
}
@media screen and (max-width:600px){
  #home{
  width: 100%;
  overflow-y: hidden;
}
  .mylife{
    display: none;
  }
  .mylifes{
  display: block;
  width: 100%;
  overflow-y: hidden;
}
  .file{
    width: 98%;
    height: 160px;
    border: 1px solid #707070;
    margin: 10px auto;
    div{
     height: 40px;
     line-height: 40px;
     display: flex;
     justify-content: space-between;
     font-size: 12px;
    }
  }
  .file div span:nth-child(2){
    width: 100px;
    height: 40px;
    //  white-space:nowrap;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    overflow: hidden;
  }

}
</style>
