export const titleOptions = {
  display: true,
  fontSize: 24,
  fontFamily: 'Do Hyeon'
};

export function chartFontColor(
  title: string,
  withScale: boolean = false,
  positionType: string = 'top',
  color: {[k: string]: string} =  {fontColor: 'black'}) {
  const scale = {
    scale: {
      pointLabels: {
        ...color,
        fontSize: 16
      },
      ticks: {...color}
    }
  };

  return {
    title: {
      ...titleOptions,
      ...color,
      text: title
    },
    legend: {
      position: positionType,
      labels: {
        ...color
      }
    },
    ...withScale ? scale : {}
  }
}
