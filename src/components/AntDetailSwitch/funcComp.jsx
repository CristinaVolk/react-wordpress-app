import React, { useState, useRef } from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import { TweenOneGroup } from "rc-tween-one";
import ArrowIcon from "../../assets/right-arrow-icon.png";
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

export default function AntDetailSwitch() {
  let oneEnter = false;
  const className = "details-switch-demo";
  const initialImgAnim = [
    { translateX: [0, 300], opacity: [1, 0] },
    { translateX: [0, -300], opacity: [1, 0] },
  ];

  const [showInt, setShowInt] = useState(0);
  const [delay, setDelay] = useState(0);
  const [imgAnim, setImgAnim] = useState(initialImgAnim);

  const bannerImg = useRef();
  const bannerText = useRef();

  const onChange = () => {
    if (!oneEnter) {
      setDelay(300);
      oneEnter = true;
    }
  };

  const onLeft = () => {
    let leftShowInt = showInt;
    leftShowInt -= 1;
    const imgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (leftShowInt <= 0) {
      leftShowInt = 0;
    }
    setShowInt(leftShowInt);
    setImgAnim(imgAnim);
    bannerImg.current.prev();
    bannerText.current.prev();
  };

  const onRight = () => {
    let rightShowInt = showInt;
    const imgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    rightShowInt += 1;
    if (rightShowInt > dataArray.length - 1) {
      rightShowInt = dataArray.length - 1;
    }
    setShowInt(rightShowInt);
    setImgAnim(imgAnim);
    bannerImg.current.next();
    bannerText.current.next();
  };

  const getDuration = (e) => {
    console.log(e);
    if (e.key === "map") {
      return 800;
    }
    return 1000;
  };

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
        animConfig={imgAnim}
        duration={getDuration}
        delay={[!i ? delay : 300, 0]}
        ease={["easeOutCubic", "easeInQuad"]}
        key='img-wrapper'
      >
        <div className={`${className}-map map${i}`} key='map'>
          <img src={item.map} alt='aimImg-1' width='100%' />
        </div>
        <div className={`${className}-pic pic${i}`} key='pic'>
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
          delay={[!i ? delay + 500 : 800, 0]}
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
      className={`${className}-wrapper`}
      style={{ background: dataArray[showInt].background }}
    >
      <div className={className}>
        <BannerAnim
          prefixCls={`${className}-img-wrapper`}
          sync
          type='across'
          duration={1000}
          ease='easeInOutExpo'
          arrow={false}
          thumb={false}
          ref={bannerImg}
          onChange={onChange}
          dragPlay={false}
        >
          {imgChildren}
        </BannerAnim>
        <BannerAnim
          prefixCls={`${className}-text-wrapper`}
          sync
          type='across'
          duration={1000}
          arrow={false}
          thumb={false}
          ease='easeInOutExpo'
          ref={bannerText}
          dragPlay={false}
        >
          {textChildren}
        </BannerAnim>
        <TweenOneGroup
          enter={{ opacity: 0, type: "from" }}
          leave={{ opacity: 0 }}
        >
          {showInt && (
            <img
              src={ArrowIcon}
              alt='arrow'
              key='left'
              onClick={onLeft}
              className='swipeLeft'
            />
          )}

          {showInt < dataArray.length - 1 && (
            <button key='right' onClick={onRight} className='swipeRight'>
              Right
            </button>
          )}
        </TweenOneGroup>
      </div>
    </div>
  );
}
