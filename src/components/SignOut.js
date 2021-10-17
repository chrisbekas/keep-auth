import { useSignOut } from 'react-auth-kit';

const SignOut = () => {

    const signOut = useSignOut();

    return (
        <div>
            <button onClick={() => signOut()}>
                Sign Out
            </button>
        </div>
    )

}

export default SignOut;