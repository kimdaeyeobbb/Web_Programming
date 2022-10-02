# TAILWIND CSS를 배워보자

## Sizing

```
Class       Properties
w-0	        width: 0px;
w-px	    width: 1px;
w-0.5	    width: 0.125rem; /* 2px */
w-1	        width: 0.25rem; /* 4px */
w-1.5	    width: 0.375rem; /* 6px */
w-2	        width: 0.5rem; /* 8px */
w-2.5	    width: 0.625rem; /* 10px */
w-3	        width: 0.75rem; /* 12px */
w-3.5	    width: 0.875rem; /* 14px */
w-4	        width: 1rem; /* 16px */
w-5	        width: 1.25rem; /* 20px */
w-6	        width: 1.5rem; /* 24px */
w-7	        width: 1.75rem; /* 28px */
w-8	        width: 2rem; /* 32px */
w-9	        width: 2.25rem; /* 36px */
w-10	    width: 2.5rem; /* 40px */
w-11	    width: 2.75rem; /* 44px */
w-12	    width: 3rem; /* 48px */
w-14	    width: 3.5rem; /* 56px */
w-16	    width: 4rem; /* 64px */
w-20	    width: 5rem; /* 80px */
w-24	    width: 6rem; /* 96px */
w-28	    width: 7rem; /* 112px */
w-32	    width: 8rem; /* 128px */
w-36	    width: 9rem; /* 144px */
w-40	    width: 10rem; /* 160px */
w-44	    width: 11rem; /* 176px */
w-48	    width: 12rem; /* 192px */
w-52	    width: 13rem; /* 208px */
w-56	    width: 14rem; /* 224px */
w-60	    width: 15rem; /* 240px */
w-64	    width: 16rem; /* 256px */
w-72	    width: 18rem; /* 288px */
w-80	    width: 20rem; /* 320px */
w-96	    width: 24rem; /* 384px */
w-auto	    width: auto;
w-1/2	    width: 50%;
w-1/3	    width: 33.333333%;
w-2/3	    width: 66.666667%;
w-1/4	    width: 25%;
w-2/4	    width: 50%;
w-3/4	    width: 75%;
w-1/5	    width: 20%;
w-2/5	    width: 40%;
w-3/5	    width: 60%;
w-4/5	    width: 80%;
w-1/6	    width: 16.666667%;
w-2/6	    width: 33.333333%;
w-3/6	    width: 50%;
w-4/6	    width: 66.666667%;
w-5/6	    width: 83.333333%;
w-1/12	    width: 8.333333%;
w-2/12	    width: 16.666667%;
w-3/12	    width: 25%;
w-4/12	    width: 33.333333%;
w-5/12	    width: 41.666667%;
w-6/12	    width: 50%;
w-7/12	    width: 58.333333%;
w-8/12	    width: 66.666667%;
w-9/12	    width: 75%;
w-10/12	    width: 83.333333%;
w-11/12	    width: 91.666667%;
w-full	    width: 100%;
w-screen    width: 100vw;
w-min	    width: min-content;
w-max	    width: max-content;
w-fit	    width: fit-content;
```

- w-1 => 0.25rem
- w-4 => 1rem이므로 16px
- w-56 ~ w-60 사이가 비어있다 => 세부적으로 컨트롤이 불가능한것은 아님

<br>

```html
<!-- space-y-8 => 각 상하요소의 간격  (x는 좌우요소의 간격) -->
<!-- 숫자는 안에있는 아이템들의 top, bottom 간격-->
<!-- bg-blue-300 =>  background color: blue, 숫자가 높아질수록 진해짐  -->
<div class="space-y-4 bg-blue-300">
  <!-- w-96 => 0.25rem*96 -->
  <!-- shadow: 그림자, rounded: radius. 모서리 깎는 것 -->
  <div class="w-96 bg-white shadow rounded">w-96</div>
  <div class="w-80 bg-white shadow rounded">w-80</div>
  <div class="w-72 bg-white shadow rounded">w-72</div>
  <div class="w-64 bg-white shadow rounded">w-64</div>
  <div class="w-60 bg-white shadow rounded">w-60</div>
  <div class="w-56 bg-white shadow rounded">w-56</div>
  <div class="w-52 bg-white shadow rounded">w-52</div>
  <!-- w-1/4 => 전체의 1/4 -->
  <div class="w-1/4 bg-white shadow rounded">w-1/4</div>
</div>
```

<br><br>

## color
