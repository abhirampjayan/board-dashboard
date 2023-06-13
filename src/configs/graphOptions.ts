export const lineGraphOptions = {
  responsive: true,
  maintainAspectRatio: false,
  pointRadius: 0,
  pointHoverRadius: 0,
  pointHitRadius: 0,
  cubicInterpolationMode: 'monotone',
  tension: 0.4,
  scales: {
    x: {
      ticks: {
        padding: 5,
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      border: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 6,
        stepSize: 100,
      },
      suggestedMax: 500,
    },
  },
  intersect: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export const pieGraphOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};
