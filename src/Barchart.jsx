import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const barChartData = {
        labels: ["October", "November", "December"],
        datasets: [
            {
                data: [250, 500, 750],
                label: "Infected People",
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true
            },
            {
                data: [200, 350, 700],
                label: "Deaths People",
                borderColor: "#ff3333",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true
            }
        ]
    };

    const barChart = (
        <Bar
            type="bar"
            width={50}
            height={50}
            options={{
                title: {
                    display: true,
                    text: "COVID-19 Cases of Last 3 Months",
                    fontSize: 15
                },

                // x: {
                //     grid: {
                //         display: false
                //     },

                //     title: {
                //         display: true,
                //         text: "Time in Seconds",
                //         color: "red",
                //         font: {
                //             size: 24,
                //             weight: "bold"
                //         }
                //     }
                // },
                y: {
                    // grid: {
                    //     color: "#ccc",
                    //     borderDash: [20, 4],
                    //     borderColor: "black",
                    //     tickColor: "black"
                    // },
                    ticks: {
                        min: 0,
                        max: 1000,
                        stepSize: 200
                    }
                    // title: {
                    //     display: true,
                    //     text: "Speed in Miles per Hour",
                    //     color: "green",
                    //     font: {
                    //         size: 18,
                    //         weight: "bold"
                    //     }
                    // }
                },
                legend: {
                    display: true, //Is the legend shown?
                    position: "top" //Position of the legend.
                }
            }}
            data={barChartData}
        />
    );
    return barChart;
};
export default Chart;
