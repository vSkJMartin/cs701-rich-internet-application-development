import Questions, {getServerSideProps as getServerSidePropsQuestions} from "@/pages/questions";

export function getServerSideProps(context) {
    return getServerSidePropsQuestions(context);
}

export default function Home(props) {
    return <Questions {...props} />
}