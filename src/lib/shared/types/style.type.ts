export interface ITextColor {
    textColor: string; 
}
export interface IHeaderColor {
    headerColor: string; 
}
export interface IEnableColor {
    enableColor: {borderColor: string; color: string; textColor: string}; 
}
export interface IDisableColor {
    disableColor: {borderColor: string; color: string; textColor: string}; 
}
export interface IActiveColor {
    activeColor: string; 
}
export interface IHiddenColor {
    hiddenColor: string; 
}
export interface ISelectedColor {
    selectedColor: {color: string; backgroundColor: string}; 
}
export interface IOuterBorderColor {
    outerBorderColor: string; 
}
export interface IInnerBorderColor {
    innerBorderColor: string; 
}
export interface IHeaderBorderColor {
    headerBorderColor: string; 
}
export interface IInnerBorderRadius {
    innerBorderRadius: number; 
}
export interface IOuterBorderRadius {
    outerBorderRadius: number; 
}
export interface IOuterBorderWidth {
    outerBorderWidth: number; 
}
export interface IInnerBorderWidth {
    innerBorderWidth: number; 
}
export interface IHeaderBorderWidth {
    headerBorderWidth: number; 
}
export interface IInnerMargin {
    innerMargin: number; 
}