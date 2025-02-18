import React from "react";
import { Card } from './Card.jsx';

function HomePage() {
    return (
        <>
        <div className="scroll-container">
            <div className="scroll-content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <div className="scroll-container">
            <div className="scroll-content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        </>
    )
}
export default HomePage;