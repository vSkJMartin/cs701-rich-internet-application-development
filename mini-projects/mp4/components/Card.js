import styled from "styled-components";

const CardWrapper = styled.div`
    text-align: left;
    padding: 1%;
    background: lightgray;
    border-radius: 5px;
    margin-bottom: 2%;
`;

const Title = styled.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkgray;
    color: black;
`;

const Count = styled.span`
    color: darkgray;
`;

const Owner = styled.div`
    margin-top: 10px;
`;

const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

function Card({ title, views, answers, ownerUserId, ownerProfileImage, ownerDisplayName, ownerLink,
    score }) {
    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Count>{`Views: ${views} | Answers: ${answers} | Score: ${score}`}</Count>
            <Owner>
                <ProfileImage src={ownerProfileImage} alt="Owner Profile Image" />
                <a href={ownerLink} target="_blank">{ownerDisplayName}</a>
                <Count>{`User ID: ${ownerUserId}`}</Count>
            </Owner>
        </CardWrapper>
    );
}

export default Card;