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

- 유의사항

```html
<!-- width와 height를 같게 설정해서 정사각형을 만듦 -->
<!-- bg: background-color -->
<!-- 순수 CSS였다면 뒤의것을 적용시켜서 bg-red-500이 적용됐을것임 -->
<!-- 그러나 여기도 red -->
<div class="w-10 h-10 bg-blue-500 bg-red-500"></div>
<br />
<!-- 순수 CSS였다면 뒤의것을 적용시켜서 bg-blue-500이 적용됐을것임 -->
<!-- 여기도 red로 설정됨. (즉, 같은 숫자일때 red가 더 높은 우선순위를 가지는 것)-->
<div class="w-10 h-10 bg-red-500 bg-blue-500"></div>
```

- 이 케이스의 경우 위 아래 정사각형 둘 다 red가 적용된다
- red가 blue보다 우선순위를 가진다는 뜻이다 (같은 숫자일 경우)
- React에서 이와같이 동시에 color를 주는 경우가 있으므로 유의해야 한다.
  (물론 색상 2개를 한꺼번에 적용시키는것은 좋은 사용법이 아니다)

<br>

- 색상이 점점 더 진해지는 예제

```html
<!-- 색상이 점점 더 진해지는 예제 -->
<div class="bg-sky-50 aspect-square"></div>
<div class="bg-sky-100 aspect-square"></div>
<div class="bg-sky-200 aspect-square"></div>
<div class="bg-sky-300 aspect-square"></div>
<div class="bg-sky-400 aspect-square"></div>
<div class="bg-sky-500 aspect-square"></div>
<div class="bg-sky-600 aspect-square"></div>
<div class="bg-sky-700 aspect-square"></div>
<div class="bg-sky-800 aspect-square"></div>
<div class="bg-sky-900 aspect-square"></div>
```

<br><br>

## 기본타입 사용하기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tailwindcss</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <!-- https://tailwindcss.com/docs/margin -->
    <!-- https://tailwindcss.com/docs/padding -->
    <!-- https://tailwindcss.com/docs/font-weight -->
    <!-- https://tailwindcss.com/docs/text-color -->
    <div class="text-base">hello world</div>
    <div class="text-lg">hello world</div>
    <div class="text-2xl">hello world</div>
    <!-- p-3: 0.75rem임 -->
    <div class="text-5xl p-3">hello world</div>
    <!-- pt: padding top -->
    <div class="text-5xl pt-3">hello world</div>
    <div class="text-5xl">hello world</div>

    <br />
    <br />

    <div class="text-base">hello world</div>
    <div class="text-base mt-3 mb-3">hello world</div>
    <div class="text-base mt-3">hello world</div>

    <br />
    <br />

    <div class="text-base">hello world</div>
    <!-- my-3에서 y는 위, 아래 -->
    <!-- mx-3에서 x는 왼쪽, 오른쪽 -->
    <!-- my 뒤에 숫자는 공식문서 확인해가면서 조절 (중간에 빈 숫자가 존재) -->
    <div class="text-base my-3">hello world</div>
    <div class="text-base">hello world</div>

    <!-- https://tailwindcss.com/docs/list-style-type -->
    <div class="p-5">
      <ul class="list-disc">
        <li>hello world</li>
        <li>hello world</li>
        <li>hello world</li>
        <li>hello world</li>
        <li>hello world</li>
      </ul>
    </div>

    <div class="p-5">
      <!-- list-inside: 리스트 들여쓰기(없애고 만들면서 실습해보기) -->
      <ul class="list-disc list-inside">
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          dignissimos provident molestiae quo ipsa consectetur nulla repellendus
          harum? Error architecto corporis, laborum nam molestias modi similique
          natus dicta suscipit quis.
        </li>
        <li>hello world</li>
        <li>hello world</li>
        <li>hello world</li>
        <li>hello world</li>
      </ul>
    </div>

    <div class="p-5">
      <ul class="list-decimal">
        <li>hello world</li>
        <li>hello world</li>
        <li>hello world</li>
        <li>hello world</li>
        <li>hello world</li>
      </ul>
    </div>

    <div class="w-32 h-32 bg-red-400"></div>
    <br />
    <div class="w-32 h-32 bg-red-400 rounded"></div>
    <br />
    <!-- rounded: 원으로 깎기 -->
    <div class="w-32 h-32 bg-red-400 rounded-2xl"></div>
    <br />
    <div class="w-32 h-32 bg-red-400 rounded-full"></div>

    <br />
    <br />

    <!-- rounded-full w24 -->
    <!-- https://tailwindcss.com/docs/border-radius -->
    <!-- https://tailwindcss.com/docs/border-width -->

    <!-- border는 픽셀이다 -->
    <!-- border top에 4px 적용 시킨 것. red뒤의 숫자가 높을수록 진해짐 -->
    <div class="border-t-4 border-red-400">hello world</div>
    <br />
    <!-- border bottom: 4px -->
    <div class="border-b-4 border-red-400">hello world</div>
    <br />
    <!-- border left: 4px -->
    <div class="border-l-4 border-red-400">hello world</div>
    <br />
    <!-- border right: 4px -->
    <div class="border-r-4 border-red-400">hello world</div>
    <br />
    <!-- 전체 테두리를 줌 -->
    <div class="border-4 border-red-400">hello world</div>

    <!-- https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values -->
    <div class="text-[17px]">hello world</div>
    <div class="mt-[17px]">hello world</div>
    <div class="bg-[#4267B2] text-white">facebook</div>
  </body>
</html>
```
