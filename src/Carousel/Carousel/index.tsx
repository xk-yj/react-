import React, { FC, memo, useEffect, useState, useRef } from 'react';
import Css from '../index.module.less';
import { CarouselProps } from './interface';
import Icon from '../../Icon';
const Carousel: FC<CarouselProps> = memo(
  ({ height, initial_index, trigger, autoplay, interval, loop, change, children }) => {
    let [index, setIndex] = useState(initial_index ? initial_index : 0);
    let carouselMainStyle = {
      width: 100 * (loop ? children.length + 1 : children.length) + '%',
      height: height ? height : '200px',
      left: index * -100 + '%',
    };
    const carouselMain: any = useRef(null);

    interval = Number(interval) ? interval : 3000;

    autoplay = autoplay ? autoplay : true;

    loop = loop ? loop : true;

    let [timer, setTimer]: any = useState(null);

    if (trigger !== 'hover') {
      trigger = 'click';
    }

    useEffect(() => {
      if (autoplay) {
        clearInterval(timer);
        setTimer(null);
        let time = setInterval(() => {
          nextClick();
        }, interval);
        setTimer(time);
      }
      return () => {
        if (autoplay) {
          clearInterval(timer);
          setTimer(null);
        }
      };
    }, []);

    const preClick = () => {
      let num = -parseInt(carouselMain.current.style.left) / 100;
      if (num > 0) {
        setIndex((num) => num - 1);
        change ? change({ index: num }) : '';
      } else {
        carouselMain.current.style.transition = 'none';
        setIndex(children.length);
        setTimeout(() => {
          carouselMain.current.style.transition = 'all .3s';
          setIndex(children.length - 1);
          change ? change({ index: num }) : '';
        }, 10);
      }
    };

    const nextClick = () => {
      if (carouselMain.current) {
        let num = -parseInt(carouselMain.current.style.left) / 100;
        if (num < children.length - 1) {
          carouselMain.current.style.transition = 'all .3s';
          setIndex((num) => num + 1);
          change ? change({ index: num }) : '';
        } else {
          setIndex((num) => num + 1);
          setTimeout(() => {
            carouselMain.current.style.transition = 'none';
            setIndex(0);
            change ? change({ index: num }) : '';
          }, 300);
        }
      } else {
        clearInterval(timer);
        timer = null;
      }
    };

    const MouseOver = () => {
      autoplay ? clearInterval(timer) : '';
      setTimer(null);
    };
    const MouseOut = () => {
      if (autoplay) {
        clearInterval(timer);
        setTimer(null);
        let time = setInterval(
          () => {
            nextClick();
          },
          interval ? interval : 3000,
        );
        setTimer(time);
      }
    };

    return (
      <div
        className={[Css['carousel'], Css[trigger]].join(' ')}
        onMouseOver={() => {
          MouseOver();
        }}
        onMouseOut={() => {
          MouseOut();
        }}
      >
        <div
          className={[Css['carousel_main']].join(' ')}
          style={carouselMainStyle}
          ref={carouselMain}
        >
          {children.map((item: any) => {
            return item;
          })}
          {loop ? children[0] : ''}
        </div>
        <div
          className={Css['pre']}
          onClick={() => {
            preClick();
          }}
        >
          <Icon name="arrow-leftdanjiantou-zuo" size={18} />
        </div>
        <div
          className={Css['next']}
          onClick={() => {
            nextClick();
          }}
        >
          <Icon name="arrow-rightjiantou-you2" size={18} />
        </div>
        <ul className={Css['carousel_indicators']}>
          {children.map((item: any, ind: any) => {
            return (
              <li
                className={ind === (index === children.length ? 0 : index) ? Css['action'] : ''}
                onClick={() => {
                  setIndex(ind);
                }}
                onMouseOver={() => {}}
              ></li>
            );
          })}
        </ul>
      </div>
    );
  },
);

export default Carousel;
