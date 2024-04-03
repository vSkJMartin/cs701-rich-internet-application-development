import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from 'next/link';
import Card from "@/components/Card";

const QuestionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

const CardLink = styled.a`
    text-decoration: none;
`;

function Questions() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                'https://api.stackexchange.com/2.3/questions?page=1&order=desc&sort=hot&tagged= reactjs&site=stackoverflow');
            const result = await data.json();

            if (result) {
                setQuestions(result.items);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <QuestionsContainer>
            <h2>Questions</h2>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    {questions.map((question) => (
                        <Link
                            key={question.question_id}
                            href={`/questions/${question.question_id}`}
                            passHref
                        >
                            <CardLink>
                                <Card
                                    title={question.title}
                                    views={question.view_count}
                                    answers={question.answer_count}
                                    ownerUserId={question.owner.user_id}
                                    ownerProfileImage={question.owner.profile_image}
                                    ownerDisplayName={question.owner.display_name}
                                    ownerLink={question.owner.link}
                                    score={question.score}
                                />
                            </CardLink>
                        </Link>
                    ))}
                </div>
            )}
        </QuestionsContainer>
    );
}

export default Questions;