<template>
  <div class="carousel_wrapper">
    <main>
      <div class="slider">
        <div class="slider__list">
          <div
            class="slider__item active"
            data-slide="1"
          >
            <img
              src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80"
              alt=""
              class="img"
            >
            <h3 class="title">
              Lorem, ipsum dolor.
            </h3>
            <p class="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit deleniti nostrum fuga consectetur impedit adipisci ab harum. Porro, nobis id.
            </p>
          </div><!--/slider__item-->
          <div
            class="slider__item"
            data-slide="2"
          >
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80"
              alt=""
              class="img"
            >
            <h3 class="title">
              Lorem, ipsum.
            </h3>
            <p class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, commodi? Porro magnam cum nihil fuga fugiat!
            </p>
          </div><!--/slider__item-->
          <div
            class="slider__item"
            data-slide="3"
          >
            <img
              src="https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80"
              alt=""
              class="img"
            >
            <h3 class="title">
              Lorem ipsum dolor sit.
            </h3>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur repellat sed totam quo aspernatur quis eligendi in.
            </p>
          </div><!--/slider__item-->
        </div><!--/slider__list-->

        <div class="slider__nav">
          <span
            class="slider__dot active"
            data-dot="1"
          />
          <span
            class="slider__dot"
            data-dot="2"
          />
          <span
            class="slider__dot"
            data-dot="3"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
:root {
	 --light: #f9f9f9;
	 --dark: #010101;
	 --grey: #334252;
}
 .slider {
	 width: 100%;
	 max-width: 450px;
	 padding: 2rem 1rem;
}
 .slider__list {
	 display: flex;
	 align-items: center;
	 position: relative;
	 --heightItem: 400px;
	 height: var(--heightItem);
	 top: 0;
	 left: 0;
	 transition: all ease 0.35s;
	 transform: translateX(0);
}
 @media (max-width: 767px) {
	 .slider__list {
		 height: auto;
	}
}
 @media (max-height: 700px) {
	 .slider__list {
		 height: auto;
	}
}
 .slider__item {
	 flex: 0 0 100%;
	 max-width: 100%;
	 min-width: 100%;
	 width: 100%;
	 height: var(--heightItem);
	 display: flex;
	 flex-direction: column;
	 overflow: hidden;
	 transition: all ease 0.35s;
	 border: 2px solid;
	 margin-right: 2rem;
	 opacity: 0.25;
}
 @media (max-width: 767px) {
	 .slider__item {
		 height: auto;
	}
}
 @media (max-height: 700px) {
	 .slider__item {
		 height: auto;
	}
}
 .slider__item.active {
	 opacity: 1;
}
 .slider__nav {
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 margin-top: 2rem;
}
 .slider__dot {
	 display: block;
	 width: 1rem;
	 height: 1rem;
	 background: var(--light);
	 transition: all ease 0.3s;
	 cursor: pointer;
	 opacity: 0.25;
	 margin-right: 0.5rem;
	 transform-origin: center;
	 transform: rotate(0);
}
 .slider__dot.active {
	 opacity: 1;
}
 .slider__dot:hover {
	 transform: rotate(45deg);
}
 .slider__dot:last-child {
	 margin-right: 0;
}
 main {
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 background: var(--grey);
	 color: var(--light);
	 font-family: 'Work Sans', sans-serif;
	 min-height: 100vh;
	 padding: 2rem;
}
 .img {
	 width: 100%;
	 height: calc(var(--heightItem) / 2);
	 max-height: 33vh;
	 object-fit: cover;
	 object-position: center;
	 display: block;
	 margin-bottom: 2rem;
	 flex: auto;
}
 .title {
	 font-size: 2rem;
	 line-height: 1.25;
	 font-weight: 400;
	 margin-bottom: 0.5em;
	 padding-left: 1rem;
	 padding-right: 1rem;
	 flex: auto;
}
 .text {
	 font-size: 1rem;
	 line-height: 1.25;
	 font-weight: 400;
	 margin-bottom: 0.5em;
	 padding-left: 1rem;
	 padding-right: 1rem;
	 flex: auto;
}

</style>
