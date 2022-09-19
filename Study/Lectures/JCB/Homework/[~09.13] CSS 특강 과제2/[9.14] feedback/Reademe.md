# [9.14] My Bucket List 과제 피드백

- 작업순서가 정확하지 않으면 코드의 품질에도 영향을 끼친다

- 가장 먼저 작업해야하는 것은 div 부터 시작 (container, class="wrapper")

- 큰 덩어리로 먼저 나눌 것 (크게 2덩어리)

- 확장성을 위해 main을 쓰는 것은 부적절

- 타입 셀렉터를 쓰는 것은 비추천

- ul이 빠지고 일반 텍스트가 들어갈 수 있으므로 전반적인 큰 틀을 만든다고 접근하자. 특정 컨텐츠를 만든다고 접근하면 적절치않다

- 헤더는 단순히 큰 단위로서 분리시킬 때 사용하는 것이 아니라, 각 영역의 하위 항목으로 들어갈 수 있다
  예컨대, section의 하위 항목으로 header를 마크업해서 넣을 수 있다

- h1을 넣어주고 나서 초기화를 진행해주자. h1이 가지고 있는 기본 간격이 전혀 파악이 안된 상황에서 작업으르 진행하면 코드가 지저분해질 수 밖에 없다

- em: 상대적인 단위

- 폰트사이즈는 상속이 된다
  html -> body -> section -> header -> h1 -> ..

- M이라는 알파벳을 기준으로 사이즈를 정한것이 1EM

- 2줄이 되면 공간이 생기는데, 그 공간이 Lead(줄 간격)/Leading Area (납으로 끼워 맞추처서 계산한 공간)

- Leading Area를 둘로 나누면 Half Lead -> CSS에서는 이처럼 둘로 나눠서 위, 아래에 Half Lead를 분배함

- Line-Height는 폰트 사이즈 (글자 + 위 아래의 (총 2개) Half Lead )

- font-size를 10px을 주어서 line-height를 게산할 수 있다

- 폰트 종류에 따라 line-height의 normal에 해당하는 값이 다 제각각 다르다

- line-height:1 로 설정시 leading area가 사라짐

- [leading area 날리는 방법 - CSS leading trim (아직 쓸 수 없음)](https://www.google.com/search?q=css+leading+trim&oq=css+leading+trim&aqs=chrome..69i57.4056j0j1&sourceid=chrome&ie=UTF-8)

- [negative margin](https://www.google.com/search?q=negative+margin&oq=negative+margin&aqs=chrome..69i57.3854j0j9&sourceid=chrome&ie=UTF-8)

- 이미지는 인라인이지만 인라인 블록처럼 표현이 됨
- 마진겹침은 블록과 블록 사이에서 발생함
- 이미지는 블록이 아님
- 이미지에 margin top 50을 주면 전체가 밀려서 내려감 (이미지가 제일 위에 있을 때)
- 이미지에 margin bottom 50을 주면 이미지 아래의 글이 내려감
- margin은 여유공간, 그 무엇도 침범할 수 없는 공간으로 볼 수 있다
- margin은 차지하고 있는 공간의 크기라고 볼 수도 있다
- margin-top을 -값으로 주면 시작점이 내려오므로 그림의 일부가 위로 튀어나가고 새로운 시작점부터 그림의 끝까지가 보이게 된다
- padding을 -값 불가. margin은 -값 가능
- 어떤 요소를 보여지는 것 따로, 차지하는 것 따로 만들 수 있는것이 네거티브 마진

- line height를 1이하로 주는 것은 좋지 않음 (줄 간격이 너무 좁아지기 때문)

- vertical-align은 유동적이라 화나게 만듦

- line-height가 지정되지 않았을 때의 값은 normal
- 폰트 종류가 고정이 아니라면 네거티브 마진을 사용할 경우, 폰트를 바꾸었을 때 모든게 어그러짐

- ㅁ

<br>
<hr>

# Ref

- [해커를 위한 디자인 레슨](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=21651846)
