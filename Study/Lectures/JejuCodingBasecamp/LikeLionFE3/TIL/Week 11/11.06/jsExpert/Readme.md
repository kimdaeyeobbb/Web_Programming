# 22.11.06 (일) JS 고급 수업

- 수업시간에 다루지 못한 내용을 중점적으로 다룸

# Date

- 자바스크립트에서 시간 관련정보를 제공하는 내장 객체

## GMT

- 그리니치 평균시 (Greenwich Mean Time)
- 런던을 기점으로 하고, 웰링턴이 종점으로 설정되는 협정 세계시의 기준시간대

## [getYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear)

- 99년까지만 설정을 해놨었음. 따라서 00으로 넘어가면 100이됨.

## 월이 0부터 시작하는 이유

- https://twitter.com/BrendanEich/status/771006397886533632

## 월과 일의 공통점

- 영문명이 있다
- 결과로서 시간을 표현할때 배열에 넣어서 인덱스화 하려고 하지 않았을까?

## 시간

- 실무에서는 사용자 편의성을 위해서 보통 24시간 체계보다 오전/오후 쳬계로 시간을 표현함

## UTC

- 협정 세계시 (coordinated univeral time OR Universal Time Coordinated)
- 1972년 1월 1일부터 시행된 국제 표준시
- UTC는 그리니치 평균시(GMT)에 기반하므로 GMT로도 불리지만 기술적인 표기에서는 UTC가 사용됨
- 전세계를 대상으로 서비스를 할 때 UTC를 사용하면 좋다
