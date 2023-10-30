import ListRow from '../ListRow/ListRowV1';

export const weekdayContentTabs = [
  {
    title: '월요일',
    component: (
      <>
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='열왕기상9-20장'
          date='2022.10.24'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='온라인특별 새벽기도회'
          date='2022.10.24'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='최고의 사랑'
          date='2022.10.24'
          lastRow
        />
      </>
    ),
  },
  {
    title: '화요일',
    component: (
      <>
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='열왕기상21장-열왕기하9장'
          date='2022.10.25'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='온라인특별 새벽기도회'
          date='2022.10.25'
          lastRow
        />
      </>
    ),
  },
  {
    title: '수요일',
    component: (
      <>
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='수요저녁예배 및 기도회'
          date='2022.10.26'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='수요예배'
          date='2022.10.26'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='온라인특별 새벽기도회'
          date='2022.10.26'
          lastRow
        />
      </>
    ),
  },
  {
    title: '목요일',
    component: (
      <>
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='열왕기하10-22장'
          date='2022.10.27'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='온라인특별 새벽기도회'
          date='2022.10.27'
          lastRow
        />
      </>
    ),
  },
  {
    title: '금요일',
    component: (
      <>
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='열왕기하23장-역대상10장'
          date='2022.10.28'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='온라인특별 새벽기도회'
          date='2022.10.28'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='금요기도회'
          date='2022.10.21'
        />
        <ListRow
          // thumbnail='https://THUMBNAIL_URL'
          title='예수는 부활과 생명이시다'
          date='2022.10.22'
          lastRow
        />
      </>
    ),
  },
];
