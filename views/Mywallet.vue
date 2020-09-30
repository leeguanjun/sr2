<template>
    <div class="Mywallet">
        <div class="account">
            <!-- 头部 -->
          <div class="work">
              <div class="Mywalletlogo">
                  <img src="../assets/image/mywalletlogo.png" alt="">
              </div>
              <div class="search">
                  <!-- <button>s's</button> -->
                  <select name="" id="">
                      <option value="">Testnet Network</option>
                  </select>
              </div>
          </div>
          <div class="neck">
              <div class="neck_a">
                  <p>Account 1</p>
                  <p>0×84BD...680e</p>
              </div>
              <div class="neck_b">
                  <img src="../assets/image/icon/gduo.png" alt="">
              </div>
          </div>
          <div class="main">
                <div>1 FIL</div>
                <div>$20.00 USD</div>
                <div class="buy">
                    <button>BUY</button>
                    <button> <i class="el-icon-position"></i>SEND</button>
                </div>
                <div class="subnav">
                    <router-link to="/Assets" class="router-link-active">Assets</router-link> 
                    <router-link to="/Activity" class="router-link-active">Activity</router-link> 
                </div>
          </div>
            <div>
                  <router-view/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
div{
    color: #ffffff;
}
.Mywallet{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
}
.account{
    margin-right: 335px;
    width: 380px;
    height: 600px;
    // background-color: #ffffff;
     background-color: rgba(255, 254, 254, 0.2);
}
.work{
    width: 100%;
    height: 100px;
     background-color: rgba(212, 210, 210, 0.4);
    // background-color: #F2F3F4;
    border-top: solid 1px #ffffff;
    display: flex;
    .Mywalletlogo{
        margin-top: 40px;
        margin-left: 5px;
        img{
            width: 60px;
            height: 55px;
        }
    }
    .search{
        margin:50px 40px;
        select{
            width: 200px;
            height: 32px;
            border: 2px solid rgb(95, 96, 97);
            outline: none;
            border-radius: 14px;
            text-align: center;
            font-size: 18px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 300;
        }
    }
}
.neck{
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid rgb(155, 156, 156);
    .neck_a{
        margin-top: 10px;
        margin-left: 140px;
        margin-right: 90px;
    }
    .neck_a p:nth-child(1){
        color: #000;
        font-weight: 600;
    }
    .neck_a p:nth-child(2){
        color: rgb(133, 131, 131);
        font-size: 12px;
    }
    .neck_b{
         margin-top: 15px;
        img{
            width: 30px;
            height: 30px;
        }
    }

}
.main{
    width: 100%;
    height: 200px;
    border-top: solid #ffffff 1px;
    border-bottom: 1px solid slategrey;
}
.main div:nth-child(1){
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 26px;
    font-weight: 300;
    color: rgb(176, 176, 177);
}
.main div:nth-child(2){
    text-align: center;
        color: rgb(176, 176, 177);
        margin-bottom: 20px;
}
.main div:nth-child(3){
    text-align: center;
}
.buy button:nth-child(1){
    width: 100px;
    height: 40px;
    border-radius: 20px;
    outline: none;
    border: none;
    color: #ffffff;
    background-color: #037DD6;
    font-weight: 700;
    margin-right: 15px;
}
.buy button:nth-child(2){
    width: 100px;
    height: 39px;
    border-radius: 20px;
    outline: none;
    border: 1px solid #037DD6;
    color: #037DD6;
    font-weight: 700;
    margin-left: 15px;
    background-color: #ffffff;
    
}
.subnav{
    margin-top: 24px;
    height: 41px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    a{
        text-decoration: none;
        display: inline-block;
        width: 50%;
        text-align: center;
        color: #363636;
    }

}
.subnav a.router-link-exact-active {
  color: #037DD6;
   border-bottom: solid 2px #037DD6;
}
@media screen and (max-width:600px){
    .Mywallet{
        width: 100%;
    }
    .account{
        width: 100%;
        margin: 0;
    }
}
</style>