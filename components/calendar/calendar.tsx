'use client';
import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

function Calendars() {
  const [selectedDay, setSelectedDay] = useState<string>(() =>
    moment(new Date()).format('YYYY-MM-DD'),
  );

  const onChange = (selected) => {
    setSelectedDay(moment(selected).format('YYYY-MM-DD'));
  };

  return (
    <div className='m-10'>
      <Calendar
        onChange={onChange}
        value={selectedDay}
        formatDay={(locale, date) => moment(date).format('DD')} // 날'일' 제외하고 숫자만 보이도록 설정
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
        onActiveStartDateChange={({ activeStartDate }) => {
          const date = activeStartDate;
          console.log(date!.getMonth() + 1, date?.getFullYear());
        }}
        tileContent={({ date, view }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          // if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
          if (
            ['2024-01-25', '2024-01-16'].includes(
              moment(date).format('YYYY-MM-DD'),
            )
          ) {
            return (
              <div className='flex justify-center items-center relative'>
                <div className='h-[8px] w-[8px] bg-[#f87171] rounded-[50%] flex ml-[1px] absolute top-[1px]' />
              </div>
            );
          }
        }}
      />
    </div>
  );
}

export default Calendars;
