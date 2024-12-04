'use client'

import Card from "./card"

export default function Cards() {
    return (
        <div className="flex-1 p-4 flex flex-wrap gap-4"
        >
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}