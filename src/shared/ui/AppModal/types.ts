interface IPositions {
  yAxis: 'top' | 'center' | 'bottom';
  xAxis: 'left' | 'center' | 'right';
}

export interface IProps {
  closable?: boolean;
  closeButton?: boolean;
  sectionSeparated?: boolean;
  modalTitle?: string;
  minWidth?: string;
  positionY?: IPositions['yAxis'];
  positionX?: IPositions['xAxis'];
}
