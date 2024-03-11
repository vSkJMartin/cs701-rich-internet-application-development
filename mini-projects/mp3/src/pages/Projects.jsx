import { useState, useEffect } from "react";
import Link from '../components/Link.jsx'
import List from "../components/List.jsx";
import styled from "styled-components";

const ProjectContainer = styled.div`
    width: 50%;
    margin: 10px auto;
`;

function Projects({ userName }) {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.github.com/users/${userName}/repos`);
            const result = await data.json();

            if (result) {
                setProjects(result);
                setLoading(false);
            }
        }

        fetchData();
    }, [userName]);

    return (
        <ProjectContainer>
            <h2>Projects</h2>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    <List items={projects.map((project) => ({
                        field: project.name,
                        value: <Link url={project.html_url} title={project.html_url} />,
                    }))} />
                </div>
            )}
        </ProjectContainer>
    );
}

export default Projects;