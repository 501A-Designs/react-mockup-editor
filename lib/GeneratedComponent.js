import React from 'react'

export default function GeneratedComponent(props) {
    return (
        <div className="generatedComponent">
            &lt;{props.componentName}<br />
            <div style={{ marginLeft: '15px' }}>
                src=&quot;{props.url}&quot;<br />
                {props.mockupType != "" && <>type=&quot;{props.mockupType}&quot;<br /></>}
                angleX=&quot;{props.mockupAngleX}deg&quot;<br />
                angleY=&quot;{props.mockupAngleY}deg&quot;<br />

                {props.mockupColor != "" && <>color=&quot;{props.mockupColor}&quot;<br /></>}
                {props.mockupAccentColor != "" && <>accentColor=&quot;{props.mockupAccentColor}&quot;<br /></>}
                {props.mockupShadow != "" && <>shadow=&quot;{props.mockupShadow}&quot;<br /></>}
                {props.mockupBorder != "" && <>border=&quot;{props.mockupBorder}&quot;<br /></>}
                {props.mockupHeadValue != "" && <>{props.componentName === 'WindowMockup' ? 'windowName' : 'urlValue'}=&quot;{props.mockupHeadValue}&quot;<br /></>}
                {props.mockupWindowControlPosition != "" && <>windowControlPosition=&quot;{props.mockupWindowControlPosition}&quot;<br /></>}
            </div>
            /&gt;
        </div>
    )
}
