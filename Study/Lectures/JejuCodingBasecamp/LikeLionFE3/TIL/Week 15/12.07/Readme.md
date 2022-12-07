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
  - [About protected branches](#about-protected-branches)
  - [branch 복구](#branch-복구)
  - [commit](#commit)
  - [amend](#amend)
  - [upstream](#upstream)
    - [upstream 저장소 추가하기](#upstream-저장소-추가하기)
    - [Remote 저장소 목록 확인](#remote-저장소-목록-확인)
    - [Upstream 저장소의 변경 내역 반영하기](#upstream-저장소의-변경-내역-반영하기)
  - [upstream \& downstream](#upstream--downstream)
    - [origin](#origin)
    - [orgin \& local과 upstream \& downstream](#orgin--local과-upstream--downstream)
    - [origin \& local 흐름](#origin--local-흐름)
    - [git push -u origin main](#git-push--u-origin-main)

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

<br><br>

## About protected branches

- [참고자료](https://docs.github.com/ko/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules)

## branch 복구

- 브랜치를 삭제하고 터미널을 닫아도 커밋에 대한 hash값만 알면 복구를 할 수 있다
- `.git`폴더를 제거한 경우 복구를 시킬 수 없음

## commit

- 기능 단위로 커밋할 것

## amend

- 이전제 있는 커밋에 내가 수정한 내용을 합치고 싶을 때 사용<br>
  (커밋은 하나의 기능을 만들 때 변경사항을 저장해주는 것이 좋다. 하나의 기능을 만들고 커밋을 할 때 실수로 커밋하지 못한 파일이나 수정된 파일이 있을 수도 있다. 이때, 최신 커밋에 누락된 파일을 추가하고 싶을 때 )

<br><br>

## upstream

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

### upstream 저장소 추가하기

```bash
git remote add upstream https://www.proj.com/proj
```

### Remote 저장소 목록 확인

```bash
git remote -v
```

### Upstream 저장소의 변경 내역 반영하기

- upstream의 저장소로부터 fetch

```bash
git fetch upstream
```

- 로컬 저장소의 master 브랜치로 checkout한 다음 머지

```bash
git checkout master
git merge upstream/master
```

- 자신의 원격저장소인 origin에 반영하려면 git push 수행

```bash
git push
```

## upstream & downstream

### origin

- 깃허브에 존재하는 repository를 뜻함
- remote를 뜻하는 단어가 origin임

### orgin & local과 upstream & downstream

- upstream과 downstream은 상대적인 개념이므로 origin & local을 기준으로 생각하면 편하다
- `origin` : upstream
- `local` : downstream
- `push`와 `pull`을 기준으로 생각했을 때 `origin`으로부터 `local`로 흐르는 관계가 형성된다

### origin & local 흐름

- local에서 origin으로 `push`
- origin에서 local로 `pull`

### git push -u origin main

- `-u`
  - `--set-upstream`의 줄임말
  - upstream을 설정한다는 뜻
- upstream을 한 번 설정하고 나면 다음부터는 `git push`또는 `git pull`이라는 명령어만 입력해도 자동으로 origin(upstream)의 main 브랜치로부터 push와 pull을 진행함

  - upstream(origin)옵션을 통해 해당 브랜치에서 upstream과 downstream 관계를 설정했기 때문임

- 예시

```bash
git push --set-upstream A B
```

- set: 세팅하다
- `--set-upstream` : upstream으로 세팅하다
- `--set-upstream A B` : 내가 B에서 작업한 것을 A로 쏴줄 것으로 세팅한다. (B브랜치를 로컬에서 만들었으므로 REMOTE에 존재하는 A브랜치로 연결하는 작업을 수행할 것이다.)
