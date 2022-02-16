import React from 'react'

export default function EditTool(props) {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                <h4>{props.name}</h4>
                {props.type !== '' && <code>{props.type}</code>}
            </div>
            <div>{props.seperateSlot}</div>
            <div className="editToolAlign">
                {props.children}
            </div>
        </div>
    )
}
