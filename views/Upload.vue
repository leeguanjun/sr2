<template>
  <div class="about">
    <div class="upload">
      <div class="pvivate">
           Upload to your private folder.
     </div>
     <div class="select">
     File:<input type="file" class="file">
    </div>
    <div class="textarea">
    <span>Description:</span><textarea class="input">
      your ......
    </textarea>
    <button id="button">submit</button>
    </div>
    </div>
     <!-- 移动端 -->
    <div class="uploads">
        <div class="pvivates">
             Upload to your private folder.
        </div>
          <div class="selects">
           File:<input type="file" class="files">
            </div>
            <div class="textareas">
             <span>Description:</span>
            <textarea class="inputs">
            your ......
            </textarea>
            <button id="buttons">submit</button>
            </div>
      </div>
  </div>
</template>

<style scoped>
.about{
  width: 100%;
}
select{
  margin-top: 50px;
  height: 35px;
  margin-left: 30px;
}
div{
  color: #ffffff;
}
.upload{
  width: 1280px;
  margin: 0 auto;
  overflow-x: hidden;
}
.pvivate{
  width: 100%;
  height: 40px;
  font-size: 28px;
  text-align: center;
}
.pvivates{
    display: none;
}
.select{
  margin-top: 50px;
  margin-left: 510px;
  font-size: 18px;
  
}
.file{
  width: 200px;
  margin-left: 27px;
}
.textarea{
  margin-left: 440px;
 margin-top: 50px;
 font-size: 18px;
 position: relative;
 width: 300px;
}
span{
  display: inline-block;
  margin-right: 15px;
  position: absolute;
  top: 1px;
}
.input{
  width: 300px;
  height: 300px;
  margin-left: 120px;
  font-size: 18px;
}

#button{
  width: 60px;
  height: 30px;
 font-size: 18px;
 margin-left: 360px;
}
.uploads{
    display: none;
}
.about{
    width: 100%;
}
@media screen and (max-width:600px){
.pvivates{
    width: 100%;
   text-align: center;
    display: block;
}
.textareas{
    position: relative;
}
.upload{
    display: none;
}
.uploads{
   width: 100%;
    display: block;
}
.selects{
    width: 100%;
    margin-top: 30px;
    margin-left: 70px;
}
.files{
    margin-left: 50px;
}
span{
  display: inline-block;
  margin-right: 15px;
  position: absolute;
  top: 28px;
  left: 10px;
}
.inputs{
    margin-top: 30px;
    width: 180px;
    height: 180px;
    margin-left: 150px;
}
#buttons{
    margin-left: 290px;
}
}
</style>
