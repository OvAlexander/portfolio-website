import { projects, hardware_projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";
import { DesktopComputerIcon } from "@heroicons/react/solid";
/*
TODO: 
6/10/24
fix transitions when hovering over button
make side by side gallery
rename file
https://www.hyperui.dev/
"lg:w-2/3 mx-auto leading-relaxed text-base"
*/
export default function ProjectList(){
    return(
        <div className="w-full bg-secondary text-center text-sea">
            <div>
                <CodeIcon className="mx-auto inline-block w-10" />
                <h1 className="mb-3 text-3xl lg:text-5xl font-medium">Apps I've Built</h1>
                <p className="mb-3 text-xl lg:text-2xl">Software related projects based on web technologies and applications.</p>
            </div>
            {projects.map((project) => (
                <div className="">
                    <div className="text-sea bg-primary lg:flex">
                        <div className="flex-none">
                            <a href= {project.link}>
                                <img
                                    alt=""
                                    src={project.image}
                                    className="h-auto max-w-full lg:w-[30vw] mx-auto rounded-xl object-cover shadow-xl transition group-hover:color-[75%]"
                                />
                                <p className="text-2xl">{project.title}</p>
                                <p className="text-md">{project.subtitle}</p>
                            </a>
                        </div>
                        <div className="flex-initial text-left text-xl px-5">
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className="bg-secondary">
                <DesktopComputerIcon className="mx-auto inline-block w-10" />
                <h1 className="mb-3 text-3xl lg:text-5xl font-medium"> Things I've Built</h1>
                <p className="mb-3 text-xl lg:text-2xl"> Hardware related projects based on robotics and electronics.</p>
            </div>
            {hardware_projects.map((project) => (
                <div className="bg-primary">
                    <div className="text-sea lg:flex">
                        <div className="flex-none">
                            <a href= {project.link}>
                                <img
                                    alt=""
                                    src={project.image}
                                    className="h-auto max-w-full lg:w-[30vw] mx-auto rounded-xl object-cover shadow-xl transition group-hover:color-[75%]"
                                />
                                <p className="text-2xl">{project.title}</p>
                                <p className="text-md">{project.subtitle}</p>
                            </a>
                        </div>
                        <div className="flex-initial text-left text-xl px-5">
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}