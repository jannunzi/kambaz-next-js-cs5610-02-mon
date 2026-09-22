export default function TitledList(
    {title, children}:
    {title: string, children: React.ReactNode}) {
    return (
        <div>
            <h3>{title}</h3>
            <ul>{children}</ul>
        </div>
    );
}