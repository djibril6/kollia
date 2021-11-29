import React, { Component } from 'react';
import './Stepper.scss';

interface ICommon {
  baseColor?: {
    background: string;
    textColor: string;
  };
  activateColor?: {
    background: string;
    textColor: string;
  };
}
interface IStepperProps extends ICommon {
  children: React.ReactNode;
  labels?: string[];
  subtitles?: string[];
  nextLabel?: string;
  prevLabel?: string;
  current: number;
}
interface IStepperState {
  current: number;
}

const StepperContext = React.createContext(1);

export default class Stepper extends Component<IStepperProps, IStepperState> {

  private numberSteps: number = 0;
  private children: any;
  constructor(props: IStepperProps) {
    super(props);
    this.state = {current: 1}
    this.init();
  }

  static Item = Item;
  static Footer = Footer;

  init() {
    let current = this.props.current;
    // if (current < 1) {
    //   current = 1;
    // } else if (current > this.numberSteps) {
    //   current = this.numberSteps;
    // }Item(props: IItemProps): JSX.Element

    // React.Children.forEach(this.props.children, (child: any) => {
    //   console.log(child.type.name === Item.name)
    //   if (child.type.prototype instanceof Item) {
    //     throw new Error('` children should be of type `Item`.');
    //   }
    // });

    this.setState({current})
    let index = 0;
    this.numberSteps = React.Children.count(this.props.children);

    React.Children.forEach(this.props.children, (child: any) => {
      if (child.type.name !== Item.name && child.type.name !== Footer.name) {
        throw new Error(`Children should be <Item></Item> or <Footer></Footer>. Receive <${child.type}></${child.type}> Instead`);
      }
    });
    

    this.children = React.Children.map(this.props.children, child => {

      index++;
      
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { index });
      }
  
      return child;
    });
  }
  componentDidUpdate(previousProps: IStepperProps, previousState: any) {
    if (previousProps.children !== this.props.children || previousProps.current !== this.props.current) {
      this.init();
      this.forceUpdate();
    }
  }

  isActivated(index: number) {
    return index <= this.state.current;
  }

  onNext() {
    const current = this.state.current;
    this.setState({
      current: current < this.numberSteps ? current + 1 : this.numberSteps
    });
  }

  onPrev() {
    const current = this.state.current;
    this.setState({
      current: current > 1 ? current - 1 : 1
    });
  }

  goToStep(step: number) {
    this.setState({
      current: step
    });
  }

  render() {
    return (
      <div className="stepperGlobal stepperContainer">
        <div className="header">

          {Array.from({length: this.numberSteps}).map((_, idx) => (
            <Step 
              key={idx} 
              index={idx}
              label={
                (this.props.labels 
                  ? this.props.labels[idx] || (idx+1).toString()
                  : (idx+1).toString())
              }
              subtitle={
                (this.props.subtitles
                  ? this.props.subtitles[idx] || "Step " + (idx+1)
                  : "Step " + (idx+1))
              }
              activated={this.isActivated(idx+1)}
              onClick={() => this.goToStep(idx + 1)}
            />
          ))}
        </div>

        <div className="body">

          <StepperContext.Provider value={this.state.current}>
            {this.children}
          </StepperContext.Provider>
          
        </div>
      </div>
    )
  }
}

interface IItemProps {
  children: React.ReactNode;
  index?: number;
}
function Item(props: IItemProps) {
  const current = React.useContext(StepperContext);
  const canShow = (index: number) => {
    return index === current;
  }
  return (
    <div 
      className={"item " + (canShow(props.index!) ? "activated": "")}
    >
      {props.children}</div>
  );
}

interface IStepProps extends ICommon {
  activated: boolean;
  label: string;
  subtitle: string;
  index: number;
  onClick: () => void;
}
function Step(props: IStepProps) {
  return (
    <>
      {props.index > 0 && <div className="progress">
        <div className="line" ref={el => {
          if (el) {
            el.style.backgroundColor = props.baseColor?.background || '#5E6D77';
          }
        }}></div>
        <div className={"value " + (props.activated ? "activated": "")} ref={el => {
          if (el) {
            el.style.backgroundColor = props.baseColor?.background || '#5191FA';
          }
        }}></div>
      </div>}
      <div className="step-ball" 
        ref={el => {
          if (el) {
            el.style.backgroundColor = props.activated 
              ? props.activateColor?.background || '#5191FA'
              : props.baseColor?.background || '#5E6D77';

            el.style.color = props.activated
              ? props.activateColor?.textColor || '#FFFFFF'
              : props.baseColor?.textColor || '#FFFFFF';
          }
        }}
        onClick={props.onClick}
      >
        {props.label}
        <label>{props.subtitle}</label>
      </div>
    </>
  );
}

function Footer(props: {children: React.ReactNode}) {
  return <>{props.children}</>;
}
