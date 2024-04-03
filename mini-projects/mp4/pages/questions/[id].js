import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card from "@/components/Card";

const QuestionDetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

function QuestionDetail() {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.stackexchange.com/2.3/questions/${id}?site=stackoverflow`);

            const result = await data.json();

            if (result) {
                setQuestion(result.items[0]);
                setLoading(false);
            }
        }

        id && fetchData();
    }, [id]);

    return (
        <QuestionDetailContainer>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <Card
                    key={question.question_id}
                    title={question.title}
                    views={question.view_count}
                    answers={question.answer_count}
                    ownerUserId={question.owner ? question.owner.user_id : ''}
                    ownerProfileImage={question.owner ? question.owner.profile_image : ''}
                    ownerDisplayName={question.owner ? question.owner.display_name : ''}
                    ownerLink={question.owner ? question.owner.link : ''}
                    score={question.score}
                />
            )}
        </QuestionDetailContainer>
    );
}

export default QuestionDetail;