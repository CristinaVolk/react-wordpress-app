import React, { useState } from "react";
import QueueAnim from "rc-queue-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import Icon from "antd/lib/icon";
import "antd/dist/antd.css";
import "./styles.css";

const textData = {
  content:
    "Taiwan called motorcycle, motor bike [1] or a motorcycle," +
    " the motorcycle referred to in the mainland, Hong Kong and Southeast" +
    " Asia known as motorcycles.",
  title: "Motorcycle",
};
let dataArray = [
  { image: "https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png" },
];
dataArray = dataArray.map((item) => ({ ...item, ...textData }));

export default function PicDetailsDemo() {
  const className = "pic-details-demo";
  const [picOpen, setPicOpen] = useState({});

  const onImgClick = (_event, i) => {
    console.log(Object.keys(picOpen));
    console.log(i);
    const picToOpen = picOpen;
    Object.keys(picToOpen).forEach((key) => {
      if (key !== i && picToOpen[key]) {
        picToOpen[key] = false;
      }
    });
    picToOpen[i] = true;
    setPicOpen(picToOpen);
  };

  const onClose = (_event, i) => {
    const openedPic = picOpen;
    openedPic[i] = false;
    setPicOpen(openedPic);
  };

  const onTweenEnd = (i) => {
    const onTweenEndPicture = picOpen;
    delete onTweenEndPicture[i];
    setPicOpen(onTweenEndPicture);
  };

  const getDelay = (e) => {
    const i = e.index + (dataArray.length % 4);
    return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
  };

  const getLiChildren = () => {
    const imgWidth = 110;
    const imgHeight = 76;
    const imgBoxWidth = 130;
    const imgBoxHeight = 96;
    return dataArray.map((item, i) => {
      const { image, title, content } = item;
      const isEnter = typeof picOpen[i] === "boolean";
      const isOpen = picOpen[i];

      const left = isEnter ? 0 : imgBoxWidth * (i % 4);
      const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
      const isRight = Math.floor((i % 4) / 2);
      const isTop = Math.floor(i / 4);
      let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;

      const liStyle = isEnter
        ? { width: "100%", height: 175, zIndex: 1 }
        : null;
      const liAnimation = isOpen
        ? { boxShadow: "0 2px 8px rgba(140, 140, 140, .35)" }
        : { boxShadow: "0 0px 0px rgba(140, 140, 140, 0)" };
      let aAnimation = isEnter
        ? {
            delay: 400,
            ease: "easeInOutCubic",
            width: imgWidth,
            height: imgHeight,
            onComplete: onTweenEnd,
            left: imgBoxWidth * (i % 4),
            top: isTop ? imgBoxHeight : 0,
          }
        : null;
      aAnimation = isOpen
        ? {
            ease: "easeInOutCubic",
            left: isRight ? imgBoxWidth * 2 - 10 : 0,
            width: "50%",
            height: 175,
            top: 0,
          }
        : aAnimation;

      return (
        <TweenOne
          key={i}
          style={{
            left,
            top,
            ...liStyle,
          }}
          component='li'
          className={isOpen ? "open" : ""}
          animation={liAnimation}
        >
          <TweenOne
            component='a'
            onClick={(e) => onImgClick(e, i)}
            style={{
              left: imgLeft,
              top: imgTop,
            }}
            animation={aAnimation}
          >
            <img src={image} alt='imgCLick' width='100%' height='100%' />
          </TweenOne>
          <TweenOneGroup
            enter={[
              {
                opacity: 0,
                duration: 0,
                type: "from",
                delay: 400,
              },
              {
                ease: "easeOutCubic",
                type: "from",
                left: isRight ? "50%" : "0%",
              },
            ]}
            leave={{ ease: "easeInOutCubic", left: isRight ? "50%" : "0%" }}
            component=''
          >
            {isOpen && (
              <div
                className={`${className}-text-wrapper`}
                key='text'
                style={{
                  left: isRight ? "0%" : "50%",
                }}
              >
                <h1>{title}</h1>
                <Icon type='close' onClick={(e) => onClose(e, i)} />
                <em />
                <p>{content}</p>
              </div>
            )}
          </TweenOneGroup>
        </TweenOne>
      );
    });
  };

  return (
    <div className='gallery-container'>
      <QueueAnim type='bottom' className={`${className}-title`}>
        <h1 key='h1'>Our Brands</h1>
        <p key='p'>Create your own solution</p>
      </QueueAnim>
      <QueueAnim
        delay={getDelay}
        component='ul'
        className={`${className}-image-wrapper`}
        interval={0}
        type='bottom'
      >
        {getLiChildren()}
      </QueueAnim>
    </div>
  );
}
