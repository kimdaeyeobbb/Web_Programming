const result = document.getElementById("jsResult");
const video = document.getElementById("jsVideo");

// getElementById : 주어진 문자열과 일치하는 id 속성을 가진 요소를 찾고, 이를 나타내는 Elment 객체 반환
// id값은 문서 내에서 유일해야하므로 특정 요소를 빠르게 찾을 때 유용 
// id가 없는 요소에 접근하기 위해서는 Document.querySelector를 이용

const WIDTH = 640;
const HEIGHT = 360;

result.width = WIDTH;
result.height = HEIGHT;

const ctx = result.getContext("2d");
// HTMLCanvasElement.getContext() 메서드는 캔버스의 드로잉 컨텍스트를 반환 (컨텍스트 식별자가 지원되지 않을 경우 null 반환)


function setBg() {
  result.style.backgroundImage =
    'url("https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-9/49336100_1885308894915070_8104276389001166848_n.jpg?_nc_cat=107&_nc_ht=scontent-hkg3-2.xx&oh=e6141acb4b22b4909b056c2dc0ef4279&oe=5D3252EB")';
  result.style.backgroundPosition = "center -350px";
}

// 참고 사이트 : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
/* CanvasRenderingContex2D.drawImage() : 캔버스에 이미지를 그리는 다양한 방법 */
function handlePlay(event) {
  ctx.drawImage(video, 0, 0, WIDTH, HEIGHT);
  // drawImage(image, dx, dy, dWidth, dHeight)
  /*
  image : 컨텍스트에 그릴 요소
  dx : 소스의 왼쪽 위 모서리를 배치할 대상 캔버스의 x축 좌표
  dy : 소스의 왼쪽 위 모시리를 배치할 대상 캔버스의 y축 좌표
  dWidth : image 대상 캔버스에 그릴 너비. 이를 이용해서 그려진 이미지의 크기 조정가능
  dHeight : image 대상 캔버스에 그릴 높이. 이를 이용해서 그려진 이미지의 크기 조정가능
  이 둘을 지정하지 않으면 이미지를 그릴 때 높이가 조정되지 않음. 
  */


  // 참고사이트 : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
  /* CanvasRenderingContext2D.getImageData() : 캔버스의 지정된 부분에 대한 기본 픽셀 데이터를 나타내는 개체를 반환  */
  
  let frame = ctx.getImageData(0, 0, WIDTH, HEIGHT);
  // ctx.getImageData(sx,sy,sw,sh);
  // sx : ImageData 추출할 사각형의 왼쪽 위 모서리의 x축 좌표
  // sy : ImageData 추출할 사각형의 왼쪽 위 모서리의 y축 좌표
  // sw : ImageData 추출할 사각형의 너비. 양수 값은 오른쪽. 음수는 왼쪽.
  // sh : ImageData 추출할 사각형의 높이. 양수 값은 아래로, 음수값은 위로 이동.
  


  // 참고사이트 : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
  // 참고사이트2 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
  /* 캔버스를 이용한 픽셀 조작 */
  let pxNumber = frame.data.length;
  // data : RGBA(Red, Green, Blue, Alpha) 순서의 데이터를 포함하는 1차원 배열
  // 각 색상의 구성 요소는 0~255 사이의 정수로 표시 & 배열내 연속적인 인덱스 할당 
  // 픽셀은 배열 전체에서 왼쪽 -> 오른쪽 -> 아래쪽 진행
  // 인뎃스 값의 범위는 0~(X*4)-1인 X*4바이트의 데이터를 포함 
  for (let i = 0; i < pxNumber; i+=4) {
    let r = frame.data[i * 4 + 0];
    let g = frame.data[i * 4 + 1];
    let b = frame.data[i * 4 + 2];
    if (r <= 126 && g >= 80 && b <= 80) {
      frame.data[i * 4 + 3] = 0;
    }
  }
  ctx.putImageData(frame, 0, 0);
  setBg();
  setTimeout(handlePlay, 0);
}
// setTimeout : 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정
// 기본꼴 : 변수 = setTimeout(function[,delay, arg1, arg2, ...]);


if (video) {
  video.addEventListener("play", handlePlay);
}

/* 색상 선택
const inputs = document.querySelectorAll('[name=color]');
for (const input of inputs) {
    input.addEventListener("change", function(evt) {
        switch (evt.target.value) {
            case "inverted":
                return invert();
            case "grayscale":
                return grayscale();
            default:
                return original();
        }
    });
}
*/