import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
function Project() {    
    return(
        <main>
            <div>
                <Navbar />
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                        <ProjectList />
                </div>
            </div>
        </main>

    )
}
export default Project;