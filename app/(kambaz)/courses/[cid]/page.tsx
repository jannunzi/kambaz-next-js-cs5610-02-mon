export default async function CoursePage({
    params,
}: {
    params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    return (
        <div>
            <h1>Course {cid}</h1>
        </div>
    );
}
