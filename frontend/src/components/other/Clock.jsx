import { useCallback, useEffect, useRef } from "react"
import { SlidingTextAnimationViewOnHover } from "./SlidingTextOnHover";

export default function Clock({size='300px', backgroundColor='rgb(50,50,50,0.5)', color='white', style={}}) {
    let time = new Date();
    let [miliSec ,sec, min, hr] = [time.getMilliseconds() ,time.getSeconds(), time.getMinutes(), time.getHours()];
    let secDeg = (sec*6 + 0.006*miliSec - 90);
    const minDeg = (min*6 + sec*0.1 - 90);
    const hrDeg = (hr*30 + min*0.5 - 90); 

    return (
        <div className="relative aspect-square flex items-center justify-center after:absolute after:size-2 after:bg-[var(--color)] after:rounded-full before:absolute before:size-2 before:bg-[var(--color)] before:rounded-full before:z-1 after:animate-ping" style={{width: size, '--color': color, ...style}} >
            {
                ['4s', '6s'].map(dur => (
                    <div key={dur} className="absolute w-full aspect-[0.95] animate-spin rounded-[50%]" style={{backgroundColor, animationDuration: dur}} ></div>
                ))
            }

            <div className="clock-numbers absolute flex items-center justify-center size-full">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12].map(num => {
                        return (
                            <span key={`clock-number-${num}`} className="absolute size-full flex items-center p-5" style={{rotate: `${90 + num * 30}deg`}}>
                                <span className="absolute font-serif md:text-2xl" style={{rotate: `-${90 + num * 30}deg`}}>{num}</span>
                            </span>
                        )
                    })
                }
            </div>

            <div className="clock-day-display absolute border-2 text-md font-mono font-semibold px-2 h-6 flex items-center justify-center -translate-y-[200%] rounded-md text-sm animate-pe max-sm:hidden">
                <SlidingTextAnimationViewOnHover
                    text={time.toLocaleDateString().split('/').join(' / ')}
                />
            </div>  

            <div 
                className="border-2 absolute w-[28%] border-white animate-spin translate-x-[50%] origin-left rounded-[0_50%_50%_0] opacity-50" 
                style={{animationDuration: '60s', rotate: `${secDeg}deg`}} 
            />

            <div 
                className="border-2 absolute w-[24%] border-white animate-spin translate-x-[50%] origin-left rounded-[0_50%_50%_0] opacity-50" 
                style={{animationDuration: '3600s', rotate: `${minDeg}deg`}} 
            />

            <div 
                className="border-2 absolute w-[20%] border-white animate-spin translate-x-[50%] origin-left rounded-[0_50%_50%_0] opacity-50" 
                style={{animationDuration: '216000s', rotate: `${hrDeg}deg`}} 
            />
        </div>
    )
}