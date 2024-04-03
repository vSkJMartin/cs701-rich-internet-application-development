import styled from "styled-components";
import Link from 'next/link';
import Head from "next/head";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";

const QuestionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

const CardLink = styled.a`
    text-decoration: none;
`;

function Questions({ questions, hasMore, page }) {
    return (
        <>
            <Head>
                <title>Questions</title>
            </Head>
            <QuestionsContainer>
                <h2>Questions</h2>
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
                <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore}/>
            </QuestionsContainer>
        </>
    );
}

export async function getServerSideProps(context) {
    const {page} = context.query;

    const data = await fetch(
        `https://api.stackexchange.com/2.3/questions?${page ? `page=${page}&` : ''}order=desc&sort=hot&tagged= reactjs&site=stackoverflow`,
    );
    const result = await data.json();

    return {
        props: {
            questions: result.items,
            hasMore: result.has_more,
            page: page || 1,
        }
    };
}

export default Questions;