export type Align = 'center' | 'end' | 'start' | 'baseline' | 'stretch';
export type Direction = 'col' | 'col-reverse' | 'row' | 'row-reverse';
export type Grow = 0 | 1;
export type Shrink = 0 | 1;
export type Justify =
  | 'center'
  | 'end'
  | 'start'
  | 'around'
  | 'between'
  | 'evenly';
export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type Flexbox = {
  align: Align;
  direction: Direction;
  grow: Grow;
  justify: Justify;
  shrink: Shrink;
  wrap: Wrap;
};

export type MdFlexbox = {
  mdAlign: Align;
  mdDirection: Direction;
  mdGrow: Grow;
  mdJustify: Justify;
  mdShrink: Shrink;
  mdWrap: Wrap;
};

export type LgFlexbox = {
  lgAlign: Align;
  lgDirection: Direction;
  lgGrow: Grow;
  lgJustify: Justify;
  lgShrink: Shrink;
  lgWrap: Wrap;
};

export type XlFlexbox = {
  xlAlign: Align;
  xlDirection: Direction;
  xlGrow: Grow;
  xlJustify: Justify;
  xlShrink: Shrink;
  xlWrap: Wrap;
};
