import React, { Component } from 'react';
import './Grid.scss';
import {
  IBackgroundColor,
  IBorder,
  IPaginateColor,
  IPaginateCurrentColor,
  IDimension,
  ITransitionDelay,
  IArrowColor,
  IArrowSize
} from '../../../shared/types';

interface IGridProps extends
Partial<IBackgroundColor>,
Partial<IPaginateCurrentColor>,
Partial<IPaginateColor>,
Partial<IDimension>,
Partial<ITransitionDelay>,
Partial<IBorder>,
Partial<IArrowColor>,
Partial<IArrowSize>
{
  columns: number;
  children: React.ReactNode;
}
interface IGridState {
  left: number;
  current: number;
  base: number;
}
export default class Grid extends Component<IGridProps, IGridState> {

  private step: number = 0;
  private total: number = 0;
  private timer: any;

  constructor(props: IGridProps) {
    super(props);
    this.state = {left: 0, current: 0, base: 100 * React.Children.count(props.children)};
    this.initialize();
  }

  static Item = Item;

  componentDidMount() {
    this.activateTransition();
  }

  componentDidUpdate(previousProps: IGridProps, previousState: IGridState) {
    if (previousProps.children !== this.props.children) {
      this.initialize();
    }
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

  initialize() {
    this.step = 100.7 / (this.props.columns || 3);
    this.total = React.Children.count(this.props.children);
    this.setState({
      base: 100 * React.Children.count(this.props.children)
    });
  }

  getNumberOfPages() {
    return this.total < this.props.columns? 1 : 1 + this.total - this.props.columns;
  }

  onNext() {
    const temp = this.state.left;
    this.setState({
      left: temp <= -this.step * (this.getNumberOfPages() - 1) ? 0 : temp - this.step,
      current: this.state.current >= this.getNumberOfPages() - 1 ? 0 : this.state.current + 1
    });
  }

  onPrev() {
    const temp = this.state.left;
    this.setState({
      left: temp >= 0 ? 0 : temp + this.step,
      current: this.state.current <= 0 ? 0 : this.state.current - 1
    });
  }

  isCurrent(index: number) {
    return index === this.state.current;
  }

  onClickCurrent(index: number) {
    this.setState({
      left: -this.step * index,
      current: index
    });
  }

  render() {
    return (
      <>
        <div className="CarouselGlobal carouselGridContainer" ref={el => {
            if (el) {
              el.style.border = this.props.border || "";
              el.style.backgroundColor = this.props.backgroundColor || '#fff';
              el.style.width = this.props.dimension?.width || "100%";
              el.style.height = this.props.dimension?.height || "450px";
            }
          }}>
          <div className="container" ref={el => {
            if (el) {
              el.style.left = this.state.left + "%";
              el.style.width = Math.floor(this.state.base / (this.props.columns || 3)) + "%";
            }
          }}>
            {this.props.children}
          </div>

          <div className="arrow arrow-left" onClick={() => this.onPrev()}>
            <span ref={el => {
                if (el) {
                  el.style.color = this.props.arrowColor || "#000";
                  el.style.fontSize = this.props.arrowSize || "30px";
                }
              }}>&#10094;</span>
          </div>
          <div className="arrow arrow-right" onClick={() => this.onNext()}>
            <span ref={el => {
                if (el) {
                  el.style.color = this.props.arrowColor || "#000";
                  el.style.fontSize = this.props.arrowSize || "30px";
                }
              }}>&#10095;</span>
          </div>
        </div>
        <div className="carouselGridPagination">
          {Array.from({length: this.getNumberOfPages()}).map((_, idx) => (
              <span
                key={idx}
                className={"dot" + (this.isCurrent(idx) ? " current" : "")}
                ref={el => {
                  if (el) {
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
      </>
    )
  }
}

interface IItemProps {
  children: React.ReactNode;
}
function Item(props: IItemProps) {
  return (
    <div className="item">{props.children}</div>
  );
}
