import React from 'react'
import dayjs from 'dayjs';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

export const DateRangePicker = ({setDateRangeSelected}) => {
  
  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      setDateRangeSelected(dateStrings)
    } else {
      console.log('Clear');
    }
  };
  const rangePresets = [
    
    {
      label: 'Yesterday',
      value: [dayjs().add(-1, 'd'), dayjs()],
    },
    {
      label: 'Last 7 Days',
      value: [dayjs().add(-7, 'd'), dayjs()],
    },
    {
      label: 'This Month',
      value: [dayjs().add(-30, 'd'), dayjs()],
    },
  ];
  
  return (
    <Space direction="vertical" size={12}>
    <RangePicker
      presets={[
        {
          label: <span aria-label="today">Today</span>,
          value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function
        },
        ...rangePresets,
      ]}
      showTime
      format="DD/MM/YYYY"
      onChange={onRangeChange}
    />
  </Space>

  )
}
