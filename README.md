안녕하세요. FE 개발자 안유림 입니다.

## 프로젝트 개요

주어진 mock 데이터를 기반으로 시계열 차트 생성

- Area, Bar 형태의 복합 그래프
- 데이터 구역 호버 시 id, value_area, value_bar 데이터를 툴팁 형태로 제공
- 특정 지역구 필터링 시 해당 지역구 데이터를 모두 하이라이팅

## 프로젝트 실행 방법

이 프로젝트는 React + TypeScript + Vite 로 만들어 졌습니다.

```shell
yarn
npx vite
```

다음 명령어를 입력 시 development mode 가 실행됩니다.

http://localhost:5173 에서 확인하실 수 있습니다.

## 배포 링크

https://time-series-chart-seoul-22336m4wr-anyl92.vercel.app/



### Vite 를 사용한 이유
<img width="1024" alt="Screenshot 2023-09-11 at 3 03 39 PM" src="https://github.com/anyl92/time-series-chart-seoul/assets/52682692/5cc1ec01-2c9e-4214-b48f-42629b0e803f">

엄청 빠르다고 하여 이번 프로젝트에 도입해 보았는데, 패키지 설치할 때마다 기다리는 시간이 눈에 띄게 줄었습니다.

### 디렉토리 구조
```
📦src
 ┣ 📂assets
 ┣ 📂chart
 ┃ ┗ 📂components
 ┃ ┗ 📂constants
 ┃ ┗ 📂hooks
 ┃ ┗ 📂styles
```
단순한 Chart 구현인데다가 react-chartjs-2 라이브러리에서 제공되는 Type 들을 사용하여 types 파일은 따로 생성하지 않았습니다.

Chart Feature를 메인으로 Chart 폴더 내에 해당 파일들을 모았습니다.
