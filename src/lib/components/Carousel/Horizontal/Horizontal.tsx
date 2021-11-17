import React, { Component } from 'react';
import {
  IBackgroundColor,
  IBorder,
  IPaginateColor,
  IPaginateCurrentColor
} from '../../../shared/types';
import './Horizontal.scss';

interface IDescriptionProps {
  children: React.ReactNode;
}
interface IHorizontalProps extends
Partial<IBackgroundColor>,
Partial<IPaginateCurrentColor>,
Partial<IPaginateColor>,
Partial<IBorder>
{
  children: React.ReactNode;
}
interface IHorizontalState {
  current: number;
}

const CarouselContext = React.createContext(0);

export default class Horizontal extends Component<IHorizontalProps, IHorizontalState> {
  private total: number = 0;
  constructor(props: IHorizontalProps) {
    super(props);
    this.state = {current: 0};

    this.total = React.Children.count(props.children);
  }

  isCurrent(index: number) {
    return index === this.state.current;
  };

  static Description = Description;
  static Main = Main;

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

  

  render() {
    return (
      <CarouselContext.Provider value={this.state.current}>
        <div className="CarouselGlobal carouselContainer" ref={el => {
          if (el) {
            el.style.border = this.props.border!;
            el.style.backgroundColor = this.props.backgroundColor!;
          }
        }}>
          <div className="pagination">
            <div className="paginate">
              <div className="navigation">
                <span onClick={() => this.onPrev()}>&#65087;</span>
                <span onClick={() => this.onNext()}>&#65088;</span>
              </div>
              {Array.from({length: this.total + 1}).map((_, idx) => (
                <span
                  key={idx}
                  className={this.isCurrent(idx) ? "current" : ""}
                  onClick={() => this.onClickCurrent(idx)}
                  ref={el => {
                    if (el) {
                      if (this.isCurrent(idx)) {
                        el.style.backgroundColor = this.props.paginateCurrentColor || '#5191FA';
                      } else {
                        el.style.backgroundColor = this.props.paginateColor || '#5E6D77';
                      }
                    }
                  }}
                />
              ))}
            </div>
          </div>
          
          {this.props.children}

        </div>
      </CarouselContext.Provider>
    );
  }
}

function Description({children}: IDescriptionProps) {
  const childrenWithProps: any[] = [];

  const current = React.useContext(CarouselContext);
  React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (React.isValidElement(child)) {
      childrenWithProps.push(React.cloneElement(child, { }));
      return React.cloneElement(child, { });
    }

    return child;
  });

  function isCurrent(index: number) {
    return index === current;
  };

  return (
    <div className="descriptions">
      {childrenWithProps.map((item, idx) => (
        <div key={idx} className={"description" + (isCurrent(idx) ? " current" : "")}>{item}</div>
      ))}
    </div>
  );
};

function Main({children}: IDescriptionProps) {
  const childrenWithProps: any[] = [];
  React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (React.isValidElement(child)) {
      childrenWithProps.push(React.cloneElement(child, { }));
      return React.cloneElement(child, { });
    }

    return child;
  });

  const current = React.useContext(CarouselContext);

  function isCurrent(index: number) {
    return index === current;
  };

  return (
    <div className="images">
      {childrenWithProps.map((item, idx) => (
        <div key={idx} className={"image" + (isCurrent(idx) ? " current" : "")}>{item}</div>
      ))}
    </div>
  );
};


