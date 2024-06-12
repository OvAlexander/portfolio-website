import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
function Project() {    
    return(
        <main>
            <div>
                <Navbar />
                <div className="mx-auto">
                        <ProjectList />
                </div>
            </div>
        </main>

    )
}
export default Project;