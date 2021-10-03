<template>
  <div>
    <div class="user_container">
      <div>
        <i class="fas fa-user" />
      </div>
      <div class="user_desc">
        <slot name="username">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <div class="time">
          <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
          <slot name="karma">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scope>
.user_container {
  padding:0.5rem;
  display: flex;
  align-items: center;
}

.fa-user {
  font-size: 2.5rem;
}

.user_desc {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
