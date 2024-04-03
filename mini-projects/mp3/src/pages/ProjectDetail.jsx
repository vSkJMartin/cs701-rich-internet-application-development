import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";import styled from "styled-components";
import Link from "../components/Link.jsx";
import List from "../components/List.jsx";


const ProjectContainer = styled.div`
    width: 50%;
    margin: 10px auto;
`;

function Project({ userName }) {
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.github.com/repos/${userName}/${name}`, );
            const result = await data.json();

            if (result) {
                setProject(result);
                setLoading(false);
            }
        }

        if (userName && name) {
            fetchData();
        }
    }, [userName, name]);

    const items = [
        {
            field: 'html_url',
            value: <Link url={project.html_url} title={project.html_url} />
        },
        { field: 'created_at', value: project.created_at },
        { field: 'size', value: project.size },
        { field: 'language', value: project.language },
        { field: 'visibility', value: project.visibility }
    ];

    return (
        <ProjectContainer>
            <h2>Project: {project.name}</h2>
            {loading ? (
                <span>Loading</span>
            ) : (
                <div>
                    <List items={items} />
                </div>
            )}
        </ProjectContainer>
    );
}

export default Project;