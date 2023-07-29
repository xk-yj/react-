import React from 'react';
import Carousel from '../Carousel';
import CarouselItem from '../CarouselItem';

export default function index1() {
  return (
    <div>
      <Carousel loop={true} trigger="hover">
        {[1, 2, 3, 4].map((item) => {
          if (item % 2 === 0) {
            return (
              <CarouselItem>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#f6f6f6' }}>
                  <h1
                    style={{
                      backgroundColor: '#d3dce6',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0',
                    }}
                  >
                    {item}
                  </h1>
                </div>
              </CarouselItem>
            );
          } else {
            return (
              <CarouselItem>
                <h1
                  style={{
                    backgroundColor: '#99a9bf',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0',
                  }}
                >
                  {item}
                </h1>
              </CarouselItem>
            );
          }
        })}
      </Carousel>
    </div>
  );
}
