import React from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import { TweenOneGroup } from "rc-tween-one";
import { Icon } from "antd";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import "./styles.css";

const Element = BannerAnim.Element;

const textData = {
  content:
    "Taiwan called motorcycle, motor bike [1] or a motorcycle," +
    " the motorcycle referred to in the mainland, " +
    "Hong Kong and Southeast Asia known as motorcycles [2], " +
    "is a driven by the engine, " +
    "operated by a hand or two directions three-wheeled vehicles, is a means of transport. " +
    "In some military or police applications, will add a side compartment and a secondary wheel, " +
    "become a special three-wheeled motorcycle, mobility Zheyi common plug-in auxiliary wheels.",
  title: "Motorcycle",
};

let dataArray = [
  {
    pic: "https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png",
    map: "https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png",
    color: "#2D2B2D",
    background: "rgb(76, 61, 76, 0.6)",
  },
  {
    pic: "https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png",
    map: "https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png",
    color: "#204846",
    background: "rgb(80, 121, 118, 0.6)",
  },
  {
    pic: "https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png",
    map: "https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png",
    color: "rgb(107, 170, 255)",
    background: "rgb(107, 170, 255, 0.4)",
  },
];
dataArray = dataArray.map((item) => ({ ...item, ...textData }));

export default class AntDetailSwitch extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "details-switch-demo",
  };

  constructor(props) {
    super(props);
    this.state = {
      showInt: 0,
      delay: 0,
      imgAnim: [
        { translateX: [0, 300], opacity: [1, 0] },
        { translateX: [0, -300], opacity: [1, 0] },
      ],
    };
    this.oneEnter = false;
  }

  onChange = () => {
    if (!this.oneEnter) {
      this.setState({ delay: 300 });
      this.oneEnter = true;
    }
  };

  onLeft = () => {
    let showInt = this.state.showInt;
    showInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (showInt <= 0) {
      showInt = 0;
    }
    this.setState({ showInt, imgAnim });
    console.log(this.bannerImg);
    this.bannerImg.prev();
    this.bannerText.prev();
  };

  onRight = () => {
    let showInt = this.state.showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    showInt += 1;
    if (showInt > dataArray.length - 1) {
      showInt = dataArray.length - 1;
    }
    this.setState({ showInt, imgAnim });
    this.bannerImg.next();
    this.bannerText.next();
  };

  getDuration = (e) => {
    if (e.key === "map") {
      return 800;
    }
    return 1000;
  };

  render() {
    const imgChildren = dataArray.map((item, i) => (
      <Element
        key={i}
        style={{
          background: item.color,
          height: "100%",
        }}
        leaveChildHide
      >
        <QueueAnim
          animConfig={this.state.imgAnim}
          duration={this.getDuration}
          delay={[!i ? this.state.delay : 300, 0]}
          ease={["easeOutCubic", "easeInQuad"]}
          key='img-wrapper'
        >
          <div className={`${this.props.className}-map map${i}`} key='map'>
            <img src={item.map} alt='aimImg-1' width='100%' />
          </div>
          <div className={`${this.props.className}-pic pic${i}`} key='pic'>
            <img src={item.pic} alt='aimImg-2' width='100%' />
          </div>
        </QueueAnim>
      </Element>
    ));
    const textChildren = dataArray.map((item, i) => {
      const { title, content, background } = item;
      return (
        <Element key={i}>
          <QueueAnim
            type='bottom'
            duration={1000}
            delay={[!i ? this.state.delay + 500 : 800, 0]}
          >
            <h1 key='h1'>{title}</h1>
            <em key='em' style={{ background }} />
            <p key='p'>{content}</p>
          </QueueAnim>
        </Element>
      );
    });
    return (
      <div
        className={`${this.props.className}-wrapper`}
        style={{ background: dataArray[this.state.showInt].background }}
      >
        <div className={this.props.className}>
          <BannerAnim
            prefixCls={`${this.props.className}-img-wrapper`}
            sync
            type='across'
            duration={1000}
            ease='easeInOutExpo'
            arrow={false}
            thumb={false}
            ref={(c) => {
              console.log(c);
              this.bannerImg = c;
            }}
            onChange={this.onChange}
            dragPlay={false}
          >
            {imgChildren}
          </BannerAnim>
          <BannerAnim
            prefixCls={`${this.props.className}-text-wrapper`}
            sync
            type='across'
            duration={1000}
            arrow={false}
            thumb={false}
            ease='easeInOutExpo'
            ref={(c) => {
              this.bannerText = c;
            }}
            dragPlay={false}
          >
            {textChildren}
          </BannerAnim>
          <TweenOneGroup
            enter={{ opacity: 0, type: "from" }}
            leave={{ opacity: 0 }}
          >
            {this.state.showInt && (
              <Icon type='left' key='left' onClick={this.onLeft} />
            )}
            {this.state.showInt < dataArray.length - 1 && (
              <Icon type='right' key='right' onClick={this.onRight} />
            )}
          </TweenOneGroup>
        </div>
      </div>
    );
  }
}
