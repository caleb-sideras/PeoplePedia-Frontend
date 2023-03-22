import ReactApexChart from 'react-apexcharts';


type SemiCircleChart = {
    // number should be between -1 and 1
  number: number;
};

function SemiCircleCard(props: SemiCircleChart) {

    const { number } = props;
    const percentage = Math.round((number + 1) * 50);

    const series = [percentage]

    const options ={
        chart: {
          // height: 280,
          type: "radialBar",
        },
        series: [67],
        colors: ["#7f70ab", "#bc5c22"],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
                margin: 24,
                size: '50%',
                background: 'transparent',
                // image: undefined,
                // imageWidth: 150,
                // imageHeight: 150,
                // imageOffsetX: 0,
                // imageOffsetY: 0,
                // imageClipped: true,
                // position: 'front',
                // dropShadow: {
                //   enabled: false,
                //   top: 0,
                //   left: 0,
                //   blur: 3,
                //   opacity: 0.5
                // }
            },
            track: {
                show: true,
                startAngle:  -90,
                endAngle:  90,
                strokeWidth: '97%',
                opacity: 0,
                margin: 5, 
                
            },
            dataLabels: {
                show: false,
                value: {
                    show: true,
                    fontSize: '24px',
                    fontFamily: undefined,
                    fontWeight: 400,
                    color: '#FFFFFF',
                    // offsetY: 0,
                    // formatter: function (val: string) {
                    //   return val + '%'
                    // }
                  },
                  name: {
                    show: false,
                  },
            },
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            gradientToColors: ["#bc5c22"],
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "butt"
        },
        labels: ["Progress"]
      };



    return (

        <div id="chart" >
            <ReactApexChart options={options} series={series} type="radialBar"/>
        </div >


    );
}

export default SemiCircleCard;