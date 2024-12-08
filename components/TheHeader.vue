<template>
  <header class="header">
    <div class="header__inner" :class="showMobileMenu ? 'active' : ''">
      <div class="header__contacts">
        <div class="container">
          <div class="header__buttons">
            <div class="block-text" style="display: flex; gap: 1.5rem">
              <a class="header__button-link" 
              href="tel:+1234567890" 
              target="_blank" 
              aria-label="Позвонить"
              >+7 (977) 263-40-00</a>
              <a class="header__button-link" href="mailto:">yt@ya.ru</a>
            </div>
            <div class="header__logo">
              <NuxtLink to="/"
                ><img src="../assets/svg/logo.svg" alt="Logo"
              /></NuxtLink>
            </div>
            <div class="block-text">
              <p class="text">Работаем ежедневно</p>
              <p class="text">с 10:00 до 19:00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="block" style="width: 100%">
        <div class="container">
          <div class="header__menu-block">
            <nav
              class="header__menu menu"
              :class="showMobileMenu ? 'active' : ''"
            >
              <ul class="menu__list">
                <li
                  class="menu__list-item"
                  v-for="(item, index) in menuList"
                  :key="index"
                >
                <NuxtLink 
  class="menu__list-item-link" 
  :to="item.path" 
  @click.prevent="scrollToElement(item.path)">
  {{ item.name }}
</NuxtLink>
                </li>
              </ul>
              <div class="header__buttons">
            <div class="block-text" style="display: flex; gap: 1.5rem">
              <a class="header__button-link" href="#">+7 (977) 263-40-00</a>
              <a class="header__button-link" href="mailto:">yt@ya.ru</a>
            </div>
            <div class="block-text">
              <p class="text">Работаем ежедневно</p>
              <p class="text">с 10:00 до 19:00</p>
            </div>
          </div>
            </nav>
            <div class="header__logo">
              <NuxtLink to="/"
                ><img src="../assets/svg/logo.svg" alt="Logo"
              /></NuxtLink>
            </div>
            <v-btn
              class="header__button"
              title="Быстрый заказ"
              :headerButton="true"
              :orange="true"
            >
            </v-btn>
            <nav
  class="header__burger"
  :class="showMobileMenu ? 'active' : ''"
  @click="toggleMobileMenu"
>
  <span></span>
</nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import vBtn from './AppButton.vue';

// Тип для элементов меню
interface MenuItem {
  name: string;
  path: string;
}

// Список меню
const menuList: MenuItem[] = [
  { name: 'Цены', path: '#price' },
  { name: 'Материалы', path: '#material' },
  { name: 'Почему мы?', path: '#why' },
  { name: 'Преимущества', path: '#advantages' },
  { name: 'Частые вопросы', path: '#faq' },
];

// Состояния
const showMobileMenu = ref(false);

// Методы
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
  document.querySelector('body')?.classList.toggle('_lock');
};

const scrollToElement = (target: string) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>



<style scoped lang="scss">
.header {
  background-color: #fff;
  @media (max-width: 1099.98px) {
    &__burger {
      z-index: 6;
      position: absolute;
      width: 30px;
      right: 30px;
      height: 21px;
      cursor: pointer;
    }

    &__burger span {
      position: absolute;
      background-color: #82dbf7;
      width: 100%;
      height: 3px;
      right: 0;
      top: 9px;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    }

    &__burger::before,
    &__burger::after {
      position: absolute;
      content: "";
      background-color: #82dbf7;
      width: 100%;
      height: 3px;
      right: 0;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    }

    &__burger::before {
      top: 0;
    }

    &__burger::after {
      bottom: 0;
    }

    &__burger.active:before {
      left: 3px;
      top: 12px;
      width: 30px;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      transform: rotate(90deg);
      transition-delay: 150ms;
    }

    &__burger.active:after {
      left: 14px;
      top: 20px;
      width: 20px;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      transform: rotate(-45deg);
      transition-delay: 100ms;
    }

    &__burger.active span {
      left: 2px;
      top: 20px;
      width: 20px;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      transform: rotate(45deg);
      transition-delay: 50ms;
    }

    &__menu.active {
      transform: translate(0);
    }

    &__menu {
      position: fixed;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 5;
      padding: 90px 0 0 0;
      flex-direction: column;
      justify-content: space-between;
      overflow: auto;
      background: #1e252b;
      transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
      transform: translate(-100%);
    }

    &__menu.menu.active:before {
      position: absolute;
      background-color: #283036;
      content: "";
      width: 100%;
      height: 1px;
      top: 9.2rem;
      left: 0;
    }

    &__contacts {
      display: none;
    }

    &__button {
      margin-left: auto;
      margin-right: 8rem;
    }

    .header__buttons {
      flex-direction: column-reverse;
    }

    .header__button-link {
      color: #fff;
    }

    .text {
      color: #fff;
    }
  }

  @media (min-width: 1100px) {
    .header__menu-block {
      & > .header__logo {
        display: none;
      }
    }

    &__menu > &__buttons {
        display: none;
    }
  }

  @media (max-width: 575.98px) {
    .header {
      &__button {
        display: none;
      }
    }
  }

  &__inner {
    min-height: 9.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__logo {
    max-width: 14.654rem;
    width: 100%;
    @media (max-width: 1099.98px) {
      position: relative;
      z-index: 6;
    }
  }

  &__menu-block {
    display: flex;
    width: 100%;
    padding: 1.5rem 0;
    align-items: center;
  }
  &__menu {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &__contacts {
    width: 100%;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f9f9f9;
  }

  &__buttons {
    display: flex;
    gap: 1.6rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1099.98px) {
      margin-bottom: 2rem;
    }
  }
  &__button {
    padding: 1.3rem 2rem;
    white-space: nowrap;
  }
  &__btn-login {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  &__button-link {
    font-family: "Unbounded";
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #212121;
    transition: all 0.2s;

    &:hover {
      color: #82dbf7;
    }
  }
}

.text {
  font-family: "Unbounded";
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #212121;
}

.menu {
  &__list {
    display: flex;
    align-items: center;
    width: 100%;
    @media (max-width: 1099.98px) {
      flex-direction: column;
      margin: 0 auto;
    }
  }
  &__list-item {
    @media (max-width: 1099.98px) {
      width: 100%;
    }
    &:not(:last-child) {
      margin-right: 2.8rem;
      @media (max-width: 1099.98px) {
        margin: 0;
      }
    }
  }
  &__list-item-link {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #212121;
    transition-duration: 0.15s;
    border-radius: 10px;
    &:hover {
      color: #82dbf7;
    }
    @media (max-width: 1099.98px) {
      color: #ffffff;
      width: 100%;
      justify-content: center;
      padding: 1.5rem 0;
      transition-duration: 0.15s;
      &:hover {
        background: #283036;
      }
    }
  }
}
</style>
