import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import EditTool from '../lib/EditTool'

import { MobileMockup, WindowMockup, BrowserMockup } from 'react-mockup'
import 'react-mockup/dist/index.css'
import GeneratedComponent from '../lib/GeneratedComponent';


export default function Editor() {
  const [currentMockupType, setCurrentMockupType] = useState('BrowserMockup');

  const [mockupPlaceHolderImage, setMockupPlaceHolderImage] = useState('https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg');
  const [mobileMockupPlaceHolderImage, setMobileMockupPlaceHolderImage] = useState('https://images.unsplash.com/photo-1574285013029-29296a71930e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80');

  const [mockupType, setMockupType] = useState('default');
  const [mockupAngleX, setMockupAngleX] = useState(0);
  const [mockupAngleY, setMockupAngleY] = useState(0);
  const [mockupShadow, setMockupShadow] = useState('');
  const [mockupBorder, setMockupBorder] = useState('');
  const [mockupColor, setMockupColor] = useState('white');
  const [mockupAccentColor, setMockupAccentColor] = useState('black');
  const [mockupHeadValue, setMockupHeadValue] = useState('react-mockup-editor');
  const [mockupWindowControlPosition, setMockupWindowControlPosition] = useState('left');

  const resetState = () => {
    setMockupType('default');
    setMockupAngleX(0);
    setMockupAngleY(0);
    setMockupShadow('');
    setMockupBorder('');
    setMockupColor('white');
    setMockupAccentColor('black');
    setMockupHeadValue('react-mockup-editor');
    setMockupWindowControlPosition('left');
  }
  const resetForMobile = () => {
    setMockupType('');
    setMockupColor('');
    setMockupAccentColor('');
    setMockupHeadValue('');
    setMockupWindowControlPosition('');
  }

  return (
    <div className={'container'}>
      <Head>
        <title>Mockup Editor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'main'}>
        <section className={'links'}>
          <Link href="/">Home</Link>
          <Link href="https://github.com/501A-Designs">Developer GitHub</Link>
          <Link href="https://github.com/501A-Designs/react-mockup">Github</Link>
          <Link href="https://www.npmjs.com/package/react-mockup">NPM</Link>
        </section>
        <section>
          <div>
            <h2>Edit Mockup</h2>
            <div>
              <div>
                <span>Switch to: </span>
                <code onClick={() => { setCurrentMockupType('BrowserMockup'); resetState() }}>BrowserMockup</code>
                <code onClick={() => { setCurrentMockupType('MobileMockup'); resetForMobile() }}>MobileMockup</code>
                <code onClick={() => { setCurrentMockupType('WindowMockup'); resetState() }}>WindowMockup</code>
              </div>
              <h3>CurrentMockup Type: <code>{currentMockupType}</code></h3>
            </div>
            <div className={'editor'}>
              <div className={'mockupContainer'}>
                {currentMockupType === 'BrowserMockup' &&
                  <BrowserMockup
                    src={mockupPlaceHolderImage}
                    type={mockupType}
                    angleX={mockupAngleX + 'deg'}
                    angleY={mockupAngleY + 'deg'}
                    shadow={mockupShadow}
                    border={mockupBorder}
                    color={mockupColor}
                    accentColor={mockupAccentColor}
                    urlValue={mockupHeadValue}
                    windowControlPosition={mockupWindowControlPosition}
                  />
                }
                {currentMockupType === 'MobileMockup' &&
                  <>
                    <h4>This Component is still in its beta development</h4>
                    <MobileMockup
                      src={mobileMockupPlaceHolderImage}
                      size={1}
                      type={mockupType}
                      angleX={mockupAngleX + 'deg'}
                      angleY={mockupAngleY + 'deg'}
                      shadow={mockupShadow}
                      border={mockupBorder}
                      color={mockupColor}
                    />
                  </>
                }
                {currentMockupType === 'WindowMockup' &&
                  <WindowMockup
                    src={mockupPlaceHolderImage}
                    type={mockupType}
                    angleX={mockupAngleX + 'deg'}
                    angleY={mockupAngleY + 'deg'}
                    shadow={mockupShadow}
                    border={mockupBorder}
                    color={mockupColor}
                    windowName={mockupHeadValue}
                    accentColor={mockupAccentColor}
                    windowControlPosition={mockupWindowControlPosition}
                  />
                }
              </div>
              <div className={'editorPannel'}>
                <button onClick={() => resetState()}>Reset All</button>
                {currentMockupType !== 'MobileMockup' &&
                  <>
                    <EditTool name="Type" type={mockupType}>
                      <button onClick={() => setMockupType('default')}>Default</button>
                      <button onClick={() => setMockupType('mac')}>Mac</button>
                      <button onClick={() => setMockupType('outline')}>Outline</button>
                      <button onClick={() => setMockupType('chrome')}>Chrome</button>
                    </EditTool>
                    <EditTool name="Window Control Position" type={mockupWindowControlPosition}>
                      <button onClick={() => setMockupWindowControlPosition('left')}>Left</button>
                      <button onClick={() => setMockupWindowControlPosition('right')}>Right</button>
                    </EditTool>
                  </>
                }
                <EditTool name="Border" type={mockupBorder}>
                  <button onClick={() => setMockupBorder('')}>Default</button>
                  <button onClick={() => setMockupBorder('none')}>None</button>
                </EditTool>
                <EditTool name="Shadow" type={mockupShadow}>
                  <button onClick={() => setMockupShadow('')}>Default</button>
                  <button onClick={() => setMockupShadow('none')}>None</button>
                  <input placeholder="Custom" onChange={(e) => { e.preventDefault(); setMockupShadow(e.target.value) }}/>
                </EditTool>
                <small>*The custom input allows you to insert your own css box-shadow properties. Ex) 0px 5px 15px grey</small>
                {currentMockupType !== 'MobileMockup' &&
                  <EditTool
                    name={currentMockupType == 'BrowserMockup' ? 'Display URL' : 'Display Title'}
                    type={''}
                  >
                    <input onChange={(e) => { e.preventDefault(); setMockupHeadValue(e.target.value) }} />
                  </EditTool>
                }
                <EditTool
                  name="Mockup Angle"
                  type={''}
                  seperateSlot={
                    <>
                      <h4 style={{ margin: '0 0 1em 0' }}>AngleX: <code>{mockupAngleX} degrees</code></h4>
                      <h4 style={{ margin: '0 0 1em 0' }}>AngleY: <code>{mockupAngleY} degrees</code></h4>
                    </>
                  }>
                  <button onClick={() => setMockupAngleX(mockupAngleX - 0.5)}>Top</button>
                  <button onClick={() => setMockupAngleX(mockupAngleX + 0.5)}>Bottom</button>
                  <button onClick={() => setMockupAngleY(mockupAngleY + 0.5)}>Left</button>
                  <button onClick={() => setMockupAngleY(mockupAngleY - 0.5)}>Right</button>
                </EditTool>
                {currentMockupType !== 'MobileMockup' &&
                  <>
                    <EditTool name="Color" type={mockupColor}>
                      <button onClick={() => setMockupColor('white')}>White</button>
                      <button onClick={() => setMockupColor('black')}>Black</button>
                      <button onClick={() => setMockupColor('grey')}>Grey</button>
                      <input type="color" value={mockupColor} onChange={(e) => { e.preventDefault(); setMockupColor(e.target.value); }} />
                    </EditTool>
                    <EditTool name="Accent Color" type={mockupAccentColor}>
                      <button onClick={() => setMockupAccentColor('white')}>White</button>
                      <button onClick={() => setMockupAccentColor('black')}>Black</button>
                      <button onClick={() => setMockupAccentColor('grey')}>Grey</button>
                      <input type="color" value={mockupAccentColor} onChange={(e) => { e.preventDefault(); setMockupAccentColor(e.target.value); }} />
                    </EditTool>
                  </>
                }
              </div>
            </div>
          </div>
          <div>
            <h2>Generated React Component</h2>
            <GeneratedComponent
              componentName={currentMockupType}
              url={'url'}
              mockupType={mockupType}
              mockupAngleX={mockupAngleX}
              mockupAngleY={mockupAngleY}
              mockupShadow={mockupShadow}
              mockupBorder={mockupBorder}
              mockupColor={mockupColor}
              mockupAccentColor={mockupAccentColor}
              mockupHeadValue={mockupHeadValue}
              mockupWindowControlPosition={mockupWindowControlPosition}
            />
          </div>
        </section>
      </main>

      <footer className={'footer'}>
        <a
          href="https://501a.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed & Developed by 501A
        </a>
      </footer>
    </div>
  )
}
