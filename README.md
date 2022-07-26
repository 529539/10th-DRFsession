# DRF 7팀 Chord front-end

### 기능

- 내가 쓴 메모 : 장르, 노래 제목, 가수, 메모를 Modal 창에서 작성하여 post

### 미해결 이슈

- `<select>` 태그 `defaultValue` 설정 안 됨
- API id로 개별 메모 접근하여 `onDelete` 작동
- `data.json` 에서 받아온 전체 메모 데이터 axios get으로 받아오도록 수정
    - nickname 편집 후 내가 쓴 메모에서는 나의 nickname과 일치하는 것만 받아올 수 있게 구현
