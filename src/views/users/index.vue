<template>
  <section class="black-section mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 py-10 mt-32 relative">
    <div class="title-container">
      <img
        src="https://act.hoyolab.com/app/community-game-records-sea/rpg/images/block_star.50cc7d47.png"
        class="block-title-left-ic"
      />
      <span class="block-title-text">Nhân Vật Của Tôi</span>
    </div>
    <div class="pc-role-list">
      <div class="role-item" onclick="toggleCircle(this)">
        <img src="https://via.placeholder.com/100" />
        <div class="circle-overlay"></div>
      </div>
      <div class="role-item" onclick="toggleCircle(this)">
        <img src="https://via.placeholder.com/100" />
        <div class="circle-overlay"></div>
      </div>
      <div class="role-item" onclick="toggleCircle(this)">
        <img src="https://via.placeholder.com/100" />
        <div class="circle-overlay"></div>
      </div>
      <div class="role-item" onclick="toggleCircle(this)">
        <img src="https://via.placeholder.com/100" />
        <div class="circle-overlay"></div>
      </div>
      <div class="role-item" onclick="toggleCircle(this)">
        <img src="https://via.placeholder.com/100" />
        <div class="circle-overlay"></div>
      </div>
      <div class="role-item" onclick="toggleCircle(this)">
        <img src="https://via.placeholder.com/100" />
        <div class="circle-overlay"></div>
      </div>
      <div class="role-item" onclick="toggleCircle(this)">
        <img src="https://via.placeholder.com/100" />
        <div class="circle-overlay"></div>
      </div>
      <div class="role-item" onclick="toggleCircle(this)">
        <img src="https://via.placeholder.com/100" />
        <div class="circle-overlay"></div>
      </div>
    </div>

    <div class="pc-character-detail">
      <div class="pc-rdnp-container">
        <div class="overlay-border"></div>
        <div class="pc-rdnp-left">
          <img
            src="https://pbs.twimg.com/media/GTdff0fagAUYxRH?format=jpg&name=large"
            alt="Rounded Image"
          />
        </div>
      </div>

      <div class="pc-role-detail-num">
        <span class="block-title-text">Nhân Vật Của Tôi</span>
      </div>
    </div>
  </section>
  <router-view> </router-view>
</template>