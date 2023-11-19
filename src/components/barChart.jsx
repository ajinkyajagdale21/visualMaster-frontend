import React,{useState,useEffect} from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts'

export const BarChartComponent = ({graphDataSet}) => {
  
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const updateInnerWidth = () => {
    setInnerWidth(window.innerWidth - 20);
  };

  useEffect(() => {
    updateInnerWidth();
    window.addEventListener('resize', updateInnerWidth);
    return () => {
      window.removeEventListener('resize', updateInnerWidth);
    };
  }, []); 

  return (
    <div style={{marginTop:"5rem"}}>
           <BarChart
          width={innerWidth}
          height={300}
          data={graphDataSet}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="A" fill="#8884d8" activeBar={<Rectangle fill="pink"  />} />
          <Bar dataKey="B" fill="#82ca9d" activeBar={<Rectangle fill="gold"  />} />
          <Bar dataKey="C" fill="#f39c12" activeBar={<Rectangle fill="gold"  />} />
          <Bar dataKey="D" fill="#34495e" activeBar={<Rectangle fill="gold"  />} />
          <Bar dataKey="E" fill="#1abc9c" activeBar={<Rectangle fill="gold"  />} />
          <Bar dataKey="F" fill="#3498db" activeBar={<Rectangle fill="gold"  />} />
        </BarChart>

    </div>
  )
}
