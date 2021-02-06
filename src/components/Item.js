import React from 'react'
import Button from './Button'

export default function Item(props) {
    return (
        <div className="tesla-item" style={{backgroundImage: `url(${props.image})`}}>
            <div className="item-container">
                <div className="item-text">
                    <p>{props.title}</p>
                    <div className="item-desc">
                        <p>{props.desc}</p>
                    </div>
                </div>

                <div className="item-footer">
                    <div className="item-interact">
                        <Button imp="primary" text={props.leftText} link={props.leftLink}/>
                        {
                            props.rightText && (
                                <Button imp="secondary" text={props.rightText} link={props.rightLink} />
                            )
                        }
                    </div>

                    {props.first && (
                        <div className="item-expand">

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
