<template>
  <div class="wrapper">
    <div class="nav_wrapper">
      <div class="logo_content">
        <div class="logo">
          <div class="logo_name">
            this is logo
          </div>
        </div>
      </div>
      <div
        id="btn"
        class="menu"
      >
        menu
      </div>
      <button
        type="button"
        @click="occurError"
      >
        occur error
      </button>
      <ul class="nav_list">
        <li>
          <span>menu logo</span>
          <input
            type="text"
            placeholder="search"
          >
        <!-- <span class="tooltip">tooltiop</span> -->
        </li>
        <li>
          <a href="">
            <span>menu logo</span>
            <span class="links_name">A</span>
          </a>
        <!-- <span class="tooltip">tooltiop</span> -->
        </li>
        <li>
          <a href="">
            <span>menu logo</span>
            <span class="links_name">B
            </span>
          </a>
        <!-- <span class="tooltip">tooltiop</span> -->
        </li>
        <li>
          <a href="">
            <span>menu logo</span>
            <span class="links_name">
              C
            </span>
          </a>
        <!-- <span class="tooltip">tooltiop</span> -->
        </li>
        <li>
          <a href="">
            <span>menu logo</span>
            <span class="links_name">D</span>
          </a>
        <!-- <span class="tooltip">tooltiop</span> -->
        </li>
        <li>
          <a href="">
            <span>menu logo</span>
            <span class="links_name">E</span>
          </a>
        <!-- <span class="tooltip">tooltiop</span> -->
        </li>
        <li>
          <a href="">
            <span>menu logo</span>
            <span class="links_name">F</span>
          </a>
        <!-- <span class="tooltip">tooltiop</span> -->
        </li>
        <li>
          <a href="">
            <span>menu logo</span>
            <span class="links_name">G</span>
          </a>
        <!-- <span class="tooltip">tooltiop</span> -->
        </li>
      </ul>
      <div class="profile_content">
        <div class="profile">
          <div class="profile_details">
            이미지 영역
            <div class="name_job">
              <div class="name">
                front-end
              </div>
              <div class="name">
                front-end
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    occurError() {
      return Promise.reject("error")
    },
  },
}
</script>

<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
  width:100%;
  overflow: hidden;
}

.nav_wrapper {
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 240px;
  background-color: #11101d;
  padding: 6px 14px;
}
.nav_wrapper .logo_content .logo{
color: #fff;
display: flex;
height: 50px;
width:100%;
align-items: center;
}




</style>
