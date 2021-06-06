import React, { MouseEvent, useCallback } from 'react';
import { useClipBoard } from '@design-system/utils';

function RGBToHex(rgb: string): string {
  const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  const splitRGB = rgb.substr(4).split(')')[0].split(sep);

  let r = (+splitRGB[0]).toString(16),
    g = (+splitRGB[1]).toString(16),
    b = (+splitRGB[2]).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return ('#' + r + g + b).toUpperCase();
}

function Colors(): React.ReactElement {
  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const hexColor = RGBToHex(
      window.getComputedStyle(event.currentTarget).backgroundColor,
    );
    useClipBoard(hexColor);
  }, []);

  return (
    <React.Fragment>
      <h1 className='text-3xl font-bold'>Colors</h1>
      <p>색상 정의입니다.</p>

      <h2 className='pt-5 text-xl font-bold'>Basic</h2>
      <div className='flex flex-col'>
        <button
          className='bg-black text-white px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'black';
          }}>
          black
        </button>
        <button
          className='bg-white px-4 py-2 border'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'white';
          }}>
          white
        </button>
      </div>

      <h2 className='pt-5 text-xl font-bold'>Gray Scale</h2>
      <div className='flex flex-col'>
        <button
          className='bg-gray-50 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 50';
          }}>
          gray 50
        </button>
        <button
          className='bg-gray-100 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 100';
          }}>
          gray 100
        </button>
        <button
          className='bg-gray-200 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 200';
          }}>
          gray 200
        </button>
        <button
          className='bg-gray-300 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 300';
          }}>
          gray 300
        </button>
        <button
          className='bg-gray-400 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 400';
          }}>
          gray 400
        </button>
        <button
          className='bg-gray-500 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 500';
          }}>
          gray 500
        </button>
        <button
          className='bg-gray-600 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 600';
          }}>
          gray 600
        </button>
        <button
          className='bg-gray-700 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 700';
          }}>
          gray 700
        </button>
        <button
          className='bg-gray-800 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 800';
          }}>
          gray 800
        </button>
        <button
          className='bg-gray-900 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'gray 900';
          }}>
          gray 900
        </button>
      </div>

      <h2 className='pt-5 text-xl font-bold'>Blue Scale</h2>
      <div className='flex flex-col'>
        <button
          className='bg-blue-50 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 50';
          }}>
          blue 50
        </button>
        <button
          className='bg-blue-100 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 100';
          }}>
          blue 100
        </button>
        <button
          className='bg-blue-200 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 200';
          }}>
          blue 200
        </button>
        <button
          className='bg-blue-300 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 300';
          }}>
          blue 300
        </button>
        <button
          className='bg-blue-400 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 400';
          }}>
          blue 400
        </button>
        <button
          className='bg-blue-500 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 500';
          }}>
          blue 500
        </button>
        <button
          className='bg-blue-600 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 600';
          }}>
          blue 600
        </button>
        <button
          className='bg-blue-700 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 700';
          }}>
          blue 700
        </button>
        <button
          className='bg-blue-800 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 800';
          }}>
          blue 800
        </button>
        <button
          className='bg-blue-900 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'blue 900';
          }}>
          blue 900
        </button>
      </div>

      <h2 className='pt-5 text-xl font-bold'>Green Scale</h2>
      <div className='flex flex-col'>
        <button
          className='bg-green-50 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 50';
          }}>
          green 50
        </button>
        <button
          className='bg-green-100 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 100';
          }}>
          green 100
        </button>
        <button
          className='bg-green-200 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 200';
          }}>
          green 200
        </button>
        <button
          className='bg-green-300 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 300';
          }}>
          green 300
        </button>
        <button
          className='bg-green-400 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 400';
          }}>
          green 400
        </button>
        <button
          className='bg-green-500 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 500';
          }}>
          green 500
        </button>
        <button
          className='bg-green-600 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 600';
          }}>
          green 600
        </button>
        <button
          className='bg-green-700 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 700';
          }}>
          green 700
        </button>
        <button
          className='bg-green-800 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 800';
          }}>
          green 800
        </button>
        <button
          className='bg-green-900 px-4 py-2'
          onClick={handleClick}
          onMouseOver={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'Click to copy hex code';
          }}
          onMouseOut={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.innerText = 'green 900';
          }}>
          green 900
        </button>
      </div>
    </React.Fragment>
  );
}

export default Colors;
