import { useState, useEffect } from "react";
import Link from '../components/Link.jsx'
import List from "../components/List.jsx";
import styled from "styled-components";

const ProfileContainer = styled.div`
    width: 50%;
    margin: 10px auto;
`;

const ProfileAvatar = styled.img`
    width: 150px;
`;

function Profile({ userName }) {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const result = await profile.json();

            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }
        fetchData();
    }, [userName]);

    const items = [
        {
            field: 'html_url',
            value: <Link url={profile.html_url} title={profile.html_url} />
        },
        {
            field: 'repos_url',
            value: <Link url={profile.repos_url} title={profile.repos_url} />
        },
        { field: 'name', value: profile.name },
        { field: 'company', value: profile.company },
        { field: 'location', value: profile.location },
        { field: 'email', value: profile.email },
        { field: 'bio', value: profile.bio }
    ];

    return (
        <ProfileContainer>
            <h2>About me</h2>
            {loading ? (
                <span>Loading</span>
            ) : (
                <div>
                    <ProfileAvatar src={profile.avatar_url} alt={profile.name} />
                    <List items={items} />
                </div>
            )}
        </ProfileContainer>
    );
}

export default Profile;