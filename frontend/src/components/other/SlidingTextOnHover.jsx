import { useState } from "react";

export function SlidingTextAnimationViewOnHover({text, animationDuration=500, animationDelay=25, className=''}) {
    
    const [isHover, setHover] = useState(false);

    return (
        <div 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            className="flex items-center overflow-hidden select-none"
        >
            {text.split('').map((char, index) => (
                <div key={index}
                    className="relative flex flex-col" 
                    style={{
                        viewTransitionName: `all`,
                        transitionDuration: `${animationDuration}ms`,
                        transitionDelay: `${index * animationDelay}ms`,
                        transform: isHover ? `translateY(-100%)` : 'translateY(0%)',
                        visibility: char === ' ' ? 'hidden' : 'visible',
                    }}
                >
                    <p className={className} >{char === ' ' ? '_' : char}</p>
                    <p className={`absolute translate-y-[100%] ${className}`} >{char === ' ' ? '_' : char}</p>
                </div>
            ))}
        </div>
    )
}