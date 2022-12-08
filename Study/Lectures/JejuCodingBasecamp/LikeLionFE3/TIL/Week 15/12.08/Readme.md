<p style="font-size: 1.5rem; " >📌 목차 </p>

- [Firebase](#firebase)
  - [Timestamp를 useFireStore.js에서 바로 import 하지 않고 config.js에서 먼저 import한 뒤에 export해서 받아오는 이유?](#timestamp를-usefirestorejs에서-바로-import-하지-않고-configjs에서-먼저-import한-뒤에-export해서-받아오는-이유)
  - [uid](#uid)
  - [clean up](#clean-up)
- [Git](#git)
  - [브랜치 전략](#브랜치-전략)
    - [:one: Git flow](#one-git-flow)
    - [:two: Github flow](#two-github-flow)
    - [:three: feature branch](#three-feature-branch)
    - [:four: etc](#four-etc)
  - [그외 명령어](#그외-명령어)
    - [stash](#stash)

# Firebase

## Timestamp를 useFireStore.js에서 바로 import 하지 않고 config.js에서 먼저 import한 뒤에 export해서 받아오는 이유?

- 굵직한 것들을 config에 모아놓고 관리하기 위한것임. 큰의미는 없음.
- 강사님은 초기화하는 것들을 모아서 관리하는 편
- 취향에 따라서 결정할 것

## uid

- 사용자를 구분해주는 키값

## clean up

- useEffect가 달린 함수가 언마운트 될때 자동 실행되는 함수

<br><hr><br>

# Git

## 브랜치 전략

### :one: Git flow

### :two: Github flow

### :three: feature branch

### :four: etc

- 기존의 전략외에 직접 우리가 전략을 수립해서 깃헙 브랜치 전략으로 삼을 수 있다

<br>

## 그외 명령어

### stash

- 잠깐 작업한 사항을 보관하기 위해서 사용
- 내 코드가 사라짐. 따라서 불안해짐. 그래서 실제로는 push를 하는 경우가 많음.
- ㅁ
