import React from 'react'

//https://materializecss.com/preloader.html reloader из materialize

export const Loader = () => (
    <div style={{display: 'flex', justifyContent: 'center', padding: '2rem'}}>
        <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                    <div className="circle"/>
                </div>
                <div className="gap-patch">
                    <div className="circle"/>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"/>
                </div>
            </div>
        </div>
    </div>
)