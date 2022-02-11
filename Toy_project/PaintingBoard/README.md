# 구현 결과
<br>

## 초기화면




<br><br><br>
# 사용한 개념
<br>

## HTML
1) canvas
```html
<canvas id="jsCanvas" class="canvas"></canvas>
```
canvas 
- JS & HTML <canvas> element를 이용하여 그래픽(그림, 도형 등 다양한 시각적 형상)을 그릴 때 사용 <br>
- 사용 : 그래프 그리기, 사진 합성, 에니메이션, 게임 그래픽, 데이터 시각화, 비디오 처리 등
- 여기서는 2D 그래픽을 그리기 위해 사용 & context를 사용하여 요소 내 
- 캔버스 크기(너비*높이)는 HTML의 height와 width 속성을 사용하여 수정 가능
- [참고사이트](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial)
<br><br><br>
  

  
  
  
2) div.controls_range
```html
   <div class="controls__range">
            <!-- 최소값은 0.1, 최대값은 5.0, 기본값은 2.5, 증가량은 0.1-->
            <input 
                type="range" 
                id="jsRange" 
                min="0.1" 
                max="5.0" 
                value="2.5" 
                step="0.1"/>
                <!-- step : 내가 움직일 때마다 얼마나 움직이는지를 지정 -->
   </div> 
```
- div.controls_range 입력시 상단의 태그가 생성
- Paint brush 사이즈 조절하는 막대임
- step은 브러쉬 조절을 할때 움직이는 정도를 지정. 0.1로 지정시 한칸 옮길때 마다 0.1씩 이동
- 브러쉬의 최소값 : 0.1, 최대값 : 5.0, 기본값 : 2.5로 지정 
<br><br><br>
  
  
  
  
  
3) div.controls__btns>button#jsMode+button#jsSave  
```html
<div class="controls__btns">
    <!-- default로 painting 설정. 클릭시 fill로 바뀌고 다시 클릭시 painting으로 바뀜-->
    <button id="jsMode">Fill</button>
    <button id="jsSave">Save</button>
</div>   
```  
- jsMode : FILL, PAINT 전환시키는 paintingMode
- 기본값은 PAINT로 설정, 클릭시 FILL과 PAINT로 지속적 전환
  
  
  
  
  
  
<br><br><br>
## CSS

1) [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)<br>
- 웹 브라우저마다 default 스타일이 다르므로 CSS를 초기화(Reset)함으로써 웹브라우저 별로 동일한 스타일을 적용시킴  
<br>
 
2) flexbox
```CSS
 .controls {
    margin-top: 80px;
    display:flex;
    flex-direction: column;
    align-items: center;
} 
```
- 웹 최초로 적절한 정렬 기능을 제공
- flexbox(flex container)를 통해 레이아웃을 간단하게 구현 
- [flexbox 참고사이트](https://d2.naver.com/helloworld/8540176)
<br>

  
  
3) multiple selector (다중 선택자)
```CSS
.a .b .c{
  
}
```  
- 공백으로 연결하여 사용시 뒤의 selector(선택자)가 하위 개체로 지정 됨. 여기서는 a요소 내부의 b 요소 내부의 c 요소에만 적용이 된다는 뜻이다.
  
  
  

## Javascript

1) Document.getElementById()
- 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환. 
(id는 문서내에서 유일해야 하므로 특성 요소를 빠르게 찾을 때 유용)
(id가 없는 요소에 접근하기 위해서는 Document.qeurySelector()를 이용)
  
2) canvas.getContext()



