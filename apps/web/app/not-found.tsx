import Link from 'next/link'

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h3>Couldn't find what you were looking for. Sorry about that!</h3>
            <Link href="/" style={{ color: 'green', textDecoration: 'underline' }}>
                Return to Home
            </Link>
        </div>
    );
}