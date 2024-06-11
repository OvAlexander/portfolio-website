import React from "react";
import Carousel from "./Carousel";
import { CameraIcon } from "@heroicons/react/solid";
export default function ProjectGallery(){
    const slides = [
        "./3dBVM.png",
        "./BTP.gif",
        "./life-dashboard.png",
        "./pod_white.png",
        "./sism.png",
        "./mine-clicker-game.gif",
    ];
    return (
        <div className="w-full bg-sea text-center text-black">
            <CameraIcon className="mx-auto inline-block w-10" />
            <h1 className="mb-3   text-3xl lg:text-5xl font-medium">Project Gallery</h1>            
            <a href="/project">
            <Carousel className = "" autoSlide={true} autoSlideInterval={3000}>
            {
            slides.map((s) => (
            <img className="h-[50vh] max-w-auto mx-auto" src={s} alt="gallery of project images" />
            ))}
            </Carousel>
            </a>
        </div>
    );
};