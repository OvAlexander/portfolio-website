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
*/
export default function ProjectList(){
    return(
        <div className="w-full mb-20 body-font text-black">
            <div>
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                    Apps I've Built
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Software related projects based on web technologies and applications.
                </p>
            </div>
            <br></br>
            {
            projects.map((project) => (
            <article class="group">
                <div className="flex flex-row -m-4">
                    <div className="w-3/5 p-4">
                    <a href= {project.link}>
                        <img
                            alt=""
                            src={project.image}
                            class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:color-[75%]"
                        />

                        <div class="p-4">
                            <a href={project.link}>
                            <h3 class="text-lg font-medium text-gray-900">{project.title}</h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {project.subtitle}
                            </p>
                        </div>  
                    </a>
                    </div>
                    <div className="w-2/5 h-40 p-4 text-ellipsis overflow-hidden text-left">
                        <p>{project.description}</p>
                    </div>
                </div>
            </article>
            ))}

            <div className="flex flex-col w-full mb-20">
                <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                    Things I've Built
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Hardware related projects based on robotics and electronics.
                </p>
            </div>
            {
            hardware_projects.map((hardware_projects) => (
            <article class="group">
                <div className="flex flex-row -m-4">
                    <div className="w-3/5 p-4">
                    <a href= {hardware_projects.link}>
                        <img
                            alt=""
                            src={hardware_projects.image}
                            class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:color-[75%]"
                        />

                        <div class="p-4">
                            <a href={hardware_projects.link}>
                            <h3 class="text-lg font-medium text-gray-900">{hardware_projects.title}</h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {hardware_projects.subtitle}
                            </p>
                        </div>      
                    </a>
                    </div>
                    <div className="w-2/5 p-4">
                        <p>{hardware_projects.description}</p>
                    </div>
                </div>
            </article>
            ))}
        </div>
    );
}