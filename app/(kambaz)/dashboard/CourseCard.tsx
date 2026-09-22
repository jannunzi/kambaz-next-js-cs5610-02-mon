import Link from "next/link";

export default function CourseCard({
    title,
    code,
    instructor,
    ta,
    href,
}: {
    title: string;
    code: string;
    instructor: string;
    ta: string;
    href: string;
}) {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{code}</h4>
            <p>
                <span>Instructor: {instructor}</span><br />
                <span>TA: {ta}</span>   
            </p>
            <Link href={href}>Go</Link>
        </div>
    );
}