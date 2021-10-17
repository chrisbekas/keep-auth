import {useAuthUser} from 'react-auth-kit';
import SignOut from './SignOut';

import {useAuthHeader} from 'react-auth-kit'

const User = () => {

    const auth = useAuthUser();

    const authHeader = useAuthHeader();

    return (

        <div>
            <p>
                👋 Hey {auth().sub}
            </p>

            <p>
                🔑 {authHeader()}
            </p>

            <SignOut />
        </div>

    );
}

export default User;
