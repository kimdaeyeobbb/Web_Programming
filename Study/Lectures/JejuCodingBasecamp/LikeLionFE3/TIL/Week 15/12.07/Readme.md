- [파이어베이스](#파이어베이스)
  - [복습](#복습)
  - [align-items](#align-items)
  - [firebase VS firestore](#firebase-vs-firestore)
    - [firsebase](#firsebase)
    - [firestore](#firestore)
  - [useRef](#useref)
  - [](#)
- [Git](#git)
  - [기초요약](#기초요약)
  - [Branch](#branch)
    - [충돌이 나는 경우](#충돌이-나는-경우)
    - [branch 명령어](#branch-명령어)
    - [upstream](#upstream)
      - [upstream 저장소 추가하기](#upstream-저장소-추가하기)
      - [Remote 저장소 목록 확인](#remote-저장소-목록-확인)
      - [Upstream 저장소의 변경 내역 반영하기](#upstream-저장소의-변경-내역-반영하기)

# 파이어베이스

## 복습

- 라우팅 세팅
- 브라우저 라우트

## align-items

- 주축을 교차하는 cross axis~에서 아이템 정렬

## firebase VS firestore

### firsebase

- 구글에서 서비스하고 있는 서비스명

- 파이어베이스가 로그인, 회원가입, 로그아웃 등의 기능을 제공

### firestore

- 파이어베이스 서비스에서 제공하는 기능 중 하나

- 파이어베이스의 하위항목

## useRef

- [참고자료](https://www.w3schools.com/react/react_useref.asp)

## <Navigate/>

- [참고자료](https://reactrouter.com/en/main/components/navigate)

<br><br>

# Git

## 기초요약

```bash
git branch -M main   # git에서는 master 라는 브랜치명이 바뀌지 않았으므로 직접 바꿔주는 과정을 거쳐야 함
```

```bash
git push -u origin main   # -u : upstream 옵션
```

## Branch

- 다른 작업을 하다가 차후에 합칠 수 있도록 만들어 놓은 장치

### 충돌이 나는 경우

- merge 한 사람에게 다음과 같은 충돌 메시지가 등장

```bash
<html>
<head>
>>>>>>>>> conflict
<title>해피유진</title>

<title>해피민정</title>
>>>>>>>>> conflict
</head>
<body>
...
</body>
</html>
```

### branch 명령어

- 브랜치 목록 확인

```bash
git branch
```

- 파일 생성 & 내부에 문자 넣기

```bash
echo '# hello world a' >> 'hello1.txt'   # hello1.txt이라는 파일을 만들어서 내부에 # hello world a라는 글자를 넣겠다는 것
```

- ~하는 명령어
  - upstream: 로컬과 연결된 원격 저장소
  - 로컬 origin 저장소의 원격 저장소 a로 지정하여 a에 push하라는 것
  - 이 명령으르 한번 실행하게 되면 이제 원격저장소는 b가 되기 때문에 push할 때 --set-upstrea을 쓰지않아도 됨

```bash
git push --set-upstream origin a   #
```

- hello2.txt 파일생성 & 내부에 # hello world b라는 텍스트 삽입

```bash
echo '# hello world b' >> 'hello2.txt'
```

- a

### upstream

- 다른 사람의 깃헙을 포크한 경우 내 깃헙이 origin이 됨.
- 이때 우리가 처음 fork를 시도한 저장소를 upstream이라고 함. (origin과 upstream 모두 remote 저장소임)
- 보통 origin과 구분하기 위해서 upstream이라는 명칭을 주로 사용함

- upstream 명령어
  - `upstream`은 로컬과 연결된 원격 저장소를 뜻함
  - 아래의 명령어: 로컬 A 저장소의 원격 저장소를 B로 지정해여 B에 push하라.
  - 최초 1회 수행을 하고나면 원격 저장소가 설정되므로 이후에는 할 필요가 없음

```bash
git push --set-upstream A B
```

#### upstream 저장소 추가하기

```bash
git remote add upstream https://www.proj.com/proj
```

#### Remote 저장소 목록 확인

```bash
git remote -v
```

#### Upstream 저장소의 변경 내역 반영하기

- upstream의 저장소로부터 fetch

```bash
git fetch upstream
```

- 로컬 저장소의 master 브랜치로 checkout한 다음 머지

```bash
git checkout master
git merge upstream/master
```

- 자신의 원격저장소인 origin에 반영하려면 git pus 수행

```bash
git push
```

- ㅁ
