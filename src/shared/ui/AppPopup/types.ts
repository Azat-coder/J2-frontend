interface IPositions {
  yAxis: 'top' | 'bottom';
  xAxis: 'left' | 'right';
}

export interface IProps {
  parent: HTMLElement | SVGElement | null;
  closable?: boolean;
  xPosition?: IPositions['xAxis'];
  yPosition?: IPositions['yAxis'];
}
