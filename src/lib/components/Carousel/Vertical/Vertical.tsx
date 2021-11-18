import React, { Component } from 'react';
import {
  IBackgroundColor,
  IBorder,
  IPaginateColor,
  IPaginateCurrentColor,
  IDimension,
  ITransitionDelay
} from '../../../shared/types';
import './Vertical.scss';


const CarouselContext = React.createContext(0);

interface IVerticalProps extends
Partial<IBackgroundColor>,
Partial<IPaginateCurrentColor>,
Partial<IPaginateColor>,
Partial<IDimension>,
Partial<ITransitionDelay>,
Partial<IBorder>
{
  children: React.ReactNode;
  thumbs?: string[];
}
interface IVerticalState {
  current: number;
}
export class Vertical extends Component<IVerticalProps, IVerticalState> {

  private total: number = 0;
  private children: any;
  private timer: any;
  constructor(props: IVerticalProps) {
    super(props);
    this.state = {current: 0};

    this.total = React.Children.count(props.children);
    let index = -1;
    this.children = React.Children.map(props.children, child => {

      index++;
      
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { index });
      }
  
      return child;
    });
  }

  static Item = Item;
  static Main = Main;
  static Description = Description;

  componentDidMount() {
    this.activateTransition();
  }

  componentDidUpdate() {
    this.activateTransition();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  activateTransition() {
    clearInterval(this.timer);
    if (this.props.transitionDelay && this.props.transitionDelay >= 500) {
      this.timer = setInterval(() => {
        this.onNext();
      }, this.props.transitionDelay);
    }
  }

  isCurrent(index: number) {
    return index === this.state.current;
  };

  onNext() {
    const temp = this.state.current;
    this.setState({
      current: temp >= this.total - 1 ? 0 : temp + 1
    });
  };

  onPrev() {
    const temp = this.state.current;
    this.setState({
      current: temp <= 0 ? this.total - 1 : temp - 1
    });
  };
  
  onClickCurrent(index: number) {
    this.setState({
      current: index
    });
  };

  getThumb(idx: number) {
    if (!this.props.thumbs) return '';
    if (!this.props.thumbs[idx]) return '';
    return this.props.thumbs[idx];
  }

  render() {
    return (
      <CarouselContext.Provider value={this.state.current}>
        <div className="CarouselGlobal carousel2Container" ref={el => {
          if (el) {
            el.style.border = this.props.border || '';
            el.style.backgroundColor = this.props.backgroundColor || '#fff';
            el.style.width = this.props.dimension?.width || "100%";
            el.style.height = this.props.dimension?.height || "450px";
          }
        }}>

          <div className="body">

            {/* Content of the carousel with the structure: */}
            {/* 
              <VerticalCarousel.Item title="">
                <VerticalCarousel.Main>
                  some content here
                </VerticalCarousel.Main>
                <VerticalCarousel.Description>
                  some content here
                </VerticalCarousel.Description>
              </VerticalCarousel.Item> 
            */}
            {this.children}

            <div className="leftArrowArea">
              <span onClick={() => this.onPrev()}>&#10094;</span>
            </div>
            <div className="rightArrowArea">
              <span onClick={() => this.onNext()}>&#10095;</span>
            </div>
          </div>

          <div className="pagination">
            {Array.from({length: this.total}).map((_, idx) => (
              <div 
                className={"thumb" + (this.isCurrent(idx) ? " current" : "")}
                ref={el => {
                  if (el) {
                    el.style.width = el.offsetHeight + 'px';
                    el.style.backgroundImage = "url('" + this.getThumb(idx) + "')";
                    el.style.backgroundSize = "100% 100%"
                    if (this.isCurrent(idx)) {
                      el.style.backgroundColor = this.props.paginateCurrentColor || '#5191FA';
                    } else {
                      el.style.backgroundColor = this.props.paginateColor || '#5E6D77';
                    }
                  }
                }}
                onClick={() => this.onClickCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </CarouselContext.Provider>
    )
  }
}

interface IItemProps {
  index?: number;
  title?: string;
  titleStyle?: {
    color?: string;
    fontSize?: number;
  }
  descriptionBackground?: string;
  children: React.ReactNode;
}
function Item(props: IItemProps) {

  const current = React.useContext(CarouselContext);

  function isCurrent(index: number) {
    return index === current;
  };

  const children: any[] = [];
  React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      children.push(React.cloneElement(child, { }));
      return React.cloneElement(child, { });
    }

    return child;
  });

  return (
    <div className={"image" + (isCurrent(props.index!) ? " current" : "")}>
      {children[0]}
      <div className="text">
        <h1 ref={el => {
          if (el) {
            el.style.color = props.titleStyle?.color || '#fff';
            el.style.fontSize = (props.titleStyle?.fontSize || '20') + 'px';
          }
        }}>{props.title || ""}</h1>
        <div className="description" ref={el => {
          if (el) {
            el.style.backgroundColor = props.descriptionBackground || "rgba(255, 255, 255, 0.542)";
          }
        }}>
          {children[1]}
        </div>
      </div>
    </div>
  );
}

interface IMainProps {
  children: React.ReactNode;
}
function Main(props: IMainProps) {
  return (
    <div className="main">
        {props.children}
    </div>
  );
}

interface IDescriptionProps {
  children: React.ReactNode;
}
function Description(props: IDescriptionProps) {
  return (
    <>
        {props.children}
    </>
  );
}

export default Vertical;

